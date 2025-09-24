#!/bin/bash

# Social Media Platform Deployment Script
# This script handles the deployment of the social media platform

set -e

echo "🚀 Starting Social Media Platform Deployment..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if Docker is installed
if ! command -v docker &> /dev/null; then
    print_error "Docker is not installed. Please install Docker first."
    exit 1
fi

# Check if Docker Compose is installed
if ! command -v docker-compose &> /dev/null; then
    print_error "Docker Compose is not installed. Please install Docker Compose first."
    exit 1
fi

# Create .env file if it doesn't exist
if [ ! -f .env ]; then
    print_warning "Creating .env file with default values..."
    cat > .env << EOF
# Database Configuration
DATABASE_URL=jdbc:mysql://mysql:3306/SocialMedia
DATABASE_USERNAME=socialuser
DATABASE_PASSWORD=socialpass

# Mail Configuration (Update these with your SMTP settings)
MAIL_HOST=smtp.gmail.com
MAIL_PORT=587
MAIL_USERNAME=your_email@example.com
MAIL_PASSWORD=your_app_password

# CORS Configuration
CORS_ALLOWED_ORIGINS=http://localhost,http://localhost:80,http://localhost:3000
EOF
    print_warning "Please update the .env file with your actual configuration values."
fi

# Build and start services
print_status "Building and starting services..."

# Stop existing containers
print_status "Stopping existing containers..."
docker-compose down

# Build and start services
print_status "Building and starting new containers..."
docker-compose up --build -d

# Wait for services to be ready
print_status "Waiting for services to be ready..."
sleep 30

# Check if services are running
print_status "Checking service health..."

# Check MySQL
if docker-compose exec mysql mysqladmin ping -h localhost --silent; then
    print_status "✅ MySQL is running"
else
    print_error "❌ MySQL is not responding"
    exit 1
fi

# Check Backend
if curl -f http://localhost:8080/actuator/health > /dev/null 2>&1; then
    print_status "✅ Backend is running"
else
    print_error "❌ Backend is not responding"
    exit 1
fi

# Check Frontend
if curl -f http://localhost/health > /dev/null 2>&1; then
    print_status "✅ Frontend is running"
else
    print_error "❌ Frontend is not responding"
    exit 1
fi

print_status "🎉 Deployment completed successfully!"
print_status "📱 Frontend: http://localhost"
print_status "🔧 Backend API: http://localhost:8080"
print_status "🗄️  Database: localhost:3306"

echo ""
print_status "To view logs: docker-compose logs -f"
print_status "To stop services: docker-compose down"
print_status "To restart services: docker-compose restart"

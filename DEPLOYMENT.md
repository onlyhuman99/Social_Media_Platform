# Social Media Platform - Deployment Guide

This guide covers deploying the Social Media Platform using GitHub Actions, Docker, and various cloud providers.

## 🏗️ Architecture

- **Frontend**: React + Vite (Port 80)
- **Backend**: Spring Boot (Port 8080)
- **Database**: MySQL 8.0 (Port 3306)

## 🚀 Quick Start with Docker Compose

### Prerequisites
- Docker and Docker Compose installed
- Git

### Local Deployment

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd social-media-platform
   ```

2. **Configure environment**
   ```bash
   cp env.example .env
   # Edit .env with your configuration
   ```

3. **Deploy**
   ```bash
   chmod +x deploy.sh
   ./deploy.sh
   ```

4. **Access the application**
   - Frontend: http://localhost
   - Backend API: http://localhost:8080
   - Database: localhost:3306

## 🔧 GitHub Actions Deployment

The repository includes a comprehensive GitHub Actions workflow (`.github/workflows/deploy.yml`) that:

### Features
- ✅ **Multi-stage CI/CD pipeline**
- ✅ **Automated testing** (Backend + Frontend)
- ✅ **Docker image building**
- ✅ **Container registry publishing**
- ✅ **Production deployment**

### Workflow Steps

1. **Backend Job**
   - Sets up Java 21
   - Runs MySQL service for testing
   - Executes Maven tests
   - Builds Spring Boot JAR
   - Creates Docker image
   - Pushes to GitHub Container Registry

2. **Frontend Job**
   - Sets up Node.js 20
   - Installs dependencies
   - Runs linting
   - Builds React application
   - Creates Docker image
   - Pushes to GitHub Container Registry

3. **Deploy Job** (Main branch only)
   - Triggers on main/master branch pushes
   - Deploys to production environment
   - Sends deployment notifications

### Required Secrets

Add these secrets to your GitHub repository:

```
GITHUB_TOKEN          # Automatically provided
DATABASE_URL          # Production database URL
DATABASE_USERNAME     # Database username
DATABASE_PASSWORD     # Database password
MAIL_HOST            # SMTP host
MAIL_PORT            # SMTP port
MAIL_USERNAME        # Email username
MAIL_PASSWORD        # Email password/app password
```

## ☁️ Cloud Deployment Options

### Option 1: AWS ECS/Fargate

1. **Create ECS Cluster**
   ```bash
   aws ecs create-cluster --cluster-name social-media-platform
   ```

2. **Create Task Definition**
   - Use the Docker images from GitHub Container Registry
   - Configure environment variables
   - Set up networking and security groups

3. **Deploy Service**
   ```bash
   aws ecs create-service --cluster social-media-platform --service-name social-backend
   ```

### Option 2: Google Cloud Run

1. **Deploy Backend**
   ```bash
   gcloud run deploy social-backend \
     --image ghcr.io/your-username/your-repo-backend:latest \
     --platform managed \
     --region us-central1 \
     --allow-unauthenticated
   ```

2. **Deploy Frontend**
   ```bash
   gcloud run deploy social-frontend \
     --image ghcr.io/your-username/your-repo-frontend:latest \
     --platform managed \
     --region us-central1 \
     --allow-unauthenticated
   ```

### Option 3: Azure Container Instances

1. **Create Resource Group**
   ```bash
   az group create --name social-media-rg --location eastus
   ```

2. **Deploy Backend**
   ```bash
   az container create \
     --resource-group social-media-rg \
     --name social-backend \
     --image ghcr.io/your-username/your-repo-backend:latest \
     --ports 8080
   ```

### Option 4: DigitalOcean App Platform

1. Create a new app in DigitalOcean
2. Connect your GitHub repository
3. Configure build settings:
   - Backend: Dockerfile in `social-backend/`
   - Frontend: Dockerfile in `social-frontend/`
4. Set environment variables
5. Deploy

### Option 5: VPS Deployment

1. **Set up VPS**
   ```bash
   # Install Docker and Docker Compose
   curl -fsSL https://get.docker.com -o get-docker.sh
   sh get-docker.sh
   ```

2. **Clone and deploy**
   ```bash
   git clone <your-repo-url>
   cd social-media-platform
   cp env.example .env
   # Edit .env with production values
   docker-compose up -d
   ```

## 🔒 Production Considerations

### Security
- ✅ Use HTTPS in production
- ✅ Configure proper CORS origins
- ✅ Use environment variables for secrets
- ✅ Enable database SSL
- ✅ Set up proper firewall rules

### Performance
- ✅ Enable gzip compression
- ✅ Configure CDN for static assets
- ✅ Use database connection pooling
- ✅ Implement caching strategies

### Monitoring
- ✅ Set up health checks
- ✅ Configure logging
- ✅ Monitor resource usage
- ✅ Set up alerts

## 🛠️ Troubleshooting

### Common Issues

1. **Database Connection Failed**
   - Check database credentials
   - Ensure database is running
   - Verify network connectivity

2. **Frontend Build Failed**
   - Check Node.js version compatibility
   - Clear npm cache: `npm cache clean --force`
   - Delete node_modules and reinstall

3. **Backend Tests Failed**
   - Ensure MySQL service is running
   - Check test database configuration
   - Verify Java version compatibility

### Logs
```bash
# View all logs
docker-compose logs -f

# View specific service logs
docker-compose logs -f backend
docker-compose logs -f frontend
docker-compose logs -f mysql
```

## 📝 Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `DATABASE_URL` | MySQL connection URL | `jdbc:mysql://mysql:3306/SocialMedia` |
| `DATABASE_USERNAME` | Database username | `socialuser` |
| `DATABASE_PASSWORD` | Database password | `socialpass` |
| `MAIL_HOST` | SMTP host | `smtp.gmail.com` |
| `MAIL_PORT` | SMTP port | `587` |
| `MAIL_USERNAME` | Email username | - |
| `MAIL_PASSWORD` | Email password | - |
| `CORS_ALLOWED_ORIGINS` | Allowed CORS origins | `http://localhost,http://localhost:80` |

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test locally with Docker Compose
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

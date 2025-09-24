# Simple GitHub Actions CI/CD Guide

This guide shows how to use GitHub Actions for continuous integration and deployment without Docker or Kubernetes.

## 🚀 **What GitHub Actions Does**

### **Backend Pipeline**
1. ✅ **Sets up Java 21** environment
2. ✅ **Starts MySQL service** for testing
3. ✅ **Runs Maven tests** with database integration
4. ✅ **Builds Spring Boot WAR** file
5. ✅ **Uploads WAR as artifact** for download

### **Frontend Pipeline**
1. ✅ **Sets up Node.js 20** environment
2. ✅ **Installs npm dependencies**
3. ✅ **Runs ESLint** code quality checks
4. ✅ **Builds React application** for production
5. ✅ **Uploads build files as artifact** for download

### **Deploy Pipeline** (Main branch only)
1. ✅ **Downloads both artifacts**
2. ✅ **Prepares deployment package**
3. ✅ **Shows deployment instructions**

## 📦 **How to Get Your Built Files**

### **After GitHub Actions Runs:**

1. **Go to your GitHub repository**
2. **Click "Actions" tab**
3. **Click on the latest workflow run**
4. **Scroll down to "Artifacts" section**
5. **Download:**
   - `backend-jar` - Your Spring Boot WAR file
   - `frontend-build` - Your React build files

## 🖥️ **Manual Deployment Steps**

### **Backend Deployment (Spring Boot)**

1. **Upload WAR file to your server**
   ```bash
   scp social-backend-0.0.1-SNAPSHOT.war user@your-server:/opt/tomcat/webapps/
   ```

2. **Configure production database**
   - Update `application-prod.properties`
   - Set your MySQL connection details

3. **Start your application server**
   ```bash
   # Tomcat
   sudo systemctl start tomcat
   
   # Or if using Spring Boot directly
   java -jar social-backend-0.0.1-SNAPSHOT.war --spring.profiles.active=prod
   ```

### **Frontend Deployment (React)**

1. **Upload build files to web server**
   ```bash
   scp -r dist/* user@your-server:/var/www/html/
   ```

2. **Configure web server (nginx/apache)**
   ```nginx
   # nginx.conf
   server {
       listen 80;
       root /var/www/html;
       index index.html;
       
       location / {
           try_files $uri $uri/ /index.html;
       }
       
       location /api/ {
           proxy_pass http://localhost:8080/;
       }
   }
   ```

3. **Restart web server**
   ```bash
   sudo systemctl restart nginx
   ```

## 🔧 **Required Server Setup**

### **Backend Requirements**
- Java 21 JDK
- MySQL 8.0 database
- Tomcat or ability to run Spring Boot JAR

### **Frontend Requirements**
- Web server (nginx/apache)
- SSL certificate (Let's Encrypt recommended)

## 📋 **Environment Configuration**

### **Backend Environment Variables**
```bash
# Database
DATABASE_URL=jdbc:mysql://localhost:3306/SocialMedia
DATABASE_USERNAME=your_db_user
DATABASE_PASSWORD=your_db_password

# Email
MAIL_HOST=smtp.gmail.com
MAIL_PORT=587
MAIL_USERNAME=your_email@example.com
MAIL_PASSWORD=your_app_password
```

### **Frontend Configuration**
Update your API endpoints in `src/api/api.js` to point to your production backend.

## 🎯 **Benefits of This Approach**

- ✅ **No Docker complexity** - Simple file-based deployment
- ✅ **Traditional hosting** - Works with any VPS/shared hosting
- ✅ **Easy debugging** - Direct access to logs and files
- ✅ **Cost effective** - No container orchestration needed
- ✅ **Familiar workflow** - Standard web application deployment

## 🔄 **Automated Deployment (Optional)**

If you want to automate the deployment, you can add SSH deployment steps to the GitHub Actions workflow:

```yaml
- name: Deploy to server
  uses: appleboy/ssh-action@v1.0.0
  with:
    host: ${{ secrets.HOST }}
    username: ${{ secrets.USERNAME }}
    key: ${{ secrets.SSH_KEY }}
    script: |
      # Your deployment commands here
      sudo systemctl restart your-app
```

## 📞 **Support**

If you need help with deployment, check:
1. **GitHub Actions logs** for build errors
2. **Server logs** for runtime errors
3. **Database connection** issues
4. **Web server configuration** problems

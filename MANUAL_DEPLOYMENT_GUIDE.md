# 🚀 Manual Deployment Guide

This guide shows you how to manually deploy your Social Media Platform using the built files from GitHub Actions.

## 📦 **Step 1: Get Built Files from GitHub Actions**

### **After GitHub Actions Completes:**

1. **Go to your GitHub repository**
2. **Click "Actions" tab**
3. **Click on the latest workflow run**
4. **Scroll down to "Artifacts" section**
5. **Download these files:**
   - `backend-jar` - Your Spring Boot WAR file
   - `frontend-build` - Your React build files

## 🌐 **Step 2: Deploy Frontend (React)**

### **Option A: Netlify (Recommended - Free)**
1. Go to [netlify.com](https://netlify.com)
2. Sign up with GitHub
3. Click "Add new site" → "Deploy manually"
4. Drag and drop your `frontend-build` folder
5. Get your live URL: `https://random-name.netlify.app`

### **Option B: Vercel**
1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub
3. Click "New Project" → "Browse all templates"
4. Choose "Other" → Upload your `frontend-build` folder
5. Get your live URL: `https://your-project.vercel.app`

### **Option C: GitHub Pages**
1. Go to your GitHub repository → Settings
2. Scroll to "Pages" section
3. Source: "Deploy from a branch"
4. Branch: `gh-pages` (create this branch)
5. Upload your `frontend-build` files to `gh-pages` branch
6. Get your live URL: `https://yourusername.github.io/your-repo-name`

## 🔧 **Step 3: Deploy Backend (Spring Boot)**

### **Option A: Railway (Recommended - Free)**
1. Go to [railway.app](https://railway.app)
2. Sign up with GitHub
3. Click "New Project" → "Deploy from GitHub repo"
4. Select your repository
5. Add environment variables:
   ```
   SPRING_PROFILES_ACTIVE=prod
   DATABASE_URL=your_database_url
   ```
6. Get your live URL: `https://your-app.railway.app`

### **Option B: Render**
1. Go to [render.com](https://render.com)
2. Sign up with GitHub
3. Click "New" → "Web Service"
4. Connect your GitHub repository
5. Set build command: `mvn clean package`
6. Set start command: `java -jar target/social-backend-0.0.1-SNAPSHOT.war`
7. Get your live URL: `https://your-app.onrender.com`

### **Option C: Heroku**
1. Go to [heroku.com](https://heroku.com)
2. Sign up for free account
3. Create new app
4. Connect your GitHub repository
5. Enable automatic deploys
6. Get your live URL: `https://your-app.herokuapp.com`

## 🔗 **Step 4: Connect Frontend to Backend**

### **Update API Configuration:**
1. Open your deployed frontend
2. Update the API base URL in your frontend code
3. Change from `http://localhost:8080` to your backend URL
4. Redeploy your frontend

## 📱 **Step 5: Test Your Live Application**

1. **Visit your frontend URL**
2. **Test all features:**
   - User registration/login
   - Creating posts
   - Comments and likes
   - Real-time messaging

## 🎯 **Quick Deployment (5 minutes)**

### **Fastest Option:**
1. **Frontend**: Netlify (drag & drop)
2. **Backend**: Railway (connect GitHub repo)
3. **Total time**: 5 minutes
4. **Cost**: Free

## 🆓 **Free Hosting Limits**

| Service | Frontend | Backend | Bandwidth | Build Time |
|---------|----------|---------|-----------|------------|
| Netlify | ✅ | ❌ | 100GB/month | 300 min/month |
| Vercel | ✅ | ❌ | 100GB/month | 6000 min/month |
| Railway | ❌ | ✅ | Unlimited | $5 credit/month |
| Render | ❌ | ✅ | 750 hours/month | 750 hours/month |
| Heroku | ❌ | ✅ | 550-1000 hours/month | 550-1000 hours/month |

## 🛠️ **Troubleshooting**

### **Common Issues:**

1. **Frontend not loading**
   - Check if all files are uploaded correctly
   - Verify the build folder structure

2. **Backend not connecting**
   - Check environment variables
   - Verify database connection
   - Check server logs

3. **CORS errors**
   - Update CORS settings in backend
   - Add your frontend URL to allowed origins

## 🎉 **Success!**

After following these steps, you'll have:
- **Frontend URL**: `https://your-frontend.netlify.app`
- **Backend URL**: `https://your-backend.railway.app`
- **Live Social Media Platform** accessible worldwide!

## 📞 **Need Help?**

If you run into issues:
1. Check the hosting service logs
2. Verify your environment variables
3. Test your build locally first
4. Check the GitHub Actions artifacts are complete

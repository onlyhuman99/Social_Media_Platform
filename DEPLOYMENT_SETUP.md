# 🚀 Auto-Deployment Setup Guide

Your GitHub Actions workflow is now configured to automatically deploy your Social Media Platform to multiple free hosting services! Here's how to set it up:

## 🎯 **What This Does**

Your workflow will automatically:
- ✅ **Build and test** your backend and frontend
- ✅ **Deploy frontend** to Vercel AND Netlify
- ✅ **Deploy backend** to Railway AND Render
- ✅ **Show live URLs** after successful deployment

## 🔧 **Required Setup**

### **Step 1: Set up Frontend Hosting**

#### **Option A: Vercel (Recommended)**
1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub
3. Create a new project from your repository
4. Get your tokens:
   - Go to Settings → Tokens → Create Token
   - Copy the token
5. Get your Project ID and Org ID from the project settings

#### **Option B: Netlify**
1. Go to [netlify.com](https://netlify.com)
2. Sign up with GitHub
3. Create a new site from your repository
4. Get your tokens:
   - Go to User Settings → Applications → Personal Access Tokens
   - Create a new token
5. Get your Site ID from Site Settings → General

### **Step 2: Set up Backend Hosting**

#### **Option A: Railway (Recommended)**
1. Go to [railway.app](https://railway.app)
2. Sign up with GitHub
3. Create a new project
4. Add a new service (Java/Spring Boot)
5. Get your tokens:
   - Go to Account Settings → Tokens
   - Create a new token
6. Get your Service Name from the service settings

#### **Option B: Render**
1. Go to [render.com](https://render.com)
2. Sign up with GitHub
3. Create a new Web Service
4. Connect your repository
5. Get your tokens:
   - Go to Account Settings → API Keys
   - Create a new API key
6. Get your Service ID from the service settings

### **Step 3: Configure GitHub Secrets**

Go to your GitHub repository → Settings → Secrets and variables → Actions

Add these secrets:

```
# Vercel (Frontend)
VERCEL_TOKEN=your_vercel_token_here
VERCEL_ORG_ID=your_vercel_org_id_here
VERCEL_PROJECT_ID=your_vercel_project_id_here

# Netlify (Frontend Alternative)
NETLIFY_AUTH_TOKEN=your_netlify_token_here
NETLIFY_SITE_ID=your_netlify_site_id_here

# Railway (Backend)
RAILWAY_TOKEN=your_railway_token_here
RAILWAY_SERVICE_NAME=your_railway_service_name_here

# Render (Backend Alternative)
RENDER_API_KEY=your_render_api_key_here
RENDER_SERVICE_ID=your_render_service_id_here
```

## 🚀 **How to Deploy**

### **Automatic Deployment**
1. **Push to main branch** - Deployment starts automatically
2. **Check GitHub Actions** - Watch the deployment progress
3. **Get your URLs** - Live URLs will be shown in the workflow output

### **Manual Trigger**
1. Go to Actions tab in your GitHub repository
2. Select "Auto-Deploy Social Media Platform"
3. Click "Run workflow"
4. Select your branch and click "Run workflow"

## 📱 **What You'll Get**

After successful deployment, you'll have:

- **Frontend URLs:**
  - Vercel: `https://your-project.vercel.app`
  - Netlify: `https://your-site.netlify.app`

- **Backend URLs:**
  - Railway: `https://your-service.railway.app`
  - Render: `https://your-service.onrender.com`

## 🔄 **Workflow Features**

### **Multiple Deployment Options**
- **Frontend**: Deploys to both Vercel AND Netlify
- **Backend**: Deploys to both Railway AND Render
- **Redundancy**: If one service fails, the other will work

### **Smart Deployment**
- Only deploys on main/master branch pushes
- Runs tests before deployment
- Shows deployment status for each service
- Provides live URLs after successful deployment

### **Free Tier Limits**
- **Vercel**: 100GB bandwidth/month
- **Netlify**: 100GB bandwidth/month
- **Railway**: $5 credit/month
- **Render**: 750 hours/month

## 🛠️ **Troubleshooting**

### **Common Issues**

1. **Missing Secrets**
   - Make sure all required secrets are added to GitHub
   - Check secret names match exactly

2. **Service Configuration**
   - Ensure your hosting services are properly configured
   - Check that your repository is connected

3. **Build Failures**
   - Check the GitHub Actions logs for specific errors
   - Ensure your code builds locally first

### **Getting Help**

1. **Check GitHub Actions logs** for detailed error messages
2. **Verify your hosting service settings** match the requirements
3. **Test locally** before pushing to ensure everything works

## 🎉 **Success!**

Once configured, every push to your main branch will automatically:
- Build and test your application
- Deploy to multiple hosting services
- Provide you with live URLs
- Show deployment status

Your Social Media Platform will be live and accessible to users worldwide! 🌍

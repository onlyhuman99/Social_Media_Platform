# 🚀 Simple Deployment Setup

Your GitHub Actions workflow now deploys your Social Media Platform to **Vercel** and gives you a live URL!

## 🎯 **What This Does**

- ✅ **Builds and tests** your backend and frontend
- ✅ **Deploys frontend** to Vercel (free hosting)
- ✅ **Shows live URL** after successful deployment
- ✅ **Simple setup** - just one hosting service

## 🔧 **Quick Setup (5 minutes)**

### **Step 1: Create Vercel Account**
1. Go to [vercel.com](https://vercel.com)
2. Click "Sign up" → "Continue with GitHub"
3. Authorize Vercel to access your repositories

### **Step 2: Create Project**
1. In Vercel dashboard, click "New Project"
2. Import your GitHub repository
3. Set these settings:
   - **Framework Preset**: Vite
   - **Root Directory**: `social-frontend`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. Click "Deploy"

### **Step 3: Get Your Tokens**
1. Go to [vercel.com/account/tokens](https://vercel.com/account/tokens)
2. Click "Create Token"
3. Name it "GitHub Actions"
4. Copy the token

5. Go to your project settings in Vercel
6. Copy your **Project ID** and **Team ID** (Org ID)

### **Step 4: Add GitHub Secrets**
Go to your GitHub repository → Settings → Secrets and variables → Actions

Add these 3 secrets:
```
VERCEL_TOKEN=your_vercel_token_here
VERCEL_ORG_ID=your_team_id_here
VERCEL_PROJECT_ID=your_project_id_here
```

## 🚀 **Deploy!**

### **Automatic Deployment**
1. **Push to main branch** - Deployment starts automatically
2. **Check GitHub Actions** - Watch the deployment progress
3. **Get your URL** - Live URL will be shown in the workflow output

### **Manual Trigger**
1. Go to Actions tab in your GitHub repository
2. Select "Deploy to Vercel"
3. Click "Run workflow"
4. Select your branch and click "Run workflow"

## 📱 **What You'll Get**

After successful deployment, you'll see:
```
🎉 Deployment successful!
🌐 Your app is live at: https://your-project.vercel.app
📱 Social Media Platform is now accessible worldwide!
```

## 🔄 **How It Works**

1. **Push code** → GitHub Actions triggers
2. **Build backend** → Tests and creates JAR file
3. **Build frontend** → Lints and creates production build
4. **Deploy to Vercel** → Uploads frontend to Vercel
5. **Show URL** → Displays your live application URL

## 🆓 **Free Tier Limits**

- **Vercel**: 100GB bandwidth/month
- **Build time**: 6000 minutes/month
- **Custom domains**: Unlimited
- **SSL**: Automatic HTTPS

## 🛠️ **Troubleshooting**

### **Common Issues**

1. **Missing Secrets**
   - Make sure all 3 Vercel secrets are added to GitHub
   - Check secret names match exactly

2. **Build Failures**
   - Check the GitHub Actions logs for specific errors
   - Ensure your code builds locally first

3. **Vercel Configuration**
   - Make sure your Vercel project is properly configured
   - Check that the root directory is set to `social-frontend`

### **Getting Help**

1. **Check GitHub Actions logs** for detailed error messages
2. **Check Vercel dashboard** for deployment status
3. **Test locally** before pushing to ensure everything works

## 🎉 **Success!**

Once configured, every push to your main branch will:
- Build and test your application
- Deploy to Vercel
- Give you a live URL like: `https://your-project.vercel.app`

Your Social Media Platform will be live and accessible to users worldwide! 🌍

## 📞 **Need Help?**

If you run into issues:
1. Check the GitHub Actions logs
2. Verify your Vercel project settings
3. Make sure all secrets are correctly added
4. Test your build locally first
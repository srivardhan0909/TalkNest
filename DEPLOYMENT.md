# 🚀 TalkNest Deployment Guide

This guide will help you deploy TalkNest (full-stack chat application) for **FREE** using:
- **Database**: MongoDB Atlas (free tier)
- **Backend**: Render.com (free tier)
- **Frontend**: Vercel (free tier)

---

## 📋 Prerequisites

1. A GitHub account (to push your code)
2. Your code pushed to a GitHub repository

---

## Step 1: Set Up MongoDB Atlas (Free Database)

### 1.1 Create Account & Cluster
1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Sign up for a free account
3. Click **"Build a Database"**
4. Choose **M0 FREE** tier
5. Select a cloud provider (AWS recommended) and region closest to you
6. Click **"Create Cluster"** (takes 1-3 minutes)

### 1.2 Configure Database Access
1. In the left sidebar, click **"Database Access"**
2. Click **"Add New Database User"**
3. Create a username and password (save these!)
4. Set privileges to **"Read and write to any database"**
5. Click **"Add User"**

### 1.3 Configure Network Access
1. Click **"Network Access"** in the left sidebar
2. Click **"Add IP Address"**
3. Click **"Allow Access from Anywhere"** (0.0.0.0/0)
4. Click **"Confirm"**

### 1.4 Get Connection String
1. Go to **"Database"** → Click **"Connect"**
2. Choose **"Connect your application"**
3. Copy the connection string, it looks like:
   ```
   mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
   ```
4. Replace `<username>` and `<password>` with your credentials
5. Add your database name before the `?`: 
   ```
   mongodb+srv://user:pass@cluster0.xxxxx.mongodb.net/talknest?retryWrites=true&w=majority
   ```

---

## Step 2: Push Code to GitHub

If your code isn't already on GitHub:

```bash
# Initialize git (if not done)
cd /Users/srivardhanjakkani/Desktop/projects/TalkNest
git init

# Add all files
git add .

# Commit
git commit -m "Ready for deployment"

# Create a new repository on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/TalkNest.git
git branch -M main
git push -u origin main
```

---

## Step 3: Deploy Backend on Render

### 3.1 Create Render Account
1. Go to [Render.com](https://render.com)
2. Sign up with GitHub

### 3.2 Create Web Service
1. Click **"New +"** → **"Web Service"**
2. Connect your GitHub repository
3. Select the **TalkNest** repository

### 3.3 Configure Build Settings
| Setting | Value |
|---------|-------|
| **Name** | `talknest-backend` (or your choice) |
| **Region** | Choose closest to you |
| **Branch** | `main` |
| **Root Directory** | Leave empty |
| **Runtime** | `Node` |
| **Build Command** | `npm install` |
| **Start Command** | `npm start` |
| **Instance Type** | **Free** |

### 3.4 Add Environment Variables
Click **"Advanced"** → **"Add Environment Variable"**:

| Key | Value |
|-----|-------|
| `MONGO_URL` | Your MongoDB Atlas connection string |
| `JWT_SECRET` | A random secret string (e.g., `mySuper$ecret123!Key`) |
| `FRONTEND_URL` | Leave empty for now (we'll update after deploying frontend) |
| `NODE_ENV` | `production` |

### 3.5 Deploy
1. Click **"Create Web Service"**
2. Wait for deployment (5-10 minutes on free tier)
3. Copy your backend URL: `https://talknest-backend.onrender.com`

> ⚠️ **Note**: Free tier services spin down after 15 mins of inactivity. First request may take 30-60 seconds.

---

## Step 4: Deploy Frontend on Vercel

### 4.1 Create Vercel Account
1. Go to [Vercel.com](https://vercel.com)
2. Sign up with GitHub

### 4.2 Import Project
1. Click **"Add New..."** → **"Project"**
2. Import your **TalkNest** repository
3. Click **"Import"**

### 4.3 Configure Build Settings
| Setting | Value |
|---------|-------|
| **Framework Preset** | `Vite` |
| **Root Directory** | Click "Edit" → Select `front-end` |
| **Build Command** | `npm run build` |
| **Output Directory** | `dist` |

### 4.4 Add Environment Variables
Click **"Environment Variables"** and add:

| Key | Value |
|-----|-------|
| `VITE_BACKEND_URL` | `https://talknest-backend.onrender.com` (your Render URL) |

### 4.5 Deploy
1. Click **"Deploy"**
2. Wait for deployment (1-2 minutes)
3. Copy your frontend URL: `https://talknest.vercel.app`

---

## Step 5: Update Backend CORS Settings

### 5.1 Update Render Environment Variable
1. Go to your Render dashboard
2. Select your backend service
3. Go to **"Environment"** tab
4. Update `FRONTEND_URL` to your Vercel URL:
   ```
   https://talknest.vercel.app
   ```
5. Click **"Save Changes"**
6. The service will automatically redeploy

---

## ✅ Deployment Complete!

Your app should now be live at:
- **Frontend**: `https://your-app.vercel.app`
- **Backend**: `https://your-backend.onrender.com`

---

## 🔧 Troubleshooting

### Backend not responding?
- Free Render services sleep after 15 mins of inactivity
- First request takes 30-60 seconds to "wake up"
- Check Render logs for errors

### CORS errors?
- Verify `FRONTEND_URL` is set correctly on Render
- Make sure URL doesn't have a trailing slash
- Check browser console for exact error

### Socket.io not connecting?
- Verify `VITE_BACKEND_URL` is set in Vercel
- Check that it uses `https://` not `http://`

### MongoDB connection failed?
- Verify your MongoDB connection string
- Check that Network Access allows `0.0.0.0/0`
- Verify database user credentials

### Build failing on Vercel?
- Make sure Root Directory is set to `front-end`
- Check build logs for specific errors

---

## 📝 Environment Variables Summary

### Backend (Render)
```env
MONGO_URL=mongodb+srv://user:pass@cluster.mongodb.net/talknest
JWT_SECRET=your_secret_key
FRONTEND_URL=https://your-app.vercel.app
NODE_ENV=production
```

### Frontend (Vercel)
```env
VITE_BACKEND_URL=https://your-backend.onrender.com
```

---

## 🔄 Updating Your App

### Automatic Deployments
Both Render and Vercel auto-deploy when you push to GitHub:
```bash
git add .
git commit -m "Update feature"
git push origin main
```

### Manual Redeploy
- **Render**: Dashboard → Service → "Manual Deploy"
- **Vercel**: Dashboard → Project → "Redeploy"

---

## 💡 Tips

1. **Keep Backend Awake**: Use [UptimeRobot](https://uptimerobot.com) to ping your backend every 14 mins
2. **Custom Domain**: Both Render and Vercel support free custom domains
3. **Monitor**: Check Render and Vercel dashboards for logs and analytics

---

Happy chatting! 🎉

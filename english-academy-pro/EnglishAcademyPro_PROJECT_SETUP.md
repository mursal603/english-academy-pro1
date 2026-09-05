# English Academy Pro - Complete APK Build Guide

## 🚀 Quick Start (Recommended)

### Option 1: Build APK Online (NO PC Setup Needed) ⭐

**Step 1: Install Expo on your phone**
- Download "Expo Go" app from Play Store or App Store
- Free, instant preview

**Step 2: Get Free Build**
1. Go to: https://expo.dev
2. Sign up (free account)
3. Create new project
4. Copy files from this guide
5. Click "Build" → "Create build" → "Android APK"
6. Wait 10-15 minutes
7. Download APK file
8. Install on your Android phone

---

## 📁 Project Structure

```
english-academy-pro/
├── app.json
├── App.tsx
├── package.json
├── babel.config.js
├── src/
│   ├── screens/
│   │   ├── ChatScreen.tsx
│   │   ├── AnalyticsScreen.tsx
│   │   ├── AdaptiveScreen.tsx
│   │   ├── RewardsScreen.tsx
│   │   └── LeaderboardScreen.tsx
│   ├── components/
│   │   ├── BottomNav.tsx
│   │   ├── Card.tsx
│   │   ├── ProgressBar.tsx
│   │   └── StatCard.tsx
│   ├── styles/
│   │   └── theme.ts
│   └── types/
│       └── index.ts
└── assets/
    └── fonts/
```

---

## 1️⃣ Installation Method A: Expo (Easiest)

### For Windows/Mac/Linux:

```bash
# Install Node.js first from nodejs.org

# Install Expo CLI globally
npm install -g expo-cli

# Create project
expo init EnglishAcademyPro
cd EnglishAcademyPro

# Copy files into project
# (Copy all TypeScript files from this guide)

# Install dependencies
npm install
npm install react-native-chart.js

# Run in Expo Go on your phone
expo start

# Scan QR code with Expo Go app
# OR press 'a' for Android emulator
```

**Build APK on Cloud (Recommended):**
```bash
# Make sure you're logged in
expo login

# Build APK (takes 10-15 min)
eas build --platform android

# Download APK from dashboard
# https://expo.dev/builds
```

---

## 2️⃣ Installation Method B: Android Studio (Full Control)

### Requirements:
- Android Studio (free)
- Java JDK 11+
- Android SDK

### Steps:
```bash
# Create React Native project
npx react-native init EnglishAcademyPro

# Copy TypeScript files

# Install dependencies
cd EnglishAcademyPro
npm install
npm install typescript @types/react-native

# Build APK for release
cd android
./gradlew assembleRelease

# APK located at:
# app/build/outputs/apk/release/app-release.apk
```

---

## 3️⃣ Installation Method C: EAS Build (Cloud - Recommended)

**NO SETUP NEEDED - EASIEST**

### Steps:

1. **Sign up free:**
   ```
   https://expo.dev (free tier available)
   ```

2. **Create project online:**
   - Dashboard → New Project
   - Choose "React Native"

3. **Copy files:**
   - Use files from this guide
   - Upload to Expo

4. **Build:**
   - Click "Build" button
   - Select "Android"
   - Select "APK"
   - Wait 10-15 minutes

5. **Download:**
   - Download .apk file
   - Send to phone or install directly

---

## 📦 Minimum Files Needed

### app.json (Expo Configuration)
```json
{
  "expo": {
    "name": "English Academy Pro",
    "slug": "english-academy-pro",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "ios": {
      "supportsTabletMode": true
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#ffffff"
      },
      "package": "com.englishacademypro.app"
    },
    "web": {
      "favicon": "./assets/favicon.png"
    }
  },
  "plugins": [
    [
      "expo-build-properties",
      {
        "android": {
          "usesCleartextTraffic": true
        }
      }
    ]
  ]
}
```

### package.json
```json
{
  "name": "english-academy-pro",
  "version": "1.0.0",
  "main": "node_modules/expo/AppEntry.js",
  "scripts": {
    "start": "expo start",
    "android": "expo start --android",
    "ios": "expo start --ios",
    "web": "expo start --web",
    "build:android": "eas build --platform android"
  },
  "dependencies": {
    "expo": "^49.0.0",
    "react": "18.2.0",
    "react-native": "0.72.0",
    "react-navigation": "^6.1.6",
    "react-navigation-bottom-tabs": "^6.5.7",
    "@react-navigation/native": "^6.1.6",
    "react-native-gesture-handler": "^2.14.0",
    "react-native-reanimated": "^3.5.0",
    "react-native-screens": "^3.26.0"
  },
  "devDependencies": {
    "@babel/core": "^7.23.0",
    "@types/react": "^18.2.0",
    "@types/react-native": "^0.72.0",
    "typescript": "^5.0.0"
  }
}
```

---

## 🔧 Configuration Files

### babel.config.js
```javascript
module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
  };
};
```

### tsconfig.json
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["ES2020"],
    "jsx": "react-native",
    "module": "commonjs",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "declaration": true,
    "declarationMap": true,
    "sourceMap": true
  },
  "exclude": ["node_modules", "build", "dist"],
  "include": ["**/*.ts", "**/*.tsx"]
}
```

---

## 🚀 Build & Deploy Steps

### Step 1: Prepare Project
```bash
npm install
npm run build:android
```

### Step 2: Create Release APK
```bash
# Option A: Using Expo
eas build --platform android --release

# Option B: Using Android Studio
cd android
./gradlew assembleRelease
```

### Step 3: Get APK File
```
Location: app/build/outputs/apk/release/app-release.apk
Size: ~45-60 MB
```

### Step 4: Test APK
- Install on test device
- Test all features
- Verify performance

### Step 5: Sign APK (Optional)
```bash
# Create keystore (one-time)
keytool -genkey -v -keystore ~/release-key.keystore -keyalg RSA -keysize 2048 -validity 10000 -alias upload-key

# Sign APK
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore ~/release-key.keystore app-release-unsigned.apk upload-key

# Optimize
zipalign -v 4 app-release-unsigned.apk app-release.apk
```

### Step 6: Distribute
**Options:**
- 📱 Direct install on test devices
- 🔗 Share link with testers
- 🏪 Upload to Google Play Store
- 📲 Send via email/WhatsApp

---

## 🧪 Testing Before Release

### Test Checklist:
- [ ] App launches without crashing
- [ ] All 5 tabs work (Chat, Stats, AI, Rewards, Leaderboard)
- [ ] Chat input/send works
- [ ] Animations smooth
- [ ] Buttons responsive to touch
- [ ] Text readable on all sizes
- [ ] Images load properly
- [ ] Navigation responsive
- [ ] Battery usage normal
- [ ] Data usage minimal

### Debug on Android:
```bash
# Connect phone via USB
adb devices

# View logs
adb logcat

# Install APK
adb install app-release.apk
```

---

## 📤 Publish to Google Play Store

### Requirements:
1. Google Developer Account ($25 one-time)
2. Signed APK
3. App icon (512x512)
4. Screenshots (5+ images)
5. Description & privacy policy

### Steps:
1. Go to: https://play.google.com/console
2. Create app
3. Upload signed APK
4. Add screenshots
5. Add description
6. Submit for review (1-3 hours)
7. Live on Play Store! 🎉

---

## 🔐 Security Checklist

- [ ] Sign APK with private key
- [ ] Keep keystore safe (backup!)
- [ ] Use ProGuard/R8 for code obfuscation
- [ ] Enable certificate pinning
- [ ] Validate all API calls
- [ ] Encrypt sensitive data
- [ ] Test on multiple Android versions

---

## 📊 Performance Targets

- **APK Size:** < 60 MB
- **Launch Time:** < 2 seconds
- **Memory Usage:** < 150 MB
- **Battery:** < 5% per hour usage
- **FPS:** 60 FPS smooth
- **Network:** Works on 3G

---

## 🆘 Troubleshooting

### APK won't install
```bash
adb uninstall com.englishacademypro.app
adb install app-release.apk
```

### App crashes on startup
- Check: `adb logcat | grep CRASH`
- Review: Android version compatibility
- Ensure: All dependencies installed

### Build fails
```bash
# Clean build
rm -rf node_modules
npm install
npm run build:android
```

### Large APK size
- Enable code splitting
- Compress images
- Remove unused dependencies
- Use ProGuard

---

## 📱 Supported Devices

- **Android 8.0+** (API 26+)
- **ARM64 architecture** (modern devices)
- **Screen sizes:** 4.5" - 7"
- **RAM:** Minimum 2GB
- **Storage:** Minimum 100MB

---

## 🎯 Next Steps After Build

1. **Beta Testing**
   - Internal testers (5-10 people)
   - Test for 1-2 weeks
   - Gather feedback

2. **Bug Fixes**
   - Fix critical issues
   - Optimize performance
   - Update features

3. **Production Release**
   - Sign final APK
   - Create app store listing
   - Upload to Play Store

4. **Marketing**
   - Share app link
   - Get reviews
   - App Store Optimization (ASO)

5. **Maintenance**
   - Monitor crashes
   - Update regularly
   - Add new features

---

## 📞 Support Resources

- **Expo Docs:** https://docs.expo.dev
- **React Native:** https://reactnative.dev
- **Android Studio:** https://developer.android.com
- **EAS Build:** https://docs.expo.dev/build/introduction/

---

## 💰 Cost Breakdown

| Service | Cost | Details |
|---------|------|---------|
| Expo Free | $0 | Build APK free (limited) |
| Expo Premium | $10/mo | Unlimited builds |
| Google Dev | $25 | One-time for Play Store |
| Cloud Server | $5-15/mo | Optional backend |
| Total | $0-30+ | Depending on needs |

---

**Ready to build? Let's go! 🚀**

Choose your method above and follow the steps. All files are provided in the next sections.

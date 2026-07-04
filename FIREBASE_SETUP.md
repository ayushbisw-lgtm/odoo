# Firebase Setup Guide

## Step 1: Create a Firebase Project
1. Go to [https://console.firebase.google.com/](https://console.firebase.google.com/)
2. Click "Add project"
3. Follow the setup wizard to create your project

## Step 2: Get Firebase Client SDK Credentials
1. In your Firebase project, go to **Project Settings** (gear icon in top-left)
2. Scroll down to "Your apps" section
3. Click the **Web** icon (</>) to add a new web app
4. Enter an app name (e.g., "hackathon-backend") and click "Register app"
5. You'll see a code snippet with your `firebaseConfig` - copy these values!
6. Paste them into `.env.local` (we already did this for you!)

## Step 3: Enable Firebase Services
1. In Firebase Console, go to **Authentication** → Sign-in method → Enable "Email/Password"
2. Go to **Firestore Database** → Create database → Start in test mode (we'll update rules later)
3. Go to **Storage** → Get started → Start in test mode

## Step 4: Get Firebase Admin Service Account Key
1. Go back to **Project Settings** → **Service accounts** tab
2. Click "Generate new private key"
3. Save the JSON file to your computer
4. Open the JSON file and copy **the entire content**
5. Paste it as the value for `FIREBASE_SERVICE_ACCOUNT_KEY` in `.env.local` like this:
   ```env
   FIREBASE_SERVICE_ACCOUNT_KEY={"type":"service_account","project_id":"...","private_key_id":"...","private_key":"-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n","client_email":"...","client_id":"...","auth_uri":"...","token_uri":"...","auth_provider_x509_cert_url":"...","client_x509_cert_url":"...","universe_domain":"googleapis.com"}
   ```

## Step 5: Deploy Firestore & Storage Rules
1. In Firebase Console, go to **Firestore Database** → Rules
2. Replace the default rules with the content from `firestore.rules`
3. Click "Publish"
4. Go to **Storage** → Rules
5. Replace with content from `storage.rules`
6. Click "Publish"

## Step 6: Add Firestore Indexes (Optional but Recommended)
1. In Firebase Console, go to **Firestore Database** → Indexes
2. Click "Add index" and create the indexes from `firestore.indexes.json`

## Step 7: Resend API Key (Optional)
1. Go to [https://resend.com/](https://resend.com/)
2. Sign up for an account
3. Go to API Keys → Create API Key
4. Copy and paste it into `RESEND_API_KEY` in `.env.local`

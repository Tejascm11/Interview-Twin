# Interview Twin

Interview Twin is a web-based mock interview platform that helps candidates practice interviews, analyze resumes, answer interview questions, receive interview guidance, and track their preparation progress.

## Setup

1. Download or clone this repository.

2. Open the project folder in **VS Code**.

3. Install the **Live Server** extension.

4. Right-click `index.html` and select **Open with Live Server**.

5. The website should open at a URL similar to:

```text
http://127.0.0.1:5500/
## Firebase Setup
```
### 1. Create Firebase Project
Go to https://console.firebase.google.com/ → **Create a project** → Enter `Interview Twin` → Create.

### 2. Add Web App
Firebase Project → **Add app** → **Web** → Enter `Interview Twin Web` → **Register app** → Copy the Firebase configuration.

### 3. Add Configuration
Open `firebase-init.js` and replace the `PASTE_...` values with your Firebase configuration.

### 4. Enable Authentication
Firebase → **Authentication** → **Sign-in method** → Enable **Email/Password** → Save.

### 5. Create Firestore
Firebase → **Build** → **Firestore Database** → **Create database**.

### 6. Add Firestore Rules
Open `firestore.rules` → Copy the rules → Firebase → **Firestore Database → Rules** → Paste → **Publish**.

### 7. Run
Open `index.html` using **Live Server**. Do not open it directly with `file://`.

### 8. GitHub Pages
GitHub → **Repository → Settings → Pages** → Select `main` branch and `/ (root)` → Save.

Then add your GitHub Pages domain under:

**Firebase → Authentication → Settings → Authorized domains**

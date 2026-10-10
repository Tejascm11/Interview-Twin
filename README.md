# Interview Twin

Interview Twin is a web-based mock interview platform for interview practice, resume analysis, interview guidance, and progress tracking.

## Setup

1. Clone or download the repository.
2. Open the project in **VS Code**.
3. Install **Live Server**.
4. Right-click `index.html` → **Open with Live Server**.
5. Open the website at `http://127.0.0.1:5500/`.

## Firebase Setup

1. **Create Project**  
   Firebase Console → Create Project → `Interview Twin`.

2. **Add Web App**  
   Project → Add App → Web → `Interview Twin Web` → Register → Copy config.

3. **Add Config**  
   Open `firebase-init.js` → replace `PASTE_...` values with your Firebase config.

4. **Enable Login**  
   Authentication → Sign-in method → Enable **Email/Password**.

5. **Create Database**  
   Build → Firestore Database → **Create Database**.

6. **Add Rules**  
   Copy `firestore.rules` → Firestore → Rules → Paste → **Publish**.

7. **Run**  
   Use **Live Server**. Do not open with `file://`.

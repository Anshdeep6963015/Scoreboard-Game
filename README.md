# 🎮 Scoreboard Game - FA1 Backend Project

This is the official backend for the **Scoreboard Game** project, developed as part of the FA1 (Formative Assessment 1) submission in 5th Sem. The backend is built using **Node.js** and **Express.js**, and it provides a robust API for player registration, login, score submission, and leaderboard management.

---

## 🚀 Features

### ✅ User Registration
- Users can register with their **name**, **email ID**, and **password**.
- Basic email format validation is implemented.
- Duplicate registrations are prevented.

### 🔐 User Login
- Authenticates users based on their **email ID** and **password**.
- Returns success/failure responses appropriately.

### 🧮 Score Submission
- Registered users can submit a score based on:
  - `profit`, `loss`, and `time` values.
- Score is auto-calculated using the formula:
score = (profit * 100) / (loss * time)
- - Each user is allowed **only 2 score submissions**.

### 🏆 Leaderboard
- `GET /leaderboard/top`: Shows the top 3 players with highest scores, along with medal emojis:
- 🥇 Gold
- 🥈 Silver
- 🥉 Bronze
- `GET /leaderboard/all`: Lists all registered users with their scores.

## 🛠 Technologies Used

- **Node.js**
- **Express.js**
- **Postman** (for testing APIs)
- **JavaScript (ES6)**
- **In-memory storage using arrays**

---

## 📦 API Endpoints

### 📍 Registration
- `POST /register`
- **Body Parameters:** `{ name, emailId, password }`

### 📍 Login
- `POST /login`
- **Body Parameters:** `{ emailId, password }`

### 📍 Submit Score
- `POST /score`
- **Body Parameters:** `{ emailId, profit, loss, time }`
- **Note:** Only 2 submissions allowed per user

### 📍 Leaderboard
- `GET /leaderboard/top` — Top 3 users with medals
- `GET /leaderboard/all` — All users with scores

---
## 🧪 How to Run the Project Locally

1. **Clone the Repository**
   ```bash
   git clone https://github.com/Anshdeep6963015/Scoreboard-Game
   cd Scoreboard-Game
Install Dependencies

npm install
Start the Server

node index.js
The server will start at: http://localhost:3000

Test API in Postman

Make POST and GET requests to the above endpoints

Observe logs in terminal and responses in Postman

🔒 Notes
The backend uses in-memory storage (global arrays), meaning data is not persistent after a server restart.



























# 🍕 FoodHub — Food Ordering Platform

![Frontend](https://img.shields.io/badge/Frontend-Next.js-blue)
![Backend](https://img.shields.io/badge/Backend-Node.js-green)
![Database](https://img.shields.io/badge/Database-MongoDB-lightgreen)
![License](https://img.shields.io/badge/License-MIT-yellow)

FoodHub is a modern food ordering platform with a **Next.js frontend** and **Node.js + Express backend**.
It allows users to browse, search, and order food items with a smooth, responsive interface and secure backend API.

---

## 🌐 Live URLs

* 🚀 **Frontend (Next.js)**: [https://foodhub-one-neon.vercel.app/](https://foodhub-one-neon.vercel.app/)
* 🛠️ **Backend (Node.js + Express)**: [https://foodhub-server.vercel.app/](https://foodhub-server.vercel.app/)

---

## 💻 GitHub Repository

* Frontend : [https://github.com/Shoybit/FoodHub](https://github.com/Shoybit/FoodHub)
* Backend : https://github.com/Shoybit/FoodHub-Backend
---

## 🧰 Tech Stack

| Layer      | Technology                   |
| ---------- | ---------------------------- |
| Frontend   | Next.js, React               |
| Backend    | Node.js, Express             |
| Database   | MongoDB Atlas                |
| Deployment | Vercel                       |
| Tools      | dotenv, cors, mongodb driver |

---

## 📁 Project Structure

```
FoodHub/
├── frontend/         # Next.js frontend
├── backend/          # Node.js + Express backend
│   ├── index.js
│   ├── package.json
│   └── .env
└── README.md
```

---

## ⚙️ Backend Setup

```bash
# Clone the backend repository
git clone https://github.com/Shoybit/FoodHub-Backend.git
cd FoodHub-Backend

# Install dependencies
npm install

# Add environment variables
# Create a .env file
MONGODB_URI=your_mongodb_connection_string
PORT=5000

# Run locally
npm start
```

---

## 📚 Backend API Endpoints

| Method | Endpoint        | Description                       |
| ------ | --------------- | --------------------------------- |
| GET    | `/products`     | Get all products                  |
| GET    | `/products/:id` | Get product by ID                 |
| POST   | `/products`     | Create a new product (Admin only) |
| PUT    | `/products/:id` | Update product (Admin only)       |
| DELETE | `/products/:id` | Delete product (Admin only)       |

---

## ⚙️ Frontend Setup

```bash
# Clone the frontend repository
git clone https://github.com/Shoybit/FoodHub.git
cd FoodHub

# Install dependencies
npm install

# Run locally
npm run dev
```

Frontend will run on: `http://localhost:3000`

---

## 🚀 Deployment (Vercel)

1. Push your code to GitHub
2. Go to **Vercel → New Project**
3. Select your repository
4. Add environment variables for the backend (if needed)
5. Deploy instantly

> Vercel automatically converts Express backend routes into serverless functions.

---

## 📄 License

MIT License

---

✨ **FoodHub — Modern, Fast, Secure, and Serverless Food Ordering Platform**

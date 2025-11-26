# 🍕 FoodHub — Food Ordering Platform

FoodHub is a modern food ordering platform with a **Next.js frontend** and **Node.js + Express backend**.
It allows users to browse, search, and order food items with a smooth, responsive interface and secure backend API.

---

## 🌐 Live URLs

* **Frontend (Next.js)**: [https://foodhub-one-neon.vercel.app/](https://foodhub-one-neon.vercel.app/)
* **Backend (Node.js + Express)**: [https://foodhub-server.vercel.app/](https://foodhub-server.vercel.app/)

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

### 1️⃣ Clone the backend repository

```bash
git clone https://github.com/Shoybit/FoodHub-Backend.git
cd FoodHub-Backend
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Add environment variables

Create a `.env` file:

```env
MONGODB_URI=your_mongodb_connection_string
PORT=5000
```

### 4️⃣ Run locally

```bash
npm start
```

---

## 📚 Backend API Endpoints

### 🍽️ Product Routes

| Method | Endpoint        | Description                       |
| ------ | --------------- | --------------------------------- |
| GET    | `/products`     | Get all products                  |
| GET    | `/products/:id` | Get product by ID                 |
| POST   | `/products`     | Create a new product (Admin only) |
| PUT    | `/products/:id` | Update product (Admin only)       |
| DELETE | `/products/:id` | Delete product (Admin only)       |

---

## ⚙️ Frontend Setup

### 1️⃣ Clone the frontend repository

```bash
git clone https://github.com/Shoybit/FoodHub.git
cd FoodHub
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Run locally

```bash
npm run dev
```

Frontend will run on:

```
http://localhost:3000
```

---

## 🚀 Deployment (Vercel)

1. Push your code to GitHub
2. Go to **Vercel → New Project**
3. Select your repository
4. Add environment variables for the backend (if needed)
5. Deploy instantly

Vercel automatically converts Express backend routes into serverless functions.

---

## 📄 License

MIT License

---

✨ **FoodHub — Modern, Fast, Secure, and Serverless Food Ordering Platform**

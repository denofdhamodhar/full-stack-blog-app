<div align="center">

<br />

### A full-stack blog platform built with React + Appwrite

<br />

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Redux](https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS_4.2-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Appwrite](https://img.shields.io/badge/Appwrite-F02E65?style=for-the-badge&logo=appwrite&logoColor=white)

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-Visit_App-yellow?style=for-the-badge)](https://gilded-sopapillas-3e682b.netlify.app/)

</div>


## 📖 About

**Blog App** is a full-stack blog application built from scratch. It includes user authentication, database management, and dynamic routing — all connected and working together seamlessly.


## ✨ Features

| Feature | Description |
|---|---|
| 🔐 **Authentication** | Sign up, log in, and log out using Appwrite Auth |
| 📝 **Create & Edit Posts** | Write posts with a rich-text editor and upload cover images |
| 🗃️ **Database** | Store and manage posts using Appwrite Database |
| 🖼️ **Image Storage** | Upload and display post images via Appwrite Storage |
| 🔒 **Protected Routes** | Pages that are only accessible after logging in |
| 🔁 **Dynamic Routing** | Each blog post has its own unique URL |
| 🧩 **Reusable Components** | Clean, modular components used across the app |
| 🎛️ **Controlled Inputs** | Third-party components managed using React Hook Form controllers |

---

## 🛠️ Tech Stack

```
Frontend          →   React JS
State Management  →   Redux Toolkit
Styling           →   Tailwind CSS v4.2
Backend           →   Appwrite (Auth · Database · Storage)
```

---

## 🏗️ Project Structure

```
src/
├── appwrite/           # Appwrite services
│   ├── auth.js
│   └── config.js
│
├── components/         # Reusable UI components
│   ├── Header/
│   ├── Footer/
│   ├── PostCard.jsx
│   ├── RTE.jsx         # Rich Text Editor
│   └── ...
│
├── pages/              # Page-level components
│   ├── Home.jsx
│   ├── AddPost.jsx
│   ├── EditPost.jsx
│   └── Post.jsx        # Dynamic post page
│
├── store/              # Redux store
│   └── authSlice.js
│
└── App.jsx             # App entry with routing
```

---

## 🔐 Appwrite Services

### 1. Authentication
- Email and password sign-up and login
- Sessions are maintained across page reloads
- Auth state is synced to Redux on app load

### 2. Database
- Posts store fields like `title`, `content`, `slug`, `featuredImage`, `status`, `userId` and `authour`
- Supports full CRUD — create, read, update, and delete
- Posts can be filtered by status and authour

### 3. Storage
- Upload and retrieve cover images for each post
- Preview URLs are generated for display
- Images are updated or removed when a post is edited or deleted


## 🔒 Authenticated Layouts

- **Public routes** — Home, Login, and Signup
- **Protected routes** — Add Post, Edit Post, and All Posts
- Users who are not logged in are automatically redirected to `/login`

---

## 🎛️ Controller Pattern

Rich Text Editors `( TinyMCE )` don't work directly with React's controlled inputs. To fix this, React Hook Form's `<Controller />` is used to bridge the gap.

## 🚀 Getting Started

### Prerequisites
- Node.js ≥ 18
- An [Appwrite](https://appwrite.io) project with Auth, Database, and Storage set up

### Installation
Step 1: Clone the repository
```
git clone https://github.com/denofdhamodhar/full-stack-blog-app.git
cd full-stack-blog-app
```
Step 2: Install dependencies
```
npm install
```
step 3: Set up environment variables
```
cp .env.example .env
```

### Environment Variables

Add your own keys to the `.env` file:

```env
VITE_APPWRITE_PROJECT_ID=
VITE_APPWRITE_PROJECT_NAME=
VITE_APPWRITE_ENDPOINT=
VITE_APPWRITE_DATABASE=
VITE_APPWRITE_COLLECTION=
VITE_APPWRITE_BUCKET=
VITE_TINY_MCE_KEY=
```

### Run Locally

```bash
npm run dev
```

---

## 💡 Key Learnings

> *"Every bug, every fix, every 'why isn't this working' moment was worth it."*

- **Appwrite as a BaaS** — wrapping backend services into clean, reusable classes
- **Auth-driven UI** — showing and hiding content based on login state
- **Dynamic routing** — loading post content from URL parameters
- **Controller pattern** — connecting third-party inputs to a managed form
- **Redux for global state** — keeping auth data accessible across the entire app


## 🌐 Live Demo

**→ [Visit the live blog app](https://gilded-sopapillas-3e682b.netlify.app/)**

# ⌚ Watch Store – E-commerce Website

A simple and responsive E-commerce Watch Store website built using React.js and CSS.

## 📌 About the Project

Watch Store is a React-based E-commerce website where users can explore different smart watches and add or remove products from their cart.

This project is developed to practice React fundamentals, especially **Array Map Method, useState, Props, and Conditional Rendering.**

## ✨ Features

- Display multiple watch products.
- Product images, names, and prices.
- Add to Cart functionality.
- Remove from Cart functionality.
- Dynamic cart count.
- Conditional rendering for Add and Remove buttons.
- Responsive design for desktop, tablet, and mobile.

## 🛠️ Technologies Used

- React.js
- JavaScript
- HTML5
- CSS3
- Vite

## 📂 Project Structure

```text
src/
│
├── components/
│   ├── Header.jsx
│   ├── Banner.jsx
│   └── ProductCard.jsx
│
├── data/
│   └── productsData.jsx
│
├── App.jsx
├── App.css
└── main.jsx
```

## ⚙️ React Concepts Used

| Concept | Purpose |
|---|---|
| useState | Manage cart count |
| Props | Pass data between components |
| map() | Display multiple products |
| Conditional Rendering | Switch Add/Remove buttons |
| onClick | Handle button clicks |

## 🚀 Installation and Setup

**Step 1:** Clone the repository.

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

**Step 2:** Open the project folder.

```bash
cd watch-store
```

**Step 3:** Install dependencies.

```bash
npm install
```

**Step 4:** Start the development server.

```bash
npm run dev
```

**Step 5:** Open the local URL displayed in your terminal.

## 🛒 How It Works

1. Users can view the available smart watches.
2. Click the Add to Cart button to add a product.
3. The cart count increases.
4. The button changes to Remove from Cart using conditional rendering.
5. Click Remove from Cart to decrease the cart count.

## 📱 Responsive Design

The website supports:
- Desktop
- Tablet
- Mobile

## 👨‍💻 Author

Created as a React.js learning project to practice frontend development and React fundamentals.

## 📄 License

This project is created for educational and learning purposes.

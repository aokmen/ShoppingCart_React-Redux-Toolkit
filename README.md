# Shopping Redux Toolkit React App

<h3>Visit: https://shopping-app-react-redux-toolkit.netlify.app/</h3>

<img alt="alt_text" src="./shoppingcarts.gif"/>



## Project Skeleton

```
010 -  Shopping App(folder)
|
|----readme.md 
SOLUTION
├── public
│     └── index.html
├── src
│   ├── App.js
│   ├── assets
│   │   └── cw.svg
│   ├── components
│   │   ├── BasketCard.jsx
│   │   ├── CategoryBar.jsx
│   │   ├── EmptyBasketTotal.jsx
│   │   ├── FiiledBasketTotal.jsx
│   │   ├── NavBar.jsx
│   │   └── ProductCard.jsx
│   ├── index.css
│   ├── index.js
│   ├── pages
│   │   ├── Basket.jsx
│   │   ├── Home.jsx
│   │   └── NotFound.jsx
│   ├── redux
│   │   ├── action
│   │   │   └── basketAction.js
│   │   ├── index.jsx
│   │   ├── reducer
│   │   │   └── basketReducer.js
│   │   └── type
│   │   │   └── basketType.js
│   └── router
│       └── AppRouter.jsx
├── package.json
└── yarn.lock
```
# My Shopping Web Application

## Overview
The My Shopping web application is a modern e-commerce platform designed to provide users with a seamless shopping experience. It incorporates various features and technologies to enhance the shopping process. Below are the key functionalities and components of this project:

## 1. Home Page
- The Home page serves as the landing page for users.
- It displays a list of products fetched from the [Fake Store API](https://fakestoreapi.com/).
- Users can search for products and filter them by category.
- Products are presented with images, titles, prices, and brief descriptions.

## 2. Product Details
- Clicking on a product card reveals more details about the product, including a full description.
- Users can quickly add the product to their shopping cart by clicking the "Add to Cart" button.

## 3. Shopping Cart
- Users can view their selected products and their total price in the shopping cart.
- The cart icon in the navigation bar displays the number of items in the cart (updated in real-time).
- Users can increase or decrease the quantity of items in the cart.
- The cart can be emptied with the "Empty Cart" button.

## 4. User Authentication
- Users can create accounts, log in, and log out.
- Certain features, such as accessing the shopping cart and viewing orders, are protected and require authentication.

## 5. Category Filtering
- Products can be filtered by category, making it easier for users to find specific items.
- The Category Bar component provides an interactive category filter.

## 6. Dark Mode
- The application offers a dark theme for users who prefer it.
- Users can toggle between light and dark themes.

## 7. Loading State
- A loading spinner is displayed while data is fetched from the API to enhance the user experience.

## 8. Responsive Design
- The application is responsive and adapts to various screen sizes, ensuring a consistent experience across devices.

## Project Structure
The project is organized into several components and follows the Redux Toolkit for state management. Here's a brief overview of the project structure:

- **`src/components`**: Reusable UI components used throughout the application.
- **`src/features`**: Redux Toolkit slices for managing application state and asynchronous API calls.
- **`src/assets`**: Contains images, including product images and GIFs.
- **`src/pages`**: Individual pages or views of the application.
- **`src/App.js`**: The main application component.
- **`src/index.js`**: The entry point of the application.

## Technologies Used
* React for building the user interface.
* Redux Toolkit for state management.
* Axios for making HTTP requests to the Fake Store API.
* Material-UI for styling and UI components.
* React Router for client-side routing.
* React-Redux for connecting React components to the Redux store.


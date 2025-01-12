# GarirKhoj.com: Car Rental System

Welcome to **GarirKhoj.com**, a modern and feature-rich car rental platform where users can seamlessly rent cars, manage bookings, and enjoy a smooth, responsive user experience. Whether you're looking for a luxury car or a budget-friendly ride, GarirKhoj.com is the place to drive your dreams!

## 🔗 [Live Website Link Of **Game-Chill**](https://garir-khoj.netlify.app/)

## 🔗 [Github Server Repository **Game-Chill**](https://github.com/sheikh-saiyam/Garir-Khoj-Server)

## Key features :

### **🔑 Authentication**:

- **Secure Login & Registration**: Email/Password-based authentication using Firebase.
- **Google Login**: Quick access via Google account.
- **JWT Protection**: Secures private routes with JSON Web Tokens for session handling.
- **Protected Routes**: Ensures only authenticated users can access private pages.

### **🚗 Car Management**:

- **Add Cars**: Authenticated users can add car details including model, price, features, and availability.
- **Update Cars**: Modify existing car details through an intuitive form interface.
- **Delete Cars**: Remove cars from the platform with real-time updates and confirmation prompts.
- **Sort Cars**: Organize car listings by:
  - Price: Low to High or High to Low.
  - Date Added: Newest to Oldest or vice versa.
- **Booking Count**: Track and display the number of bookings per car.

### **📋 Booking Management**:

- **Real-Time Availability**: Display updated car availability for seamless bookings.
- **Booking Details**: Users can view all bookings with details like:
  - Car Model
  - Booking Period
  - Total Price
  - Booking Status (Confirmed, Pending, or Canceled)
- **Cancel Booking**: Cancel existing bookings with confirmation prompts.
- **Modify Booking Dates**: Update booking periods with a simple date picker.

### **🔍 Search & Filters & Toggle**:

- **Search Functionality**: Find cars by model, brand, or location.
- **Advanced Filters**: Filter by price or date added to find the perfect car.
- **Grid/List View Toggle**: Switch between grid and list layouts for browsing.
- **Toggle Layout**: Switch between grid and list views for a personalized browsing experience.

### **📊 Data Visualization**:

- **Chart.js Integration**: Visualize booking trends and revenue stats in the dashboard.

### **🌟 User Experience**:

- **Responsive Design**: Optimized for mobile, tablet, and desktop views.
- **SweetAlert2 Popups**: Beautiful popups for alerts and confirmations.
- **React Toastify**: Notify users with elegant toast messages.
- **Swiper Integration**: Smooth carousels for banners or special offers.
- **Fast Loading**: Efficient code and caching for better performance.

### **🔄 Loading Spinner**:

- Displays a loading spinner when fetching data from the server, improving the user experience during data loading.

<!-- **1. Car Management: Users can Add, Update, and Delete Cars listed for rental.**

**2. Car Search & sorting : Users can Search based on car model & sort cars by added-date & rental price**

**3. Car Booking : User can Book Cars based on their availability.**

**4. Real-time Updates : The system provides real-time updates on car availability and booking statuses.**

**5. JWT Authentication : JWT-based secure sessions for users. and secure api's are protected**

**6. Responsive Design: Fully responsive UI built with React.js and Tailwind CSS.Optimized for both mobile and desktop users** -->

## 🌐 Tech Stack

### **Frontend**:

- React.js
- React Router for routing
- Tailwind CSS for styling
- Firebase Authentication for user login
- Chart.js for booking visualizations

### **Backend**:

- **Node.js**: JavaScript runtime for building fast, scalable server-side apps.
- **Express.js**: Web framework for Node.js, ideal for building APIs and web apps.
- **MongoDB**: NoSQL database for flexible, scalable data storage.
- **Firebase Authentication**: Service for easy user authentication with multiple login options.
- **JWT**: Secure method for transmitting session data in JSON format.
- **Environment variables**: Store sensitive credentials like Firebase and MongoDB keys securely.

### **Hosting**:

- **Client-side**: Netlify
- **Server-side**: Vercel

## 📦 NPM Packages

- **React-datepicker**: A customizable date picker component for React with date range and time selection.
- **React-simple-typewriter**: Adds a typewriter effect to text for dynamic animations in React.
- **React Fast Marquee**: Creates smooth, scrolling text for announcements or news feeds.
- **React icons**: Provides customizable vector icons for React apps.
- **React-toastify**: Shows non-intrusive toast notifications with customizable messages.
- **SweetAlert2**: Provides beautiful, customizable popups for user interaction, such as alerts for success or errors.
- **Swiper**: A mobile-friendly carousel/slider component for React.
- **Axios**: A promise-based HTTP client for making API requests in React.
- **Recharts**: A library for creating charts and visual data representations in React.
- **Date-fns**: A library for working with dates in JavaScript, providing functions for parsing, formatting, and manipulating dates.

## ⚙️ Installation & Setup

**1. Clone the client repository**:

```
git clone https://github.com/sheikh-saiyam/Garir-Khoj-Client
cd Garir-Khoj-Client
```

**2. Clone the server repository**:

```
git clone https://github.com/sheikh-saiyam/Garir-Khoj-Server
cd Garir-Khoj-Server
```

**3. Install dependencies on client & server:**

```
npm install
```

**4. Set up environment variables in .env.local on client**

```
apiKey: import.meta.env.VITE_apiKey,
authDomain: import.meta.env.VITE_authDomain,
projectId: import.meta.env.VITE_projectId,
storageBucket: import.meta.env.VITE_storageBucket,
messagingSenderId: import.meta.env.VITE_messagingSenderId,
appId: import.meta.env.VITE_appId,
```

**5. Set up environment variables in .env on server**

```
DB_USER=your_db_user_name
DB_PASS=your_db_password
JWT_SECRET=jwt_secret_code
```

**6. Start the development:**

- Garir Khoj Client

```
npm run build
```

- Garir Khoj Server

```
npm start
```

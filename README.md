# GarirKhoj.com: Car Rental System

Welcome to **GarirKhoj.com**, a modern and feature-rich car rental platform where users can seamlessly rent cars, manage bookings, and enjoy a smooth, responsive user experience. Whether you're looking for a luxury car or a budget-friendly ride, GarirKhoj.com is the place to drive your dreams!

## 🔗 [Live Website Link Of **GarirKhoj**](https://garir-khoj.netlify.app/)

## 🔗 [Github Server Repository **GarirKhoj**](https://github.com/sheikh-saiyam/Garir-Khoj-Server)

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
  - Booking Status:
    - (Confirmed, Pending, or Canceled)
- **Cancel Booking**: Cancel existing bookings with confirmation prompts.
- **Modify Booking Dates**: Update booking periods with a simple date picker.

### **🔍 Search & Sort & Toggle**:

- **Search Functionality**: Find cars by model, brand, or location.
- **Sort Cars**: Organize car listings by:
  - Price: Low to High or High to Low.
  - Date Added: Newest to Oldest or vice versa.
- **Grid/List View Toggle**: Switch between grid and list layouts for browsing.

### **📊 Data Visualization**:

- **Chart.js Integration**: Visualize booking trends and revenue stats in the /my-booking page.

### **🌟 User Experience**:

- **Responsive Design**: Optimized for mobile, tablet, and desktop views.
- **SweetAlert2 Popups**: Beautiful popups for alerts and confirmations.
- **React Toastify**: Notify users with elegant toast messages.
- **Swiper Integration**: Smooth carousels for banners or special offers.
- **Fast Loading**: Efficient code and caching for better performance.

### **🔄 Loading Spinner**:

- Displays a loading spinner when fetching data from the server, improving the user experience during data loading.

## 📄 Pages Overview

### 🏠 **Home Page** (`/`)

- **Hero Banner**: A visually appealing banner showcasing premium cars with call-to-action button named view available cars.
- **Why Choose Us**: A section explaining platform advantages like:
  - Wide Variety of Cars
  - Affordable Prices
  - Easy Booking Process
  - Customer Support
- 🚗 **Recent Listings**: Explore the newest cars on our platform! View **6-8 handpicked cars** with sleek designs, detailed specs, competitive pricing, and easy booking options. Your perfect car might be here—don’t miss out!
- **Customer Reviews**: Display testimonials from users who have rented cars through the platform.
- ✨ **Special Offers**: Discover deals tailored for every journey!

### 🚗 **Available Cars** (`/available-cars`)

- **Search Functionality**: Find cars by model, brand, or location.
- **Sort Cars**: Organize car listings by:
  - Price: Low to High or High to Low.
  - Date Added: Newest to Oldest or vice versa.
- **Grid/List View Toggle**: Switch between grid and list layouts for browsing.
- **Availability**: Only display cars ready for booking.
- **Car Cards**:  
  Display all available cars in a visually appealing card format with the following details:
  - **Car Model**: Clearly mention the car's make and model.
  - **Car Image**: A high-quality photo of the car.
  - **Price Per Day**: Daily rental cost (e.g., `$50/day`).
  - **Availability Status**: Indicate if the car is available for immediate booking.
  - **Location**: e.g., _Dhaka, Bangladesh_.
  - **Added Date**: e.g., _12/23/2024_.
  - **Booking Count**: e.g., _Booked 2 times_.
  - **Book Now Button**:
    - A prominent button on each card, redirecting users to the **Car Details Page** for the selected car.

### 🚘 **Car Details** (`/car-details/:id`)

- **Overview**: This page provides detailed information about a selected car.displaying all the car's specifications and features.

- **Car Information**:

  - **Car Model**: Full name and model of the car (e.g., _Toyota Corolla 2023_).
  - **Price Per Day**: Daily rental cost (e.g., `$50/day`).
  - **Features**: List of car features, such as:
    - GPS
    - Air Conditioning
    - Automatic Transmission
  - **Availability Status**: Clearly indicate if the car is available for booking.
  - **Car Image**: A high-quality, full-width image showcasing the car.
  - **Added Date**: e.g., _Added on 12/23/2024_.
  - **Location**: e.g., _Dhaka, Bangladesh_.
  - **Booking Count**: e.g., _Booked 2 times_.
  - **Description**: A detailed description of the car and its specifications.

- **Booking Process**:
  - **Book Now Button**:  
    A clearly visible button that triggers a **Booking Modal**.
  - **Booking Modal**:
    - **Details in Modal**:
      - **Car Model**: Name of the car being booked.
      - **Price Per Day**: Rental cost.
      - **Booking Period**:
        - **Start Date**: Date picker for selecting the booking start date.
        - **End Date**: Date picker for selecting the booking end date.
      - **Total Price**: Calculate and display the total price based on the selected booking period.
    - **Actions in Modal**:
      - **Confirm Booking**: A button to finalize the booking process.
      - **Cancel**: Close the modal without booking.

### ➕ **Add Car** (`/add-car`) _(Private Route)_

- **Form Layout**: A user-friendly form for adding new cars with fields for:
  - Car Model
  - Daily Rental Price
  - Vehicle Registration Number
  - Features (GPS, AC, etc.)
  - Car Image
  - Car Description
  - Car Location
- **Validation**: Ensure all required fields are completed before submission.
- **Success Notification**: Show confirmation on successful car addition using Toastify or SweetAlert2.

### 🚘 **My Cars** (`/my-cars`) _(Private Route)_

- **Personal Inventory**: Display all cars added by the user.
- **Edit Functionality**: Enable users to update details of their cars, such as price or availability.
- **Delete Functionality**: Allow users to remove cars from their inventory with confirmation prompts.
- **Real-Time Updates**: Reflect changes instantly without page reloads.

### 📋 **My Bookings** (`/my-bookings`)

- **Booking Overview**: Display a list of all bookings made by the user, including:
  - Car Model
  - Booking Period
  - Total Price
  - Booking Status:
    - (Confirmed, Pending, or Canceled)
- **Cancel Booking**: Allow users to cancel a booking with a confirmation prompt.
- **Modify Booking Dates**: Provide an option to adjust the rental period for confirmed bookings.

## ⚙️ JSON Data Structure

### **Car**:

```json
[
  {
    "_id": "6769359891f670b79892b5e2",
    "car_model": "Honda HR-V 2023",
    "daily_rental_price": 100,
    "availability": "Yes",
    "registration_number": "04957638934",
    "features": [
      "Touchscreen Display",
      "Keyless Entry",
      "Bluetooth Connectivity",
      "Sunroof"
    ],
    "description": " A compact and stylish crossover SUV, offering a great balance of space and efficiency.",
    "car_image": "https://www.motortrend.com/uploads/2022/06/16-2023-Honda-HR-V-Sport-1.jpg?w=768&width=768&q=75&format=webp",
    "location": "Mirpur-11 , Dhaka , Bangladesh",
    "bookingCount": 2,
    "bookingStatus": "",
    "added_date": "2024-12-23T10:04:08.260Z",
    "user_details": {
      "name": "user-name",
      "email": "user-email@gmail.com",
      "photo": "https://user-photo-url.com"
    }
  }
]
```

### **Booking:**

```json
[
  {
    "_id": "676c09b295c2b592052dc689",
    "car_id": "676bc354fa9018b5a982216c",
    "car_image": "https://www.drivearabia.com/app/uploads/2020/09/Hyundai-Tucson-2021-1.jpg",
    "car_model": "Hyundai Tucson 2021",
    "daily_rental_price": 85,
    "totalPriceOfEntireBookingPeriod": 255,
    "bookingStatus": "Confirmed",
    "booking_days_difference": 3,
    "booking_start_date": "2024-12-28T13:33:22.000Z",
    "booking_end_date": "2024-12-31T13:33:22.000Z",
    "booked_user_email": "booked_user_email@gmail.com"
  }
]
```

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

## 📸Home Page (`/`) Image

![Project Image](<https://raw.githubusercontent.com/sheikh-saiyam/My-Portfolio/refs/heads/main/public/projects/garir-khoj%20(2).png>)

## 📸Available Car Page (`/available-cars`) Image

![Project Image](<https://raw.githubusercontent.com/sheikh-saiyam/My-Portfolio/refs/heads/main/public/projects/garir-khoj%20(1).png>)

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

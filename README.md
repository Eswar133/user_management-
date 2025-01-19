Here’s a comprehensive **README.md** file for your project:

---

# User Management System

This project is a **User Management System** built with **Node.js**, **Express.js**, **MongoDB**, and **EJS**. It includes features for users to sign up, log in, view and update their details, and deactivate their accounts. Additionally, a Super Admin can manage users, view their details, and deactivate accounts.

---

## Features

### 1. **User Features**
- **Signup**: 
  - Users can create an account by providing their name, email, password, and phone number.
  - Input validations are enforced, such as:
    - Email format.
    - Password length (minimum 8 characters).
    - Unique email address.
- **Login**:
  - Users can log in using their email and password.
  - Upon successful login, users are redirected to their dashboard.
- **Dashboard**:
  - Displays user details (name, email, and phone number).
  - Users can:
    - Update their details.
    - Deactivate their account (disabling further logins while retaining the data).

### 2. **Super Admin Features**
- **Login**:
  - Super Admin can log in using a predefined account (email: `admin@example.com`, password: `admin@123`).
- **Dashboard**:
  - Displays a table of all users with their details and account status (active/inactive).
  - Super Admin can deactivate any user account.

---

## Folder Structure

```
user-management/
├── src/
│   ├── controllers/                 # Handles application logic
│   │   ├── authController.js         # Signup and login functionality
│   │   ├── userController.js         # User-specific actions
│   │   ├── adminController.js        # Super Admin-specific actions
│   ├── models/                      # MongoDB schemas
│   │   ├── userModel.js              # Schema for user accounts
│   │   ├── adminModel.js             # Schema for Super Admin account
│   ├── routes/                      # Application routes
│   │   ├── authRoutes.js             # Routes for signup and login
│   │   ├── userRoutes.js             # Routes for user actions
│   │   ├── adminRoutes.js            # Routes for Super Admin actions
│   ├── middlewares/                 # Middleware
│   │   ├── authMiddleware.js         # JWT verification
│   ├── views/                       # EJS templates
│   │   ├── auth/
│   │   │   ├── login.ejs             # User login page
│   │   │   ├── signup.ejs            # User signup page
│   │   ├── dashboard.ejs             # User dashboard
│   │   ├── superAdmin.ejs            # Super Admin dashboard
│   ├── utils/                       # Utility functions
│   │   ├── seedAdmin.js              # Helper for JWT token generation
│   ├── app.js                        # Main Express app
│   ├── server.js                     # Server entry point
├── .env                              # Environment variables
├── package.json                      # Project dependencies
├── README.md                         # Project documentation
├── postman_collection.json           # Postman collection for API testing
```

---

## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Frontend**: EJS (Embedded JavaScript Templates)
- **Authentication**: JWT (JSON Web Tokens)
- **Hashing**: bcrypt.js

---

## Setup and Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/Eswar133/user_management-.git
   cd user-management
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Environment Variables**
   Create a `.env` file in the root directory and add the following:
   ```
   MONGO_URI=<your_mongo_connection_string>
   PORT=5000
   JWT_SECRET=<your_jwt_secret>
   ```

4. **Run the Super Admin Seed Script**
   Prepopulate the Super Admin account by running:
   ```bash
   node src/utils/seedAdmin.js
   ```

5. **Start the Server**
   ```bash
   npm run dev
   ```

6. **Access the Application**
   - User Signup: `http://localhost:5000/auth/signup`
   - User Login: `http://localhost:5000/auth/login`
   - Super Admin Login: `http://localhost:5000/admin/login`

---

## API Endpoints

### **Authentication**
- `POST /auth/signup` - User signup.
- `POST /auth/login` - User login.

### **User Dashboard**
- `GET /user/dashboard` - Fetch user details.
- `POST /user/update` - Update user details.
- `POST /user/deactivate` - Deactivate user account.

### **Super Admin**
- `POST /admin/login` - Super Admin login.
- `GET /admin/dashboard` - View all user details.
- `POST /admin/deactivate` - Deactivate a user account.

---

## Postman Collection

A Postman collection for testing all APIs is included in the project as `postman_collection.json`. You can import it into Postman to test the API endpoints.

---

## Validations and Constraints

- **Backend Validations**:
  - Unique email addresses.
  - Email format validation using regex.
  - Password must be at least 8 characters.
- **Frontend Validations**:
  - Real-time validation for email and password fields using JavaScript.

---

## Features to Test

### **User Workflow**
1. Signup with a valid email, password, and phone number.
2. Login with the created account credentials.
3. Update user details in the dashboard.
4. Deactivate the account and try logging in again (should fail).

### **Super Admin Workflow**
1. Login using the predefined Super Admin account.
2. View all users on the dashboard.
3. Deactivate a user and verify their login is blocked.

---

## Future Enhancements

- Implement role-based authorization for multiple types of admins.
- Add pagination for Super Admin user list.
- Allow reactivation of deactivated accounts by the Super Admin.

---

## License

This project is open-source and available under the MIT License.

---

This **README.md** provides a complete overview of your project, including installation steps, API documentation, and usage. Let me know if you’d like any additional details!

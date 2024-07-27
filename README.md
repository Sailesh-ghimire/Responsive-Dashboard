# Responsive Dashboard with Authentication

This project is a responsive dashboard application built with React and Tailwind CSS. It includes a login page with validation, a mocked login API for authentication, Redux for state management, and TypeScript for type safety.

## Features

- **Responsive Design**: Works on both desktop and mobile screens.
- **Login Page**: With email and password validation.
- **Loading Animation**: Indicates when data is being fetched.
- **Protected Routes**: Prevents access to authenticated routes without login.
- **Redux State Management**: Manages authentication state.
- **TypeScript**: Enhances code quality and maintainability.

## Setup and Installation

### Prerequisites

- Node.js (>= 12.x)
- npm (>= 6.x) or yarn (>= 1.x)

### Installation

1. **Clone the repository**:

   ```sh
   git clone https://github.com/your-username/responsive-dashboard.git
   cd responsive-dashboard
   ```

2. **Install dependencies**:

   ```sh
   npm install
   # or
   yarn install
   ```

3. **Run the application**:

   ```sh
   npm start
   # or
   yarn start
   ```

4. **Access the application**:
   Open your browser and go to `http://localhost:3000`.

## Project Structure

src/
├── auth/
│ ├── authApi.ts
├── components/
│ ├── Footer.tsx
│ ├── Loading.tsx
│ ├── Navbar.tsx
│ ├── PrivateRoute.tsx
│ ├── PublicRoute.tsx
├── pages/
│ ├── DashboardPage.tsx
│ ├── LoginPage.tsx
├── store/
│ ├── authSlice.ts
│ ├── index.ts
├── App.tsx
├── index.tsx

## Predefined credentials

const MOCK_EMAIL = 'test@mail.com';
const MOCK_PASSWORD = 'test';
const AUTH_TOKEN = 'auth-token';

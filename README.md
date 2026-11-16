# Full Stack Development (FST) Lab Programs

This repository contains the complete collection of Full Stack Development laboratory programs, organized into frontend applications, backend applications, and full-stack MERN integration.

- **Student Name**: Valli Amrutha
- **GitHub Profile**: [https://github.com/valliamrutha](https://github.com/valliamrutha)
- **Institution**: Vasireddy Venkatadri Institute of Technology (VVIT)

---

## Repository Structure

```text
react-lab-programs/
│
├── frontend-applications/
│   ├── program-01-react-html-app/          # Direct HTML rendering using createRoot
│   ├── program-02-react-jsx-app/           # Dynamic JSX expressions & variable interpolation
│   ├── program-03-react-multi-components/  # Nested Class & Functional components with props
│   ├── program-04-react-state-and-events/  # Dynamic state management with useState & events
│   ├── program-05-react-forms-and-events/  # Controlled forms with inputs, radio, select & events
│   ├── program-06-conditional-rendering/   # Conditional UI rendering (Auth state)
│   ├── program-07-rendering-lists/         # Dynamic list mapping to HTML tables with keys
│   ├── program-08-frontend-crud/           # Expense Tracker CRUD application with total expenses
│   └── program-09-react-router-app/        # Multi-page client-side routing & dynamic params
│
├── backend-applications/
│   ├── program-10-express-middleware/      # Express middleware chain & patients REST API
│   ├── program-11-mongodb-express/         # Native MongoDB driver CRUD operations (/api/v1/books)
│   ├── program-12-mongoose-express/        # Mongoose ODM schema & validation (/api/v1/movies)
│   ├── program-13-mvc-express/             # Model-View-Controller modular architecture
│   ├── program-14-mvc-authentication/      # JWT & bcrypt authentication middleware
│   └── program-15-template-engine-ejs/     # Server-side rendering using EJS templates
│
├── mern-full-stack-application/
│   ├── backend/                            # Express & MongoDB Mongoose API for Blog Posts
│   └── frontend/                           # React frontend with Vite & React Router
│
└── README.md
```

---

## Lab Programs Overview

### Frontend Applications

| # | Program Name | Description | Key Technologies | Status |
|---|---|---|---|---|
| 01 | **React HTML App** | Direct HTML rendering to DOM using React `createRoot` | React 19, Vite | Completed |
| 02 | **React JSX App** | Embedding dynamic JavaScript expressions into JSX | React 19, Vite | Completed |
| 03 | **React Multi Components** | Nested Class (Header/Footer) & Functional (Student) Components | React 19, Vite | Completed |
| 04 | **React State & Events** | State management using `useState` and interactive events | React 19, Vite | Completed |
| 05 | **React Forms & Events** | Controlled form inputs with validation, submit, and clear | React 19, Vite | Completed |
| 06 | **Conditional Rendering** | Dynamic UI rendering based on authentication state | React 19, Vite | Completed |
| 07 | **Rendering Lists** | Mapping array datasets to table elements with unique keys | React 19, Vite | Completed |
| 08 | **Frontend CRUD** | Expense Tracker with Create, Read, Update, Delete capabilities | React 19, Vite | Completed |
| 09 | **React Router App** | Client-side routing with routes, parameters, and navigation | React Router 7 | Completed |

### Backend Applications

| # | Program Name | Description | Key Technologies | Status |
|---|---|---|---|---|
| 10 | **Express Middleware** | Logging, validation, auth middleware chain, and patients API | Express.js, Node.js | Completed |
| 11 | **MongoDB Express** | Complete CRUD operations using native MongoDB driver | MongoDB, Express.js | Completed |
| 12 | **Mongoose Express** | Schema modeling and validation with Mongoose ODM | Mongoose, MongoDB | Completed |
| 13 | **MVC Express** | Modular architecture with Models, Views, and Controllers | Node.js, Express | Completed |
| 14 | **MVC Authentication** | User authentication with bcrypt password hashing and JWT | JWT, bcrypt, Express | Completed |
| 15 | **Template Engine EJS** | Server-side rendering dynamic HTML with EJS templates | EJS, Express.js | Completed |

### Full-Stack Application

| # | Program Name | Description | Key Technologies | Status |
|---|---|---|---|---|
| 16 | **MERN Full Stack App** | End-to-end Blog Post CRUD app with Express backend and React UI | MongoDB, Express, React, Node | Completed |

---

## Running Programs Locally

### 1. Frontend Applications (Programs 01 to 09)

To run any frontend application, navigate to its directory, install dependencies, and run Vite:

```bash
# Example for Program 1
cd frontend-applications/program-01-react-html-app
npm install
npm run dev

# Example for Program 8 (Frontend CRUD)
cd frontend-applications/program-08-frontend-crud
npm install
npm run dev

# Example for Program 9 (React Router)
cd frontend-applications/program-09-react-router-app
npm install
npm run dev
```

Open `http://localhost:5173` in your browser.

---

### 2. Backend Applications (Programs 10 to 15)

To run any backend service:

```bash
# Program 10: Express Middleware
cd backend-applications/program-10-express-middleware
npm install
npm start

# Program 11: MongoDB Express
cd backend-applications/program-11-mongodb-express
npm install
npm start

# Program 12: Mongoose Express
cd backend-applications/program-12-mongoose-express
npm install
npm start

# Program 13: MVC Express
cd backend-applications/program-13-mvc-express
npm install
npm start

# Program 14: MVC Authentication
cd backend-applications/program-14-mvc-authentication
npm install
npm start

# Program 15: Template Engine EJS
cd backend-applications/program-15-template-engine-ejs
npm install
npm start
```

---

### 3. MERN Full Stack Application (Program 16)

The MERN application consists of both a backend REST API and a frontend React interface:

#### Start Backend:
```bash
cd mern-full-stack-application/backend
npm install
npm start
# Server runs at http://localhost:3000
```

#### Start Frontend:
```bash
cd mern-full-stack-application/frontend
npm install
npm run dev
# Frontend runs at http://localhost:5173
```

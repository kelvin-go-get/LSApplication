# Todo List Application

This is a simple Todo List application built with Vue.js, featuring tasks management (add, delete) with API integration using a Node.js backend.

## Features

- Add new tasks.
- View all tasks.
- Delete tasks.
- Backend API interaction.

## Project Structure

The project is divided into two parts:
1. **Frontend** (Vue.js): Runs on port `5173` and interacts with the backend.
2. **Backend** (Node.js/Express): Runs on port `3001` and handles task creation, deletion, and fetching from a database.

## Getting Started

Follow these instructions to set up and run the project on your local machine.

### Prerequisites

- Node.js (v14 or higher)
- npm (v7 or higher)
- Vue CLI (optional)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-repo/todo-app.git
   cd todo-app
   ```
2. **Install frontend dependencies::**
   ```bash
   cd frontend
    npm install
   ```
3. **Install backend dependencies:**
    ```bash
   cd backend
    npm install
   ```
    
## Running the Project
1. **Backend (Node.js)**
-Make sure the backend server is running on port 3001.
1. **Go to the backend folder:**
```bash
cd backend
```
2. **Run the backend server:**
 ```bash
npm start
```
-The backend API will be available at http://localhost:3001
1. **Frontend (Vue.js)**
-The frontend runs on port 5173. Before running, make sure the backend URL is correctly set in the environment variables.

1. **Environment Setup:**
-Create an .env file in the frontend directory with the following content:
```bash
VITE_API_URL=http://localhost:3001
```
2. **Run the frontend development server:**
```bash
cd frontend
npm run dev
```
-The frontend will be available at http://localhost:5173.

## API Endpoints
**The following endpoints are available from the backend:**
- GET /api/tasks - Fetch all tasks
- POST /api/tasks - Create a new task (JSON body: { text: string })
- DELETE /api/tasks/:id - Delete a task by ID
   

# Notification System

## Table of Contents

- [Overview](#overview)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Configuration](#configuration)
  - [Database Migration](#database-migration)
  - [Running the Application](#running-the-application)
- [API Documentation](#api-documentation)
- [Contributing](#contributing)
- [License](#license)

## Overview

This is test project to manage notifications like Facebook.

## Technologies Used

- **Programming Language:** TypeScript, Node.js, Nest.js, React.js, TailwindCSS
- **Database:** PostgreSQL
- **Architecture:** Clean Architecture
- **API Documentation:** Swagger

## Getting Started

### Prerequisites

- Nest.js, TypeORM, React.js
- PostgreSQL database
- Migrate CLI for database migrations

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Superstar-IT/facebook-test-app.git
   ```

2. **Navigate to the backend directory:**

   ```bash
   cd backend
   ```

3. **Install dependencies:**

   ```bash
   yarn install
   ```

4. **Navigate to the frontend directory:**

   ```bash
   cd frontend
   ```

5. **Install dependencies:**

   ```bash
   yarn install
   ```

### Configuration

1. **Copy the example environment file and modify it as needed in backend directory:**

   ```bash
   cp .env.example .env
   ```

2. **Set the environment variables in `.env` to match your database configuration:**

   ```env
   DATABASE_HOST=localhost
   DATABASE_PORT=5432
   DATABASE_USERNAME=your_db_user
   DATABASE_PASSWORD=your_db_password
   DATABASE_NAME=your_db_name
   DATABASE_TYPE=postgres
   ```

### Database Migration

1. **Ensure the PostgreSQL database is running.**

2. **Run the database migrations:**
   Run migration

   ```bash
   npm run migration:run
   ```

### Running the Application

1. **Start the application:**

  start backend server (run this bash in backend directory)

  ```bash
  yarn run dev
  ```

  start frontend server (run this bash in frontend directory)

  ```bash
  yarn run dev
  ```

2. **The server will start on the port specified in your `.env` file.**

## API Documentation

API documentation is available and it's written as a Swagger:

Once the server is running you can visit http://localhost:[port]/api/document to see the API documentation.

Once the ui is running you can visit http://localhost:5173

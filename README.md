# My Todo App

This is a simple Todo application built with a React frontend, an Express.js backend, and a SQLite database.

## Getting Started

To get started with this project, clone the repository and install the dependencies in both the client and server directories.

```bash
git clone https://github.com/yourusername/my-todo-app.git
cd my-todo-app/client
npm install
cd ../server
npm install
```

## Running the Application

To run the application, you need to start both the client and the server.

In the client directory, run:

```bash
npm start
```

In the server directory, run:

```bash
npm start
```

The client will run on `localhost:3000` and the server will run on `localhost:5000`.

## Application Structure

The application is split into a client and server directory. The client directory contains the React frontend and the server directory contains the Express.js backend and SQLite database.

### Client

The client is a React application that uses functional components and hooks. The main component is `App.js`, which renders the `TodoList` and `AddTodo` components and manages the state of the application.

### Server

The server is an Express.js application that provides a REST API for the todos resource. The main file is `app.js`, which sets up middleware and routes. The `todosController.js` file handles the routes and the `todoModel.js` file represents a todo item in the database.

## Contributing

Contributions are welcome. Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License.
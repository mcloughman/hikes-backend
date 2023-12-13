# MERN Hikes Backend

This repository contains the backend code for a MERN app focused on hikes. It is based on the Net Ninja MERN with Authorization series.

## Live Demo
https://mern-hike-michaelloughman.netlify.app/

## Features

- **Authentication and Authorization:** BCRYPT and JSON Web Token packages are employed for secure user authentication and authorization.

- **Static Methods in Mongoose Models:** The backend utilizes static methods in Mongoose models, enhancing code modularity and maintainability.

- **Middleware for Route Protection:** Middleware is implemented to protect non-GET routes, ensuring that sensitive operations are secure.

- **Testing with POSTMAN:** Extensive testing of routes is performed using POSTMAN during the development phase, ensuring robust API functionality.

- **Deployment:** The backend is deployed on Heroku, forming a functioning full-stack app in conjunction with the frontend deployed on Netlify.

## Getting Started

To set up the backend locally, follow these steps:

1. Clone this repository.
2. Install dependencies using `npm install`.
3. Configure environment variables, such as database connection strings and JWT secret.
4. Start the server with `npm start`.

## Technologies Used

- Node.js
- Express.js
- MongoDB with Mongoose
- BCRYPT (for authentication)
- JSON Web Token (for authorization)



# Content Management Sysytem Integrated into Portfolio Website

## Overview
This project is a dynamic **Portfolio Website** integrated with a **Content Management System (CMS)**. It showcases personal projects, skills, and achievements, allowing users to manage and update content effortlessly via a secure and intuitive dashboard.

## Features
- **Responsive Design**: Fully responsive, mobile-friendly design using modern front-end technologies.
- **Dynamic Project Showcase**: Add, edit, and delete projects through the CMS.
- **User Authentication**: Secure login system for administrators to manage the CMS.
- **Real-Time Content Updates**: Projects and content update in real-time without needing a page refresh.
- **Contact Form**: Integrated contact form with email notifications.
- **Secure HTTPS Communication**: The website runs over HTTPS for secure data transmission.

## Technologies Used
- **Frontend**: 
  - [React](https://reactjs.org/) (with Vite for development)
  - CSS for styling and responsiveness
- **Backend**: 
  - [Node.js](https://nodejs.org/) with [Express](https://expressjs.com/)
  - [MongoDB](https://www.mongodb.com/) for data storage
- **Authentication**:
  - JSON Web Tokens (JWT) for secure user authentication
- **Other Tools**:
  - [Vite](https://vitejs.dev/) for fast development builds
  - [Helmet](https://helmetjs.github.io/) for securing HTTP headers
  - [CORS](https://www.npmjs.com/package/cors) to handle cross-origin requests


## API Endpoints
GET /api/projects: Retrieve all projects
POST /api/projects: Add a new project (requires authentication)
PUT /api/projects/:id: Update a project (requires authentication)
DELETE /api/projects/:id: Delete a project (requires authentication)

## Setup and Installation
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/username/repository-name.git

2. **Install Dependencies**:
   Navigate to the project directory and install the required packages:
   ``` bash
   cd portfolio-website
   npm install

3. **Environment Variables**:
   **Create a .env file in the root of your project and add the following**:
   ```bash
   MONGO_URI=your_mongodb_uri
   PORT=5000
   JWT_SECRET=your_jwt_secret
   SSL_KEY_PATH=./key.pem
   SSL_CERT_PATH=./cert.pem

4. **Run the Development Server**:
   ```bash
   npm run dev

5. **Build for Production**:
   ```bash
   npm run build
   
6. **Start the Server**:
   ```bash
   node server.js


## Contact
For questions or suggestions, feel free to reach out:

-**Email**: jasrajshen2020@gmail.com
-**LinkedIn**: https://www.linkedin.com/in/jasraj-shendge/



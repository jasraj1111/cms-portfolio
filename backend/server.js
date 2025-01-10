const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const https = require('https');
const http = require('http');
const fs = require('fs');

dotenv.config();
const app = express();
app.use(express.static('public'));

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

// MongoDB Connection
mongoose
    .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.log(err));

// Routes
app.use('/api/projects', require('./routes/projectRoutes'));
app.use('/api/auth', require('./routes/authRoutes'));

// SSL/TLS Certificates from Environment Variables
const sslOptions = {
    key: fs.readFileSync(process.env.SSL_KEY_PATH),
    cert: fs.readFileSync(process.env.SSL_CERT_PATH),
};


// Start HTTPS Server
const PORT = process.env.PORT || 5000;
https.createServer(sslOptions, app).listen(PORT, () => {
    console.log(`Secure server running on port ${PORT}`);
});

// Start HTTP Server to Redirect to HTTPS
http.createServer((req, res) => {
    res.writeHead(301, { "Location": `https://${req.headers.host}${req.url}` });
    res.end();
}).listen(80, () => {
    console.log('HTTP Server running on port 80 and redirecting to HTTPS');
});

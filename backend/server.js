const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');


dotenv.config();
const app = express();
app.use(express.static('public'));

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

//MongoDB Connection
mongoose
    .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.log(err));

//     app.listen(process.env.PORT || 5000, () => {
//         console.log(`Server running on port ${process.env.PORT || 5000}`);
//       });

// Routes
app.use('/api/projects', require('./routes/projectRoutes'));
app.use('/api/auth', require('./routes/authRoutes'));

// SSL/TLS Certificates from Environment Variables
app.listen(5000, () =>{
    console.log("server running")
});


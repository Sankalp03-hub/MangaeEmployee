const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userroutes');
const connectDB = require('./config/database');

const app = express();

app.use(bodyParser.json());
app.use(cors())

// MongoDB connection
connectDB();

// Routes
app.use('/users', userRoutes);

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Server running on port ${port}`));

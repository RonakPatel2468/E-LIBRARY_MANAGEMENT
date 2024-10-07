const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const bookRoutes = require('./routes/bookRoutes');
const errorHandler = require('./middlewares/errorHandler');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const logger = require('./middlewares/logger');

dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(express.json());
app.use(helmet());
app.use(morgan('dev'));
app.use(cors());

// Rate Limiting
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per windowMs
});
app.use(limiter);

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/books', bookRoutes);

// Logger middleware
app.use((req, res, next) => {
    logger.info(`${req.method} ${req.url}`);
    next();
});

// Error Handling Middleware
app.use(errorHandler);

// Root route
app.get('/', (req, res) => {
    res.send(`
        <center>
            <h1>Welcome to the E-Library Management API!</h1>
            <br>
            <p>
                Get E-Library API: 
            <a href="https://github.com/RonakPatel2468/E-LIBRARY_MANAGEMENT.git" target="_blank">Repository: E-LIBRARY_MANAGEMENT</a>
            </p>
        </center>
    `);
});


// Start the server
const PORT = process.env.PORT || 9000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

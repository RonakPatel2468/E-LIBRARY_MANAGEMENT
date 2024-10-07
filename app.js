const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const bookRoutes = require('./routes/bookRoutes');
const errorHandler = require('./middlewares/errorHandler');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
const logger = require('./middlewares/logger');
const rateLimit = require('express-rate-limit');
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per windowMs
  });
  

dotenv.config();
connectDB

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/books', bookRoutes);


app.use(
    helmet({
      contentSecurityPolicy: false,
      crossOriginEmbedderPolicy: false,
    })
  );

// Middleware
app.use(express.json());
app.use(helmet());
app.use(morgan('dev'));
app.use(cors());
app.use(limiter);



// Logger middleware
app.use((req, res, next) => {
    logger.info(`${req.method} ${req.url}`);
    next();
  });

  



// Error Handling Middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
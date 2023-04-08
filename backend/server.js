require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(cookieParser())
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then((result) => app.listen(process.env.PORT, () => console.log("server running on port", process.env.PORT)))
  .catch((err) => console.log(err));

// routes
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const pantryRoutes = require('./routes/pantryRoutes');

app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);
app.use('/api/user/pantry', pantryRoutes);
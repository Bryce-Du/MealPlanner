require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then((result) => app.listen(process.env.PORT, () => console.log("server running on port", process.env.PORT)))
  .catch((err) => console.log(err));;
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const authRoutes = require('./routes/auth');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());


// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));


// Use routes
app.use('/api/auth', authRoutes);
// Basic route
app.get('/', (req, res) => {
  res.send('eCommerce API');
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
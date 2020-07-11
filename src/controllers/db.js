const { AUTH_API_DB } = require('../utils/config');
const mongoose = require('mongoose');
// mongoose.set('debug', true);

const connectDB = () => {
  console.log('Connecting to database...');

  mongoose.connect(
    'mongodb://localhost:27017/authstuff',
    {
      keepAlive: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
      poolSize: 10
    }
  )
    .then(() => {
      console.log('Connected to Auth-MicroAPI database!');
    })
    .catch(error => {
      console.error.bind(console, 'MongoDB Connection Error>> : ');
    });
};

module.exports = {
  connectDB
};
const express = require('express');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
const passportJWT = require('./middlewares/passportJWT')();
const errorHandler = require('./middlewares/errorHandler');

const postRoutes = require('./routes/post');
const authRoutes = require('./routes/auth');

mongoose.connect('mongodb://nosql:27017/instaclone', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection Error!!!'));
db.once('open', () => console.log('MongoDB connection stablished'));

const app = express();
app.use(cors());
app.use(express.json());
app.use(passportJWT.initialize());

app.use('/api/posts', postRoutes);
app.use('/api/auth', authRoutes);

app.use(errorHandler);

app.listen(3000, () => console.log('Listen on port 3000'));
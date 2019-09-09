const express = require('express');
const cors = require('cors');
const path = require('path');
const errorHandler = require('./middlewares/errorHabndler');

const postsRoutes = require('./routes/posts');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/api/posts', postsRoutes);

app.use(errorHandler);


app.listen(3000, () => console.log('Listen on port 3000'));
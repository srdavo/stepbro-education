const express = require('express');
const path = require('path');
const { authController } = require('./controllers/auth.controller');

// Configuration
const app = express();
const PORT = process.env.PORT || 3000;

// Template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middlewares
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Routes: views
app.get('/', (req, res) => {
	res.render('index', {title:'Home'});
});

// Routes: API auth
app.post('/api/auth/login', authController.login);
app.post('/api/auth/register', authController.register);

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

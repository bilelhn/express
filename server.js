import express from 'express';
const app = express();

// Configuration pour servir les fichiers statiques depuis le répertoire "public"
app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get('/', (req, res, next) => {
    var date = new Date();
    if (date.getDay() > 0 && date.getDay() < 6 && date.getHours() > 9 && date.getHours() < 17) {
        res.render('index', { message: "This is the home page" });
    } else {
        res.render('index', { message: "Our application is only available during working hours, Monday to Friday, from 9 AM to 5 PM. Please come back during these hours to access our services." });
    }
    next();
});

app.get('/services', (req, res, next) => {
    var date = new Date();
    if (date.getDay() > 0 && date.getDay() < 6 && date.getHours() > 9 && date.getHours() < 17) {
        res.render('services', { message: "This is the Service page" });
    } else {
        res.render('services', { message: "Our application is only available during working hours, Monday to Friday, from 9 AM to 5 PM. Please come back during these hours to access our services." });
    }
    next();
});

app.get('/contact', (req, res, next) => {
    var date = new Date();
    if (date.getDay() > 0 && date.getDay() < 6 && date.getHours() > 9 && date.getHours() < 17) {
        res.render('contact', { message: "This is the contact page" });
    } else {
        res.render('contact', { message: "Our application is only available during working hours, Monday to Friday, from 9 AM to 5 PM. Please come back during these hours to access our services." });
    }
    next();
});

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});

const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routes/admin');
const path = require('path');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set('view engine', 'ejs');
// app.set('view engine', 'pug');
// app.set('views', 'views');

app.use('/admin', router);
app.use(express.static(path.join(__dirname, '/public')));

const errorConntroller = require('./controllers/error-controller');
app.use(errorConntroller.get404);

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});
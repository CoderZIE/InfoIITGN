const express = require('express');
const app = express();
const path = require('path');
const port = 7000;

//Express specific stuff
app.use('/static', express.static('static'));
app.use(express.urlencoded());

//PUG specific stuff
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

//ENDPOINTS
app.get('/', (req, res) => {
    res.status(200).render('home.pug');
})

//Start the server
app.listen(port, () => {
    console.log(`The application is started successfully in port ${port}`)
})
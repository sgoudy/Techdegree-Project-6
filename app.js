const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const indexRoute = require('./routes');
const aboutRoute = require('./routes/about');
const projectRoute = require('./routes/project');


// VIEW ENGINE //
// ------------------------------------------------------------------//
app.set('view engine', 'pug');


// MIDDLEWARE //
// ------------------------------------------------------------------//
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(indexRoute);
app.use('/about', aboutRoute);
app.use('/project', projectRoute);
app.use('/static', express.static('public'));


// ERRORS //
// ------------------------------------------------------------------//
// Catch 404 and forward to error handler //

app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
  });

// Error handler //  
app.use((err, req, res, next) => {
    res.locals.error = err;
    res.status(err.status);
    console.log(`Uh oh, we have the following error: ${err.status}- ${err.message}`);
    console.log(`${err.stack}`)
    res.render('error');
});


// SERVER //
// ------------------------------------------------------------------//
app.set('port', (process.env.PORT || 5000));

//For avoiding Heroku $PORT error
app.get('/', function(request, response) {
    var result = 'App is running'
    response.send(result);
}).listen(app.get('port'), function() {
    console.log('App is running, server is listening on port ', app.get('port'));
});

// EXPORT APP //
// ------------------------------------------------------------------//
module.exports = app;

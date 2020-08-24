# Techdegree-Project-6
 Static Node.js and Express Site


-- Exceeds Criteria--
START:

Running "npm start" serves the app.

TEMPLATES:
Error.pug template created.

ERRORS:
When the app is directed at a non-existent route, like /error/error, the app displays a user friendly error page in the browser that details the following:
error.message
error.status
error.stack
...albeit in a slightly modified format.


LAYOUT, CSS, AND STYLES:
Logo Added on Layout.pug: img(src='basec1.png')

ADDITIONAL CHANGES INDICATED BELOW:

h1,h2,h3,h4,h5,h6,p,ul,a{
    font-family: 'Courier';
}

.portfolio-intro{
    background-color: lightslategrey;
}

.text-light{
    color: white;
}

p{
    font-size: 18px;
    color: #381C1D;
}

nav{
    background-color: lightgray;
}

h1{
    text-shadow: 2px 2px 3px white;
}

h3{
    text-align: center;
  }

h5{
    text-align: center;
    color: #381C1D; 
}

.error{
  text-align: center;
  color: red;
}

.black{
  text-align: center;
  font-size: 13px;
}

.error-body{
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 30%;
}
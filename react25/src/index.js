//es6 require //common.js
//exports default test; //module.exports ={};
// exports var a = 10; //export.varname = 10;

import React from 'react'; //require react = require('react');
import ReactDOM from 'react-dom';

//react renderer
ReactDOM.render(
    //1st param wat to render
    //the element to be created is html element
    React.createElement(
        'div', //1st actual html element to be created 
        'null', // {id:'test'} //2nd id, class, properties, props 
        'This div is created using react', //3rd

        React.createElement('input'),
        React.createElement('p', null, new Date().toLocaleDateString())
    ),
    //where to render
    document.getElementById('react')
)
let test = (a, b) => {

};

//normal renderer
const renderer = () => {
    document.getElementById('normal').innerHTML =
        `<p> this is list <input> </input></p> <p> ${new Date().toLocaleTimeString()} </P>`;

}
setInterval(renderer, 1000);
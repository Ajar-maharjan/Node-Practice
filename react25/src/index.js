//es6 require //common.js
//exports default test; //module.exports ={};
// exports var a = 10; //export.varname = 10;

import React from 'react'; //require react = require('react');
import ReactDOM from 'react-dom';

//* react renderer
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

//* normal renderer
const renderer = () => {
    document.getElementById('normal').innerHTML =
        `<p> this is list <input> </input></p> <p> ${new Date().toLocaleTimeString()} </P>`;

}
setInterval(renderer, 1000);


//* jsx render
// button h1 div
const lecture = 'of react jsx';

const element = <h1> This is testing {
    lecture
} </h1>;
ReactDOM.render(element, document.getElementById("jsx"));

// component creation

// two types - function based and class based
//function so that it can be reused
function Button(porps) {
    return <button type = "submit" > {
        porps.label
    } </button> 
    // this is jsx
}

//? this also works, but cannot be reused vvvv
// ReactDOM.render(<button type = "submit"></button>,document.getElementById("jsx"));
//! Button function is called and button is actually component here

// this is  to save
ReactDOM.render( < Button label = "save" / > , document.getElementById("jsx"));

// this is to cancel
ReactDOM.render( < Button label = "cancel" / > , document.getElementById("jsxx"));
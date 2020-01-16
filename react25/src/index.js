// //es6 require //common.js
// //exports default test; //module.exports ={};
// // exports var a = 10; //export.varname = 10;

// import React from 'react'; //require react = require('react');
// import ReactDOM from 'react-dom';

// // //* react renderer
// // ReactDOM.render(
// //     //1st param wat to render
// //     //the element to be created is html element
// //     React.createElement(
// //         'div', //1st actual html element to be created 
// //         'null', // {id:'test'} //2nd id, class, properties, props 
// //         'This div is created using react', //3rd

// //         React.createElement('input'),
// //         React.createElement('p', null, new Date().toLocaleDateString())
// //     ),
// //     //where to render
// //     document.getElementById('react')
// // )
// // // let test = (a, b) => {

// // // };

// // //! normal renderer
// // const renderer = () => {
// //     document.getElementById('normal').innerHTML =
// //         `<p> this is list <input> </input></p> <p> ${new Date().toLocaleTimeString()} </P>`;

// // }
// // setInterval(renderer, 1000);


// //! jsx render // better
// // button h1 div
// // const lecture = 'of react jsx';

// // const element = <h1> This is testing {
// //     lecture
// // } </h1>;
// // ReactDOM.render(element, document.getElementById("jsx"));

// // component creation
// // two types - function based and class based
// //function so that it can be reused

// /*
// ? components of reacts
// * props
// * state
// */

// /* lifecycle
// 1. mount
// 2. update
// 3. unmount
// */

// //* props 
// /*
// ?function Button(props) {
// ?   return <button type = "submit" > {
// ?        props.label
// ?    } </button> 
// ?    // this is jsx
// }
// */

// //*  state props base class
// class H1 extends React.Component {
//     constructor() {
//         super() // initialize parent class of constructor ie: react components
//         this.state = {
//             testVar: 10,
//             varTest: "this is test",
//             label: "Save"
//         }
//     }
//     // TODO: own logic 
//     componentWillMount() { // Before components mounts/render

//     }
//     componentDidMount() { // after components mounts/render
//         this.setState({
//             label: 'Cancel'
//         });
//     }
//     shouldComponentUpdate(nextProps, nextState) { //whether the componenets should be updated
//         // return boolean value, default is true
//         console.log(this.state);
//         console.log(nextState);
//         return this.state.label !== nextState.label;
//         // return true;
//     }
//     componentWillUpdate(nextProps, nextState) {
//         // just before component updates
//         console.log(nextProps);
//         console.log(nextState);
//     }
//     componentDidUpdate() {
//         // after component udpates

//     }
//     componentWillUnmount() {
//         // before a component is unmounted 

//     }
//     render() {
//         return <h1 > {
//             this.state.label
//         } </h1>
//     }
// }

// //event handing
// class Button extends React.Component {
//     constructor() {
//         super() // initialize parent class of constructor ie: react components
//         //this.submitEventHandler = this.submitEventHandler.bind(this) // bind this to submit event handler of parent
//         this.state = {
//             label: 'event button'
//         }
//     }
//     // TODO: own logic 
//     // submitEventHandler() { // for binding

//     // }
//     // class -properties plugin es6,7
//     // plugin-proposal-class-propoerties  // babel plugin
//     submitEventHandler = (event) => {
//         // TODO events
//         // event.preventDefault();

//     }
//     render() {
//         return <button> {this.state.label} </button>
//     }
// }



// //? this also works, but cannot be reused vvvv
// // ReactDOM.render(<button type = "submit"></button>,document.getElementById("jsx"));
// //! Button function is called and button is actually component here

// // this is  to save
// // ReactDOM.render( <Button label = "save"/> , document.getElementById("jsx"));

// // this is to cancel
// // ReactDOM.render( <Button label = "cancel"/> , document.getElementById("jsxx"));

// //render state test
// ReactDOM.render( <H1 label = "save"/> , document.getElementById("state"));

// ReactDOM.render( <Button onClick = {this.submitEventHandler} /> , document.getElementById("event"));


// //Forms


// class LoginForm extends React.Component {
//     constructor() {

//         super()

//         this.state = {
//             username: '',
//             validationMessage: ''
//         }

//         // this.handleChange = this.handleChange.bind(this)
//     }

//     // handleChange(){

//     // }

//     handleChange = (e) => {
//         console.log(this.state.username)
//         console.log(e.target.value); // acutal value from the input box, input box is the event's target 
//         this.setState({ username: e.target.value })

//         if (e.target.value.length < 10) {
//             this.setState({ validationMessage: 'Username must be greater than 10' })

//         } else {
//             this.setState({ validationMessage: 'This si okay' })

//         }


//     }

//     handleSubmit = (e) => {
//         //this.state.suername 
//         e.preventDefault();

//     }

//     render() {

//         return (

//             <form onSubmit={this.handleSubmit}>
//                 <label>
//                 Username:
//                 <input name="username" value={this.state.username} onChange={this.handleChange}   />
//                 </label>
//                 <p>{this.state.validationMessage}</p>
//                 < input type="submit" value="submit" />
//             </form>

//         )

//     }




// }

// ReactDOM.render( < LoginForm / > , document.getElementById('login'))



// class Select extends React.Component {

//     constructor() {

//         super()
//         this.state = {
//             selectedValue: 'jquery'
//         }
//     }

// changeHandler = (event) =>{
//     console.log(event.target.value)
//     this.setState({selectedValue:event.target.value})
// }
// submitHandler = (event) =>{
// event.preventDefault()
// }

//     render() {
//         return (
//             <form onSubmit={this.submitHandler}>
//             <label>
//             Please select your preferred frontend technology:
//                 <select value={this.state.selectedValue} onChange={this.changeHandler} >
//                     <option value="react">react</option>
//                     <option value="angular">angular</option>
//                     <option value="vue">vue</option>
//                     <option value="jquery">jquery</option>


//                 </select>
//             </label>    
//            </form>     

//         )

//     }

// }

// ReactDOM.render(<Select />, document.getElementById('select'))



// UI restart from beginning


import React from 'react'
import ReactDOM from 'react-dom'
import {
    BrowserRouter as Router,
    Switch,
    Link, // ahref equiv
    Route // to catch the cliked route

} from 'react-router-dom'
import Login from './components/Login/Login' // folder then filename
import Registration from './components/Registration/Registration'

class Index extends React.Component {

    constructor() {

        super()
    }

    Footer = () => {
        return (
            <Row>
                <Col sm={4}>
                     About Hotel
                     Location:
                     Phone:
   
                     </Col>
                     <Col sm={4}>
                     Copyright
                     </Col>
                     <Col sm={4}>
                     Map
                </Col>
           </Row>
    )
}

    // routing navigation reactnavigation 
    // we will use react-router-dom
    // react react native 
    // user login registration and  user list  withdelete button edit button
    render() {
        return (
          <Container>
  <Row style={{marginBottom:'30px'}}>
    <Col sm={8}>
<Card>
  <Card.Body>
    <Card.Title>Hello</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">My assignmnet</Card.Subtitle>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Card.Link href="#">Learn More </Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>
</Card>
    </Col>
    <Col sm={4}>
        <h2>Welcome </h2>
    </Col>
  </Row> 
            <div> {/* for wrapping jsx components or use Fragment <> </> */}
                
                <Router>
                <Row>
                <div>

          <Nav  variant="pills" >
                <Nav.Item>
                  <Nav.Link as={Link} to="/" active={true} >Home</Nav.Link> {/*as to use custom component */}
                </Nav.Item>
                  <Nav.Item>
                  <Nav.Link as={Link} to="/regsitration">Regsitration</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link as={Link} to="/login">Login</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link as={Link} to="/logout">Logout</Nav.Link>
                </Nav.Item>
          </Nav>
                </div>
                </Row>
                <Switch>

         {/*      <Route path="/">
                  < Home/>
                </Route>*/}
                  <Route exact path="/login">
                  < Login/>
                  </Route>
    {/*              <Route component={} />*/}
       {/*            OR
                  <Route exact path="/login" component={Login} />*/}
                </Switch>
                </Router>
                </div>
                  < this.Footer/>
                </Container>
        )
    }
}

ReactDOM.render(<Index />, document.getElementById('root'))



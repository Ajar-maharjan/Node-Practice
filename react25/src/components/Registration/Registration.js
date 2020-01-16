import React from 'react'
import {
    Form,
    Button
} from 'react-bootstrap'
class Regsitration extends React.Component {

    constructor() {
        super()

        this.state = {

            username: '',
            password: ''


        }
    }

    usernameChangeHandler = (event) => {

        this.setState({
            usename: event.target.value
        })


    }

    passwordChangeHandler = (event) => {

        his.setState({
            password: event.target.value
        })

    }

    fromSubmitHnadler = (e) => {
        e.preventDefault()


        // use API call to post the data 
        //fetch byt default JS
        // Axios external package


        console.log(this.state)
    }

    render() {

        return(

            <Form onSubmit={fromSubmitHnadler}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Username </Form.Label>
                <Form.Control type="text" placeholder="Enter username" value={this.state.username} onChange={usernameChangeHandler} />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
                </Form.Group>
            
                <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Enter password" value={this.state.password} onChange={passwordChangeHandler} />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
                </Form.Group>
            
            
                <Button variant="primary" type="submit">
                Submit
                </Button>
            </Form>)
    }

}

export default Regsitration
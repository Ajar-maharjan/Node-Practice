import React from 'react'
import Button from '../Button/Button'
class Login extends React.Component {

    constructor() {

        super()
    }

    render() {
        return ( 
            <div>
            <form>
            <label>
            Username:
            <input type = "text"/>
            </label> 
            <label>
            Password:
            </label> 
            <input type = "password" /> {
                /*<input type="submit" />*/ } 
            <Button label = "Save" />
            </form> 
            </div>
        )

    }


}

export default Login
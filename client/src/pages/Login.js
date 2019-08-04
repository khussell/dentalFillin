import React from "react"
import { Link } from "react-router-dom";
import API from '../utils/API'

class Login extends React.Component {
    state = {
        userName: '',
        password: ''
    }

submit = (event) => {
    event.preventDefault()

    let userName= document.getElementById('usernameInput').value
    let password= document.getElementById('passwordInput').value
    let userInput = {
        userName: userName,
        password: password
    }
    
    API.loginInput(userInput).then(res => {
        this.props.history.push("/dashboard")
        if(res.status === 200){
        
        }
    }).catch(error =>{
        alert("Email or password not valid")
        console.log(error)
    })
}

    render() {
        return (
            <div>
                <h1>Login</h1>
                <form>
                    <div className="form-group">
                        <label htmlFor="usernameInput">Username</label>
                        <input type="text" className="form-control" id="usernameInput" aria-describedby="emailHelp" placeholder="Enter Username" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="passwordInput">Password</label>
                        <input type="password" className="form-control" id="passwordInput" placeholder="Password" />
                    </div>
                    <button  className="btn btn-primary" onClick={this.submit}>Login</button>
                </form>

                <Link to={"/signup"}>
                    <button className="btn btn-primary">Sign Up</button>
                </Link>
                <div>
                   {this.props.results.map(user =>{
                       return(
                           <div key={user._id}>
                       <h1>{user._id}</h1>
                       <p>{user.firstName}</p>
                       <p>{user.sub}</p>
                       </div>
                       )
                   })}
                </div>
            </div>

        )
    }
}

export default Login
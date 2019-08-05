import React from "react"
import { Link, Redirect } from "react-router-dom";
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
        console.log(res.data)
        if(res.data){
            const isAuthenticated = true
            window.localStorage.setItem('isAuthenticated', isAuthenticated)
            window.localStorage.setItem('userName', res.data.userName)
        }
        //const isAuthenticated = res.data.isAuthenticated
        
        this.props.history.push("/dashboard", userInput)
        
    }).catch(error =>{
        alert("Email or password not valid")
        console.log(error)
    })
}

    render() {

        const isAuthenticated = window.localStorage.getItem('isAuthenticated')
        if(isAuthenticated === true){
         return <Redirect to='/dashboard'/>
        }  
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
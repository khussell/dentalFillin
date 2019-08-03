import React from "react"
import { Link } from "react-router-dom";

class Login extends React.Component {
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
                    <button type="submit" className="btn btn-primary">Submit</button>
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
                       </div>
                       )
                   })}
                </div>
            </div>

        )
    }
}

export default Login
import React from "react"
import {Link} from "react-router-dom"

class SignUp extends React.Component {
    render() {
        return (
            <div>
                <h1>Sign Up!</h1>
                <form>
                    <div class="form-group">
                        <label for="exampleInputEmail1">First Name</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter first name" />
                    </div>

                    <div class="form-group">
                        <label for="exampleInputEmail1">Last Name</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter last name" />
                    </div>

                    <div class="form-group">
                        <label for="exampleInputEmail1">Username</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter a username" />
                    </div>

                    <div class="form-group">
                        <label for="exampleInputEmail1">Password</label>
                        <input type="password" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter a password" />
                    </div>

                    <div class="form-group">
                        <label for="exampleInputEmail1">Password Check</label>
                        <input type="password" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter password" />
                    </div>

                    <div class="form-group">
                        <label for="exampleFormControlSelect1">Are you a sub or an office?</label>
                        <select class="form-control" id="subOrOffice">
                            <option>Pick one</option>
                            <option>I am a sub</option>
                            <option>I am an office</option>
                        </select>
                    </div>
                    <Link to={let which= document.getElementById("subOrOffice")>
                    <button className="btn btn-primary">Enter</button>
                    </Link>
                </form>
            </div>
        )
    }
}

export default SignUp
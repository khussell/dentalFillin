import React from "react"
import { Route, Link } from "react-router-dom"
import SubSignUp from "../components/SubSignUp"
import OfficeSignUp from "../components/OfficeSignUp"

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
                        <Link to={`${this.props.match.url}/sub`} role="button" className="btn btn-link">
                            I am a sub
                        </Link>{" "}
                        <Link to={`${this.props.match.url}/office`} role="button" className="btn btn-link">
                            I am an office
                        </Link>
                        <Route exact path={`${this.props.match.url}/sub`} component={SubSignUp} />
                        <Route exact path={`${this.props.match.url}/office`} component={OfficeSignUp} />
                    </div>




                </form>
            </div >
        )
    }
}

export default SignUp
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
                    <div className="form-group">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" 
                               className="form-control" 
                               id="firstName" 
                               aria-describedby="emailHelp" 
                               placeholder="Enter first name"
                               onChange={this.props.handleInputChange}
                               name="firstName" />
                    </div>

                    <div className="form-group">
                        <label for="lastName">Last Name</label>
                        <input type="text" 
                               className="form-control"
                               id="lastName" 
                               aria-describedby="emailHelp" 
                               placeholder="Enter last name"
                               onChange={this.props.handleInputChange}
                               name="lasttName" />
                    </div>

                    <div className="form-group">
                        <label for="userName">Username</label>
                        <input type="text" 
                               className="form-control" 
                               id="userName" 
                               aria-describedby="emailHelp"
                               placeholder="Enter a username" 
                               onChange={this.props.handleInputChange}
                               name="userName"/>
                    </div>

                    <div className="form-group">
                        <label for="password1">Password</label>
                        <input type="password" 
                               className="form-control" 
                               id="password1" 
                               aria-describedby="emailHelp" 
                               placeholder="Enter a password"
                               onChange={this.props.handleInputChange}
                               name="password1" />
                    </div>

                    <div className="form-group">
                        <label for="password2">Password Check</label>
                        <input type="password" 
                               className="form-control" 
                               id="password2" 
                               aria-describedby="emailHelp" 
                               placeholder="Enter password"
                               onChange={this.props.handleInputChange}
                               name="password2" />
                    </div>

                    <div className="form-group">
                        <label>Are you a sub or an office?</label>
                        <Link to={`${this.props.match.url}/sub`} role="button" id="subClick" onClick={this.props.subOrOffice} className="btn btn-link">
                            I am a sub
                        </Link>{" "}
                        <Link to={`${this.props.match.url}/office`} role="button" id="officeClick" onClick={this.props.subOrOffice} className="btn btn-link">
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
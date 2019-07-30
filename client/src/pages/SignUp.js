import React from "react"
import { Route, Link } from "react-router-dom"
import SubSignUp from "../components/SubSignUp"
import OfficeSignUp from "../components/OfficeSignUp"

function SignUp(props) {
    
    
        return (
            <div>
                {console.log(props.firstName)}
                <h1>Sign Up!</h1>
                <form>
                    <div className="form-group">
                        <label htmlFor="firstName">{props.firstName}</label>
                        <input type="text" 
                               className="form-control" 
                               id="firstName" 
                               aria-describedby="emailHelp" 
                               placeholder="Enter first name"
                               onChange={props.handleInputChange}
                               name="firstName" 
                               value={props.firstName}/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" 
                               className="form-control"
                               id="lastName" 
                               aria-describedby="emailHelp" 
                               placeholder="Enter last name"
                               onChange={props.handleInputChange}
                               name="lasttName" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="userName">Username</label>
                        <input type="text" 
                               className="form-control" 
                               id="userName" 
                               aria-describedby="emailHelp"
                               placeholder="Enter a username" 
                               onChange={props.handleInputChange}
                               name="userName"/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="password1">Password</label>
                        <input type="password" 
                               className="form-control" 
                               id="password1" 
                               aria-describedby="emailHelp" 
                               placeholder="Enter a password"
                               onChange={props.handleInputChange}
                               name="password1" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password2">Password Check</label>
                        <input type="password" 
                               className="form-control" 
                               id="password2" 
                               aria-describedby="emailHelp" 
                               placeholder="Enter password"
                               onChange={props.handleInputChange}
                               name="password2" />
                    </div>

                    <div className="form-group">
                        <label>Are you a sub or an office?</label>
                        <Link to={`${props.match.url}/sub`} role="button" id="subClick" className="btn btn-link">
                            I am a sub
                        </Link>{" "}
                        <Link to={`${props.match.url}/office`} role="button" id="officeClick" className="btn btn-link">
                            I am an office
                        </Link>
                        <Route exact path={`${props.match.url}/sub`} component={SubSignUp} />
                        <Route exact path={`${props.match.url}/office`} component={OfficeSignUp} />
                    </div>




                </form>
            </div >
        )
    
}

export default SignUp
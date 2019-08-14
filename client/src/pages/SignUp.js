import React from "react"
import { Route, Redirect, Link } from "react-router-dom"
import SubSignUp from "../components/SubSignUp"
import OfficeSignUp from "../components/OfficeSignUp"

class SignUp extends React.Component {



    render() {
        
       
        
        return (
            <div>
                <h1>Sign Up!</h1>
                <div className="form-group">
                    <label>Are you a sub or an office?</label>
                    <Link to={`${this.props.match.url}/sub`} role="button" id="subClick" className="btn btn-link">
                        I am a sub
                        </Link>{" "}
                    <Link to={`${this.props.match.url}/office`} role="button" id="officeClick" className="btn btn-link">
                        I am an office
                        </Link>
                    <Route exact path={`${this.props.match.url}/sub`} render={() => <SubSignUp {...this.props} />} />
                    <Route exact path={`${this.props.match.url}/office`} render={() => <OfficeSignUp {...this.props} />} />
                </div>


            </div >
        )
        
    }
}

export default SignUp
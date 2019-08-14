import React from "react"
import { Route,  Link } from "react-router-dom"
import SubSignUp from "../components/SubSignUp"
import OfficeSignUp from "../components/OfficeSignUp"
import '../css/signUp.css'

class SignUp extends React.Component {



    render() {
        
       
        
        return (
            <div className="container">
                <div className="row">
                <h1 id="signUpTitle" className="col text-center">Sign Up!</h1>
                </div>
                <div className="form-group">
                    <div id="subOrOffice" className="col text-center">
                    <label>Which are you?</label>
                    </div>
                    <div className="col text-center">
                    <Link to={`${this.props.match.url}/sub`} role="button" id="subClick" className="btn btn-primary">
                        I am a sub
                        </Link>{" "}
                    <Link to={`${this.props.match.url}/office`} role="button" id="officeClick" className="btn btn-primary">
                        I am an office
                        </Link>
                        </div>
                    <Route exact path={`${this.props.match.url}/sub`} render={() => <SubSignUp {...this.props} />} />
                    <Route exact path={`${this.props.match.url}/office`} render={() => <OfficeSignUp {...this.props} />} />
                </div>


            </div >
        )
        
    }
}

export default SignUp
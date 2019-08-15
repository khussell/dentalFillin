import React from "react"
import {Redirect} from "react-router-dom"
import Flatpickr from "./Calendar"
import '../css/subAndOfficeSignIn.css'

class OfficeSignUp extends React.Component{
    render(){
        console.log(this.props.toLogin)

        if(this.props.toLogin === true){
            return(
                <Redirect to="/login" />
            )
        }
        return(
            <div className="signIns row">
                <h1 className="col-sm-12 text-center officeSignInTitle">Office Sign Up</h1>
                <form className="col officeSignIn">
                <div className="form-group">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" 
                               className="form-control" 
                               id="firstName" 
                               aria-describedby="emailHelp" 
                               placeholder="Enter first name"
                               onChange={this.props.handleInputChange}
                               name="firstName" 
                               value={this.props.userInfo.firstName}/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" 
                               className="form-control"
                               id="lastName" 
                               aria-describedby="emailHelp" 
                               placeholder="Enter last name"
                               onChange={this.props.handleInputChange}
                               name="lastName"
                               value={this.props.userInfo.lastName} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="userName">Username</label>
                        <input type="text" 
                               className="form-control" 
                               id="userName" 
                               aria-describedby="emailHelp"
                               placeholder="Enter a username" 
                               onChange={this.props.handleInputChange}
                               name="userName"
                               value={this.props.userInfo.userName}/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="password1">Password</label>
                        <input type="password" 
                               className="form-control" 
                               id="password1" 
                               aria-describedby="emailHelp" 
                               placeholder="Enter a password"
                               onChange={this.props.handleInputChange}
                               name="password"
                               value={this.props.userInfo.password} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password2">Password Check</label>
                        <input type="password" 
                               className="form-control" 
                               id="password2" 
                               aria-describedby="emailHelp" 
                               placeholder="Enter password"
                               onChange={this.props.handleInputChange}
                               name="password2" />
                    </div>
                
                    <div className="form-group">
                        <label htmlFor="photoLink">Link to photo</label>
                        <input type="text" 
                               className="form-control" 
                               id="photoLink" 
                               onChange={this.props.handleInputChange}
                               name="photo"
                               value={this.props.userInfo.photo}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="location">Zip code</label>
                        <input type="text" 
                               className="form-control"
                               id="location" 
                               onChange={this.props.handleInputChange}
                               name="location"
                               value={this.props.userInfo.location}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="officeName">Office Name</label>
                        <input type="text" 
                               className="form-control" 
                               id="officeName"
                               onChange={this.props.handleInputChange}
                               name="officeName"
                               value={this.props.userInfo.officeName} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="about">About your office</label>
                        <textarea className="form-control" 
                                  id="about" 
                                  rows="3"
                                  onChange={this.props.handleInputChange}
                                  name="about"
                                  value={this.props.userInfo.about}></textarea>
                    </div>

                    <div className="officeDatesNeeded">
                    <label>What dates do you need a sub?</label>
                    <Flatpickr {...this.props} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="whatKindOfHygienist">Describe your ideal sub?</label>
                        <textarea className="form-control" 
                                  id="whatKindOfHygienist" 
                                  rows="3"
                                  onChange={this.props.handleInputChange}
                                  name="whatKindOfHygienist"
                                  value={this.props.userInfo.whatKindOfHygienist}></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="doctorsNames">Doctor's Name</label>
                        <input type="text" 
                               className="form-control" 
                               id="doctorsNames" 
                               onChange={this.props.handleInputChange}
                               name="doctorsNames"
                               value={this.props.userInfo.doctorsNames}/>
                    </div>
                    
                    <button id="officeSignButton" className="btn btn-primary signUpButtons col-sm-4 text-center" onClick={this.props.signUpSubmit}>Sign up and go to login</button>
                    </form>
            </div>
        )
    }
}

export default OfficeSignUp
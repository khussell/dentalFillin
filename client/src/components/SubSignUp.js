import React from "react"
import {Redirect} from "react-router-dom"
import Flatpickr from './Calendar'

class SubSignUp extends React.Component {
    
    render() {
        if(this.props.toLogin === true){
            console.log('hey')
            return(
                <Redirect to='/login'/>
              )
        }
        return (
            <div>
                <h1>sub</h1>
                 <form>
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
                               value={this.props.userInfo.photo} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="location">Location</label>
                        <input type="text" 
                               className="form-control" 
                               id="location" 
                               onChange={this.props.handleInputChange}
                               name="location"
                               value={this.props.userInfo.location}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="yearsExperience">Years Experience</label>
                        <input type="number" 
                               className="form-control" 
                               id="yearsExperience"
                               onChange={this.props.handleInputChange}
                               name="yearsExp"
                               value={this.props.userInfo.yearsExp} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="about">About</label>
                        <textarea className="form-control" 
                                  id="about" 
                                  rows="3"
                                  onChange={this.props.handleInputChange}
                                  name="about"
                                  value={this.props.userInfo.about}></textarea>
                    </div>

                    <p>Licensed in the State of Florida?</p>
                    <div className="form-check">
                        <input className="form-check-input" 
                               type="radio" 
                               
                               id="licenseYes" 
                               value="true"
                               checked={this.props.userInfo.sub === "true"}
                               onChange={this.props.handleLicenseRadioChange}
                               />
                        <label className="form-check-label" htmlFor="nitrousYes">
                            Yes
                    </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" 
                               type="radio" 
                               
                               id="licenseNo" 
                               value="false"
                               checked={this.props.userInfo.sub === "false"}
                               onChange={this.props.handleLicenseRadioChange}
                              />
                        <label className="form-check-label" htmlFor="nitrousNo">
                            No
                        </label>
                    </div>


                    <p>Nitrous Certified?</p>
                    <div className="form-check">
                        <input className="form-check-input" 
                               type="radio" 
                               
                               id="nitrousYes" 
                               value="true" 
                               checked={this.props.userInfo.nitrous === "true"}
                               onChange={this.props.handleNitrousRadioChange}
                               />
                        <label className="form-check-label" htmlFor="nitrousYes">
                            Yes
                    </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" 
                               type="radio" 
                               
                               id="nitrousNo" 
                               value="false"
                               checked={this.props.userInfo.nitrous === "false"}
                               onChange={this.props.handleNitrousRadioChange}
                              />
                        <label className="form-check-label" htmlFor="nitrousNo">
                            No
                        </label>
                    </div>

                    <p>Anesthesia Certified?</p>
                    <div className="form-check">
                        <input className="form-check-input" 
                               type="radio" 
                               
                               id="anesthesiaYes" 
                               value="true" 
                               onChange={this.props.handleAnesthesiaRadioChange}
                               checked={this.props.userInfo.anesthesia === "true"}
                               />
                        <label className="form-check-label" htmlFor="anesthesiaYes">
                            Yes
                    </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" 
                               type="radio"
                               
                               id="anesthesiaNo"
                               value="false"
                               onChange={this.props.handleAnesthesiaRadioChange}
                               checked={this.props.userInfo.anesthesia === "false"}
                               />
                        <label className="form-check-label" htmlFor="anesthesiaNo">
                            No
                        </label>
                    </div>
                {/*<div className="form-group">
                        <label htmlFor="datesAvailable">Dates Available to Work: Example input:  1/7/2020, 1/8,2020</label>
                        <input type="text" 
                               className="form-control" 
                               id="datesAvailable"
                               onChange={this.props.handleInputChange}
                               name="avail"
                               value={this.props.userInfo.avail} />
                    </div>
        */}
                    <div>
                    <label>What dates are you available to work?</label>
                    <Flatpickr {...this.props} />
                    </div>

                    <button className="btn btn-primary" onClick={this.props.signUpSubmit}>Sign up and go to login</button>
                  </form>  

             
            </div>
        )
    }
}

export default SubSignUp
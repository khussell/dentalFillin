import React from "react"
import {Link} from "react-router-dom"

class SubSignUp extends React.Component {
    render() {
        return (
            <div>
                <h1>sub</h1>
               
                    <div className="form-group">
                        <label htmlFor="photoLink">Link to photo</label>
                        <input type="text" 
                               className="form-control" 
                               id="photoLink"
                               onChange={this.props.handleInputChange}
                               name="photoLink"
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
                               name="yearsExperience"
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

                    <p>Nitrous Certified?</p>
                    <div className="form-check">
                        <input className="form-check-input" 
                               type="radio" 
                               
                               id="nitrousYes" 
                               value={true} 
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
                               value={false}
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
                    <div className="form-group">
                        <label htmlFor="datesAvailable">Dates Available to Work: Example input:  1/7/2020, 1/8,2020</label>
                        <input type="text" 
                               className="form-control" 
                               id="datesAvailable"
                               onChange={this.props.handleInputChange}
                               name="avail"
                               value={this.props.userInfo.avail} />
                    </div>
                    <Link to="/login" className="btn btn-primary" onClick={this.props.signUpSubmit}>Sign up and go to login</Link>
                    

             
            </div>
        )
    }
}

export default SubSignUp
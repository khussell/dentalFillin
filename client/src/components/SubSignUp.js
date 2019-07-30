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
                               name="photoLink" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="location">Location</label>
                        <input type="text" 
                               className="form-control" 
                               id="location" 
                               onChange={this.props.handleInputChange}
                               name="location"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="yearsExperience">Years Experience</label>
                        <input type="number" 
                               className="form-control" 
                               id="yearsExperience"
                               onChange={this.props.handleInputChange}
                               name="yearsExperience" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="about">About</label>
                        <textarea className="form-control" 
                                  id="about" 
                                  rows="3"
                                  onChange={this.props.handleInputChange}
                                  name="about"></textarea>
                    </div>

                    <p>Nitrous Certified?</p>
                    <div className="form-check">
                        <input className="form-check-input" 
                               type="radio" 
                               name="nitrous"
                               id="nitrousYes" 
                               value="true" 
                               onChange={this.props.handleInputChange}
                               />
                        <label className="form-check-label" htmlFor="nitrousYes">
                            Yes
                    </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" 
                               type="radio" 
                               name="nitrous" 
                               id="nitrousNo" 
                               value="false"
                               onChange={this.props.handleInputChange}
                              />
                        <label className="form-check-label" htmlFor="nitrousNo">
                            No
                        </label>
                    </div>

                    <p>Anesthesia Certified?</p>
                    <div className="form-check">
                        <input className="form-check-input" 
                               type="radio" 
                               name="anesthesia" 
                               id="anesthesiaYes" 
                               value="true" 
                               onChange={this.props.handleInputChange}
                               />
                        <label className="form-check-label" htmlFor="anesthesiaYes">
                            Yes
                    </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" 
                               type="radio"
                               name="anesthesia" 
                               id="anesthesiaNo"
                               value="false"
                               onChange={this.props.handleInputChange}
                               />
                        <label className="form-check-label" htmlFor="anesthesiaNo">
                            No
                        </label>
                    </div>
                    <div className="form-group">
                        <label htmlFor="datesAvailable">Dates Available to Work: Example input:  1/7/2020, 1/8,2020</label>
                        <input type="text" className="form-control" id="datesAvailable" />
                    </div>
                    <Link to="/login" className="btn btn-primary">Sign up and go to login</Link>
                    

             
            </div>
        )
    }
}

export default SubSignUp
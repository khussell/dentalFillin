import React from "react"
import {Link} from "react-router-dom"

class OfficeSignUp extends React.Component{
    render(){
        return(
            <div>
                <h1>office</h1>
                
                    <div className="form-group">
                        <label htmlFor="photoLink">Link to photo</label>
                        <input type="text" 
                               className="form-control" 
                               id="photoLink" 
                               onChange={this.props.handleInputChange}
                               name="photoLink"/>
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
                        <label htmlFor="officeName">Office Name</label>
                        <input type="text" 
                               className="form-control" 
                               id="officeName"
                               onChange={this.props.handleInputChange}
                               name="officeName" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="about">About</label>
                        <textarea className="form-control" 
                                  id="about" 
                                  rows="3"
                                  onChange={this.props.handleInputChange}
                                  name="about"></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="datesNeeded">Dates Needed: Example input:  1/7/2020, 1/8,2020</label>
                        <input type="text" 
                               className="form-control" 
                               id="datesNeeded" 
                               onChange={this.props.handleInputChange}
                               name="datesNeeded"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="whatKindOfHygienist">What kind of hygienist?</label>
                        <textarea className="form-control" 
                                  id="whatKindOfHygienist" 
                                  rows="3"
                                  onChange={this.props.handleInputChange}
                                  name="whatKindOfHygienist"></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="doctorsNames">Doctors' Names: Example input:  Dr. Smith, Dr. Lin</label>
                        <input type="text" 
                               className="form-control" 
                               id="doctorsNames" 
                               onChange={this.props.handleInputChange}
                               name="doctorsNames"/>
                    </div>
                    
                    <Link to="/login" className="btn btn-primary">Sign up and go to login</Link>
                
            </div>
        )
    }
}

export default OfficeSignUp
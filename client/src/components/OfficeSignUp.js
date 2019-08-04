import React from "react"
import {Link} from "react-router-dom"

class OfficeSignUp extends React.Component{
    render(){
        return(
            <div>
                <h1>office</h1>
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
                               value={this.props.userInfo.photo}/>
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
                        <label htmlFor="officeName">Office Name</label>
                        <input type="text" 
                               className="form-control" 
                               id="officeName"
                               onChange={this.props.handleInputChange}
                               name="officeName"
                               value={this.props.userInfo.officeName} />
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
                    <div className="form-group">
                        <label htmlFor="datesNeeded">Dates Needed: Example input:  1/7/2020, 1/8,2020</label>
                        <input type="text" 
                               className="form-control" 
                               id="datesNeeded" 
                               onChange={this.props.handleInputChange}
                               name="datesNeeded"
                               value={this.props.userInfo.datesNeeded}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="whatKindOfHygienist">What kind of hygienist?</label>
                        <textarea className="form-control" 
                                  id="whatKindOfHygienist" 
                                  rows="3"
                                  onChange={this.props.handleInputChange}
                                  name="whatKindOfHygienist"
                                  value={this.props.userInfo.whatKindOfHygienist}></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="doctorsNames">Doctors' Names: Example input:  Dr. Smith, Dr. Lin</label>
                        <input type="text" 
                               className="form-control" 
                               id="doctorsNames" 
                               onChange={this.props.handleInputChange}
                               name="doctorsNames"
                               value={this.props.userInfo.doctorsNames}/>
                    </div>
                    
                    <Link to="/login" className="btn btn-primary" onClick={this.props.signUpSubmit}>Sign up and go to login</Link>
                    </form>
            </div>
        )
    }
}

export default OfficeSignUp
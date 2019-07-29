import React from "react"

class OfficeSignUp extends React.Component{
    render(){
        return(
            <div>
                <h1>office</h1>
                
                    <div className="form-group">
                        <label for="photoLink">Link to photo</label>
                        <input type="text" className="form-control" id="photoLink" />
                    </div>
                    <div className="form-group">
                        <label for="location">Location</label>
                        <input type="text" className="form-control" id="location" />
                    </div>
                    <div className="form-group">
                        <label for="officeName">Office Name</label>
                        <input type="text" className="form-control" id="officeName" />
                    </div>
                    <div className="form-group">
                        <label for="about">About</label>
                        <textarea className="form-control" id="about" rows="3"></textarea>
                    </div>
                    <div className="form-group">
                        <label for="datesNeeded">Dates Needed: Example input:  1/7/2020, 1/8,2020</label>
                        <input type="text" className="form-control" id="datesNeeded" />
                    </div>
                    <div className="form-group">
                        <label for="whatKindOfHygienist">What kind of hygienist?</label>
                        <textarea className="form-control" id="whatKindOfHygienist" rows="3"></textarea>
                    </div>
                    <div className="form-group">
                        <label for="doctorsNames">Doctors' Names: Example input:  Dr. Smith, Dr. Lin</label>
                        <input type="text" className="form-control" id="doctorsNames" />
                    </div>
                    

                
            </div>
        )
    }
}

export default OfficeSignUp
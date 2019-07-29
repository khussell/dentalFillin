import React from "react"

class SubSignUp extends React.Component {
    render() {
        return (
            <div>
                <h1>sub</h1>
               
                    <div className="form-group">
                        <label for="photoLink">Link to photo</label>
                        <input type="text" className="form-control" id="photoLink" />
                    </div>
                    <div className="form-group">
                        <label for="location">Location</label>
                        <input type="text" className="form-control" id="location" />
                    </div>
                    <div className="form-group">
                        <label for="yearsExperience">Years Experience</label>
                        <input type="number" className="form-control" id="yearsExperience" />
                    </div>
                    <div className="form-group">
                        <label for="about">About</label>
                        <textarea className="form-control" id="about" rows="3"></textarea>
                    </div>

                    <p>Nitrous Certified?</p>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="nitrous" id="nitrousYes" value="option1" checked />
                        <label className="form-check-label" for="nitrousYes">
                            Yes
                    </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="nitrous" id="nitrousNo" value="option2" />
                        <label className="form-check-label" for="nitrousNo">
                            No
                        </label>
                    </div>

                    <p>Anesthesia Certified?</p>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="anesthesia" id="anesthesiaYes" value="option1" checked />
                        <label className="form-check-label" for="anesthesiaYes">
                            Yes
                    </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="anesthesia" id="anesthesiaNo" value="option2" />
                        <label className="form-check-label" for="anesthesiaNo">
                            No
                        </label>
                    </div>
                    <div className="form-group">
                        <label for="datesAvailable">Dates Available to Work: Example input:  1/7/2020, 1/8,2020</label>
                        <input type="text" className="form-control" id="datesAvailable" />
                    </div>
                    

             
            </div>
        )
    }
}

export default SubSignUp
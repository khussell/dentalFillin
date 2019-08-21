import React from 'react'
import Flatpickr from '../components/Calendar'
import API from '../utils/API'

class Edit extends React.Component {
    state= {
        photo: "",
        yearsExp: 0,
        about: "",
        nitrous: '',
        anesthesia: '',
        avail: [],
        datesNeeded: [],
        kindOfPerson: '',

    }


    handleInputChange = (event) => {
        const name = event.target.name
        const value = event.target.value
          this.setState({  [name]: value  })
        console.log(this.state)
      }

      handleDate = (date) => {
        const value = date
        if (window.localStorage.getItem('sub') === "true") {
          this.setState({
            avail: value 
          })
        }else{
          this.setState({
            datesNeeded: value 
          })
        }

        console.log(this.state)
      }



      edit = (event) => {
        event.preventDefault()
        console.log(this.state)
        console.log('here')
    
        API.updateUserInfo(window.localStorage.getItem('userName'),{
          
          photo: this.state.photo,
          yearsExp: this.state.yearsExp,
          about: this.state.about,
          anesthesia: this.state.anesthesia,
          nitrous: this.state.nitrous,
          avail: this.state.avail,
          datesNeeded: this.state.datesNeeded,
          kindOfPerson: this.state.kindOfPerson,
        
        }).then(res =>{ this.loadUsers()})
          .catch(err => console.log(err));  
         
      }



    render() {
        return (
            <div>
                <div className="allEditContent">
                    <h4>Edit Your Profile Content</h4>
                    <div>
                        {window.localStorage.getItem('sub') === 'true' ? (
                            <div>
                                <form className="col subSignIn">
                            

                                    <div className="form-group">
                                        <label htmlFor="photoLink">Link to photo</label>
                                        <input type="text"
                                            className="form-control"
                                            id="photoLink"
                                            onChange={this.handleInputChange}
                                            name="photo"
                                            value={this.state.photo} />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="yearsExperience">Years of Experience</label>
                                        <input type="number"
                                            className="form-control"
                                            id="yearsExperience"
                                            onChange={this.handleInputChange}
                                            name="yearsExp"
                                            value={this.state.yearsExp} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="about">About You</label>
                                        <textarea className="form-control"
                                            id="about"
                                            rows="3"
                                            onChange={this.handleInputChange}
                                            name="about"
                                            value={this.state.about}></textarea>
                                    </div>


                                    <p>Nitrous Certified?</p>
                                    <div className="form-check">
                                        <input className="form-check-input"
                                            type="radio"

                                            id="nitrousYes"
                                            value="true"
                                            checked={this.state.nitrous === "true"}
                                            onChange={this.handleNitrousRadioChange}
                                        />
                                        <label className="form-check-label" htmlFor="nitrousYes">
                                            Yes
                    </label>
                                    </div>
                                    <div className="form-check no">
                                        <input className="form-check-input "
                                            type="radio"

                                            id="nitrousNo"
                                            value="false"
                                            checked={this.state.nitrous === "false"}
                                            onChange={this.handleNitrousRadioChange}
                                        />
                                        <label className="form-check-label " htmlFor="nitrousNo">
                                            No
                        </label>
                                    </div>

                                    <p>Anesthesia Certified?</p>
                                    <div className="form-check">
                                        <input className="form-check-input"
                                            type="radio"

                                            id="anesthesiaYes"
                                            value="true"
                                            onChange={this.handleAnesthesiaRadioChange}
                                            checked={this.state.anesthesia === "true"}
                                        />
                                        <label className="form-check-label" htmlFor="anesthesiaYes">
                                            Yes
                    </label>
                                    </div>
                                    <div className="form-check no">
                                        <input className="form-check-input "
                                            type="radio"

                                            id="anesthesiaNo"
                                            value="false"
                                            onChange={this.handleAnesthesiaRadioChange}
                                            checked={this.state.anesthesia === "false"}
                                        />
                                        <label className="form-check-label" htmlFor="anesthesiaNo">
                                            No
                        </label>
                                    </div>

                                    <div>
                                        <label className="whatDates">What dates are you available to work?</label>
                                        <Flatpickr />
                                    </div>
                                    <button className="btn btn-primary signUpButtons col-sm-8 offset-sm-2 text-center" type="submit" onClick={this.edit}>Update</button>
                                   
                                </form>

                            </div>
                        ) : (

                <form className="col officeSignIn">
                
                
                    <div className="form-group">
                        <label htmlFor="photoLink">Link to photo</label>
                        <input type="text" 
                               className="form-control" 
                               id="photoLink" 
                               onChange={this.handleInputChange}
                               name="photo"
                               value={this.state.photo}/>
                    </div>
             
                  
                    <div className="form-group">
                        <label htmlFor="about">About your office</label>
                        <textarea className="form-control" 
                                  id="about" 
                                  rows="3"
                                  onChange={this.handleInputChange}
                                  name="about"
                                  value={this.state.about}></textarea>
                    </div>

                    <div className="officeDatesNeeded">
                    <label>What dates do you need a sub?</label>
                    <Flatpickr handleDate={this.handleDate}/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="kindOfPerson">Describe your ideal sub?</label>
                        <textarea className="form-control" 
                                  id="kindOfPerson" 
                                  rows="3"
                                  onChange={this.handleInputChange}
                                  name="kindOfPerson"
                                  value={this.state.kindOfPerson}></textarea>
                    </div>
                    
                    
                    <button className="btn btn-primary signUpButtons col-sm-8 offset-sm-2 text-center" type="submit" onClick={this.edit}>Update</button>
                    </form>
                        )}
                    </div>
                </div>
            </div>
        )
    }
}

export default Edit
import React from 'react'
import API from '../utils/API'
import EmailForm from '../components/EmailForm'
import Ratings from 'react-ratings-declarative'
import '../css/searchedUser.css'
import StaticCalendar from '../components/StaticCalendar'
import Map from '../components/Map'

class SearchedUser extends React.Component {
    state = {
        user: [],
        firstName: "",
        lastName: "",
        userName: "",
        password: "",
        sub: "",
        photo: "",
        location: "",
        yearsExp: 0,
        about: "",
        anesthesia: "",
        nitrous: "",
        avail: [],
        officeName: "",
        doctors: [],
        datesNeeded: "",
        kindOfPerson: "",
        starRating: [5],
        howManyTimesSubbed: 0,
        howManySubsHaveYouHad: 0,
        pastJobs: [],
        currentJobs: [],
        pastSubs: [],
        currentSubs: [],
        searchParams: [],
        invitations: [],
        rating: 0
    }
    componentDidMount = () => {
        console.log(this.props.history.location.pathname)
        console.log(`${this.props.match.url}`)
        

        API.findUser(this.props.history.location.pathname).then(res => {
            console.log(res.data)
            console.log(res.data[0].location)
            window.localStorage.setItem('searchedLocation', res.data[0].location)
            this.setState({
                firstName: res.data[0].firstName,
                lastName: res.data[0].lastName,
                userName: res.data[0].userName,
                password: res.data[0].password,
                sub: res.data[0].sub,
                photo: res.data[0].photo,
                location: res.data[0].location,
                yearsExp: res.data[0].yearsExp,
                about: res.data[0].about,
                anesthesia: res.data[0].anesthesia,
                nitrous: res.data[0].nitrous,
                avail: res.data[0].avail,
                officeName: res.data[0].officeName,
                doctors: res.data[0].doctors,
                datesNeeded: res.data[0].datesNeeded,
                kindOfPerson: res.data[0].kindOfPerson,
                starRating: res.data[0].starRating,
                howManyTimesSubbed: res.data[0].howManyTimesSubbed,
                howManySubsHaveYouHad: res.data[0].howManySubsHaveYouHad,
                pastJobs: res.data[0].pastJobs,
                currentJobs: res.data[0].currentJobs,
                pastSubs: res.data[0].pastSubs,
                currentSubs: res.data[0].currentSubs,
                searchParams: res.data[0].searchParams,
                invitations: res.data[0].invitations
            })

            let rates = this.state.starRating
            console.log(rates)
            let total = 0

            for (let i = 0; i < rates.length; i++) {
                total += rates[i]
            }
            let avg = total / rates.length

            this.setState({ rating: avg })
        })
    }

    invite = (event) => {
        event.preventDefault()
        let num1 = (Math.floor(Math.random() * 200)).toString()
        let num2 = (Math.floor(Math.random() * 200)).toString()
        let num3 = (Math.floor(Math.random() * 200)).toString()
        let id = "id" + num1 + num2 + num3


        let userBeingInvited = this.state.userName
        let inviteDate = document.getElementById('inviteDate').value
        let inviter = window.localStorage.getItem('officeName')
        let inviterUser = window.localStorage.getItem('userName')
        let info = {
            invitee: userBeingInvited,
            date: inviteDate,
            inviter: inviter,
            inviterUser: inviterUser,
            inviteeName: this.state.firstName,
            buttonClicked: false,
            id: id
        }

        console.log(info)
        API.inviteUser(info).then(res => {
            console.log(res.data)
        })

        API.putInviteIntoOffice(info).then(res => {
            console.log(res.data)
        })

        document.getElementById('inviteDate').innerHTML = ""
        alert('Invite Sent')
    }

    accepted = (invite) => {
        API.acceptedInvite(invite).then(res => {
            console.log(res.data)
        })
    }

    render() {
        console.log(this.state)
        console.log("invites: " + this.state.invitations)



        return (
            <div className='profileContent'>

              <div>
                {this.state.invitations.map(invite => {
                    if (invite.invitee === window.localStorage.getItem('userName') && invite.inviterUser === this.state.userName) {
                        return (
                            <div className='  invitation' key={invite.id}>
                                <p className="invitationTitle col text-center">They have invited you for:</p>
                                <p className="col text-center">{invite.date}</p>
                                <button className="acceptBtn btn btn-info" onClick={() => this.accepted(invite)}>Accept</button>
                            </div>
                        )
                    } else {
                        return (
                            <div></div>
                        )
                    }
                })}
                </div>


                {this.state.sub === 'true' ? (
                    <div>
                          <form className=" inviteMe">
                            <label className="col text-center">If you would like to invite me for work, please enter a date:</label>
                            <input className='col text-center inviteInput' id="inviteDate" type="text" />
                            <button className="col-sm-12 inviteMeBtn btn btn-info" onClick={this.invite}>Invite for work</button>
                        </form>
                        <div className='ratings col-sm-12'>
                        <Ratings

                            widgetDimensions="25px"
                            widgetSpacings="7px"
                            rating={this.state.rating}
                            widgetRatedColors="orange"
                        >
                            <Ratings.Widget />
                            <Ratings.Widget />
                            <Ratings.Widget />
                            <Ratings.Widget />
                            <Ratings.Widget />
                        </Ratings>
                        </div>
                        <div className="col-sm-12 text-center fullName">
                        <h3 >{this.state.firstName + " " + this.state.lastName}</h3>
                        </div>
                        <div className='row justify-content-center'>
                            <img className="profilePic" alt="Pic" src={this.state.photo}></img>
                        </div>

                        <div className='col-sm-12 text-center neededDatesTitle'>
                                <h6>My Availability:</h6>
                            </div>


                        <div className='col-sm-12 profileCalendar'>

                            <StaticCalendar />
                        </div>

                        <div className='col-sm-12 text-center infoGroup'>
                            <h4>{this.state.yearsExp + ' Years Experience'}</h4>
                            <p>{this.state.nitrous === 'true' ? "Nitrous &#x2713" : "Not nitrous certified"}</p>
                            <p>{this.state.anesthesia === 'true' ? "Anesthesia &#x2713" : "Not anesthesia certified"}</p>
                            <h4>About Me</h4>
                            <p>{this.state.about}</p>
                        </div>
                        <h4 className='col-sm-12 text-center'>Contact Me</h4>
                        <EmailForm />
                      

                    </div>) : (
                        <div>

                            <div className='ratings col-sm-12'>
                                <Ratings

                                    widgetDimensions="25px"
                                    widgetSpacings="7px"
                                    rating={this.state.rating}
                                    widgetRatedColors="orange"
                                >
                                    <Ratings.Widget />
                                    <Ratings.Widget />
                                    <Ratings.Widget />
                                    <Ratings.Widget />
                                    <Ratings.Widget />
                                </Ratings>
                            </div>
                            <div className='col-sm-12 text-center fullName'>
                                <h3>{this.state.officeName}</h3>
                            </div>
                            <div className='row justify-content-center'>
                                <img className="profilePic" alt="Pic" src={this.state.photo}></img>
                            </div>
                            <div className='col-sm-12 text-center neededDatesTitle'>
                                <h6>Our Needed Dates:</h6>
                            </div>
                            <div className='col-sm-12 profileCalendar'>
                                <StaticCalendar />
                            </div>
                            <div className='col-sm-12 text-center infoGroup'>
                                <h4>About our Office</h4>
                                <p>{this.state.about}</p>
                                <h4>We are looking for... </h4>
                                <p>{this.state.kindOfPerson}</p>
                            </div>
                            <div className='col-sm-12 text-center'><h4>Our Location</h4></div>
                            <div className="map">
                                {console.log(this.state.location)}
                                <Map location={window.localStorage.getItem('searchedLocation')} />
                            </div>


                            <h4 className='col text-center'>Contact Us</h4>
                            <EmailForm />
                            {this.state.sub === 'true'? (<form>
                                <label>If you would like to invite for work, please enter a date</label>
                                <input id="inviteDate" type="text" />
                                
                                <button onClick={this.invite}>Invite for work</button>
                            </form>) : (<div></div>)  }
                            

                        </div>)}
            </div>

        )
    }
}

export default SearchedUser
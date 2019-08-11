import React from 'react'
import API from '../utils/API'
import EmailForm from '../components/EmailForm'
import Ratings from 'react-ratings-declarative'

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
        starRating: 0,
        howManyTimesSubbed: 0,
        howManySubsHaveYouHad: 0,
        pastJobs: [],
        currentJobs: [],
        pastSubs: [],
        currentSubs: [],
        searchParams: [],
        invitations: []
    }
    componentDidMount = () => {
        console.log(this.props.history.location.pathname)
        console.log(`${this.props.match.url}`)
        API.findUser(this.props.history.location.pathname).then(res => {
            console.log(res.data)
            this.setState({
                firstName: res.data.firstName,
                lastName: res.data.lastName,
                userName: res.data.userName,
                password: res.data.password,
                sub: res.data.sub,
                photo: res.data.photo,
                location: res.data.location,
                yearsExp: res.data.yearsExp,
                about: res.data.about,
                anesthesia: res.data.anesthesia,
                nitrous: res.data.nitrous,
                avail: res.data.avail,
                officeName: res.data.officeName,
                doctors: res.data.doctors,
                datesNeeded: res.data.datesNeeded,
                kindOfPerson: res.data.kindOfPerson,
                starRating: res.data.starRating,
                howManyTimesSubbed: res.data.howManyTimesSubbed,
                howManySubsHaveYouHad: res.data.howManySubsHaveYouHad,
                pastJobs: res.data.pastJobs,
                currentJobs: res.data.currentJobs,
                pastSubs: res.data.pastSubs,
                currentSubs: res.data.currentSubs,
                searchParams: res.data.searchParams,
                invitations: res.data.invitations
            })
        })
    }

    invite = (event) => {
        event.preventDefault()
        let userBeingInvited = this.state.userName
        let inviteDate = document.getElementById('inviteDate').value
        let inviter = window.localStorage.getItem('officeName')
        let inviterUser = window.localStorage.getItem('userName')
        let info = {
            invitee: userBeingInvited,
            date: inviteDate,
            inviter: inviter,
            inviterUser: inviterUser,
            inviteeName: window.localStorage.firstName
        }

        console.log(info)
        API.inviteUser(info).then(res => {
            console.log(res.data)
        })

        API.putInviteIntoOffice(info).then(res => {
            console.log(res.data)
        })
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
            <div>
                <Ratings

                    widgetDimensions="40px"
                    widgetSpacings="15px"
                    rating={3}
                    widgetRatedColors="orange"
                >
                    <Ratings.Widget />
                    <Ratings.Widget />
                    <Ratings.Widget  />
                    <Ratings.Widget />
                    <Ratings.Widget />
                </Ratings>
                <h1>{this.state.userName}</h1>
                <h3>They have invited you for?</h3>
                {this.state.invitations.map(invite => {
                    if (invite.invitee === window.localStorage.getItem('userName')) {
                        return (
                            <div key={invite.date}>
                                <p>{invite.date}</p>
                                <button onClick={() => this.accepted(invite)}>Accept</button>
                            </div>
                        )
                    } else {
                        return (
                            <div></div>
                        )
                    }
                })}
                <EmailForm />
                <form>
                    <label>If you would like to invite for work, please enter a date</label>
                    <input id="inviteDate" type="text" />
                    <button onClick={this.invite}>Invite for work</button>
                </form>
            </div>

        )
    }
}

export default SearchedUser
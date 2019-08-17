import React from "react"
import StaticCalendar from "./StaticCalendar"
import API from "../utils/API";
import { Link } from "react-router-dom"
import Ratings from 'react-ratings-declarative'
import '../css/subAndOfficeDash.css'


class ProfileSub extends React.Component {
    state = {
        invitations: [],
        inviterUserName: '',
        load: 'false',
        rating: 5,
    }

    componentDidMount = () => {
        this.findInvites()
        let rates = window.localStorage.getItem('starRating').split(",")
        console.log(rates)
        let total = 0
        for (let i = 0; i < rates.length; i++) {
            total += parseInt(rates[i])
        }
        let avg = total / rates.length
        this.setState({ rating: avg })

    }

    findInvites = () => {
        let userName = window.localStorage.getItem('userName')
        API.findInvites(userName).then(res => {
            let invitations = res.data[0].invitations
            this.setState({ invitations: invitations })
        })

    }

    findUserInfo = (userName) => {
        console.log('yo')
        API.findUserInfo(userName).then(res => {
            console.log(res.data.userName)
            let inviterUser = res.data.userName
            this.setState({ inviterUserName: inviterUser, load: 'true' })
        })


    }


    render() {
        console.log(this.state.invitations)

        if (this.state.load === 'true') {
            let url = `/dashboard/find/searched/${this.state.inviterUserName}`
            console.log(url)
            this.props.history.push(url)
        }


        return (
            <div>
                <div className='col-sm-12 invites'>
                   {this.state.invitations === ""? "": <h3 className="col text-center inviteHeading">You have invites!</h3> }

                    {this.state.invitations === [] ? "" : this.state.invitations.map(invite => {
                        return (

                            <div className="invite" key={invite.date}>
                                
                                <Link to={`/dashboard/find/searched/${this.state.inviterUserName}`} style={{color: "white"}} onClick={() => this.findUserInfo(`${invite.inviter}`)}>{invite.inviter +" Profile"}</Link>
                                <p>Date: {invite.date}</p>
                            </div>
                        )
                    })}
                </div>
                <div id='subProfileContent' className=''>
                    <div className='row'></div>
                    {/*<h1>ProfileSub of {window.localStorage.getItem('firstName')}</h1>*/}
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
                    <div className='row justify-content-center'>
                        <img className="profilePic" alt="Pic" src={window.localStorage.getItem('photo')}></img>
                    </div>
                    <div className='col-sm-12 text-center fullName'>
                        <h3>{window.localStorage.getItem('firstName') + " " + window.localStorage.getItem('lastName')}</h3>
                    </div>
                    <div className='col-sm-12 text-center'>
                        <h6>Your Availability:</h6>
                    </div>


                    <div className='col-sm-12 profileCalendar'>

                        <StaticCalendar />
                    </div>

                    <div className='col-sm-12 text-center infoGroup'>
                        <h4>{window.localStorage.getItem('yearsExp') + ' Years Experience'}</h4>
                        <p>{window.localStorage.getItem('nitrous') === 'true' ? "Nitrous &#x2713" : "Not nitrous certified"}</p>
                        <p>{window.localStorage.getItem('anesthesia') === 'true' ? "Anesthesia &#x2713" : "Not anesthesia certified"}</p>
                        <h4>About You</h4>
                        <p>{window.localStorage.getItem('about')}</p>
                    </div>




                </div>
            </div>
        )
    }
}

export default ProfileSub
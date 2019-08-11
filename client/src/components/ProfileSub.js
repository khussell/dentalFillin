import React from "react"
import StaticCalendar from "./StaticCalendar"
import API from "../utils/API";
import { Link } from "react-router-dom"
import Ratings from 'react-ratings-declarative'


class ProfileSub extends React.Component {
    state = {
        invitations: [],
        inviterUserName: '',
        load: 'false',
        rating: 0,
    }

    componentDidMount = () => {
        this.findInvites()
        let rates = window.localStorage.getItem('starRating').split(",")
        let total = 0
        for (let i =0; i< rates.length; i++){
               total += rates[i]
        }
        let avg = total/ rates.length
        this.setState({rating : avg})

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
                <h1>ProfileSub of {window.localStorage.getItem('firstName')}</h1>
                <Ratings

                    widgetDimensions="40px"
                    widgetSpacings="15px"
                    rating={this.state.rating}
                    widgetRatedColors="orange"
                >
                    <Ratings.Widget />
                    <Ratings.Widget />
                    <Ratings.Widget />
                    <Ratings.Widget />
                    <Ratings.Widget />
                </Ratings>
                <StaticCalendar />
                <h3>You have invites!</h3>
                {this.state.invitations.map(invite => {
                    return (
                        <div key={invite.date}>

                            <Link to={`/dashboard/find/searched/${this.state.inviterUserName}`} onClick={() => this.findUserInfo(`${invite.inviter}`)}>{invite.inviter}</Link>
                            <p>Date: {invite.date}</p>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default ProfileSub
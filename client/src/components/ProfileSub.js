import React from "react"
import StaticCalendar from "./StaticCalendar"
import API from "../utils/API";
import {Link} from "react-router-dom"


class ProfileSub extends React.Component {
    state = {
        invitations: [],
        inviterUserName: ''
    }

    componentDidMount = () => {
      this.findInvites()

    }
  
    findInvites = () => {
        let userName = window.localStorage.getItem('userName')
        API.findInvites(userName).then(res => {
            let invitations = res.data[0].invitations
            this.setState({invitations: invitations })
        })

    }

    findUserInfo = (userName) => {
      console.log('yo')
        API.findUserInfo(userName).then(res => {
            console.log(res.data.userName)
            let inviterUser = res.data.userName
            this.setState({inviterUserName: inviterUser})
        })
//Async await
        let url = `/dashboard/find/searched/${this.state.inviterUserName}`
        console.log(url)
        this.props.history.push(url)
    }

    
    render() {
       

        
        return (
           <div>
               <h1>ProfileSub of {window.localStorage.getItem('firstName')}</h1>
               <StaticCalendar />
               <h3>You have invites!</h3>
               {this.state.invitations.map(invite => {
                   return (
                       <div key={invite.date}>
                           
                           <Link to={`/dashboard/find/searched/${this.state.inviterUserName}`} onClick={()=> this.findUserInfo(`${invite.inviter}`)}>{invite.inviter}</Link>
                           <p>Date: {invite.date}</p>
                       </div>
                   )
               })}
           </div>
        )
    }
}

export default ProfileSub
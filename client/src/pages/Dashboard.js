import React from "react"
import API from "../utils/API";
import Navbar from "../components/Navbar"
import ProfileSub from "../components/ProfileSub"
import ProfileOffice from "../components/ProfileOffice"



class Dashboard extends React.Component {

  getUserName = () => {
    API.loggedInUserInfo().then(user => {
      return (user.userName)
    })
  }

  logout = () => {
    console.log('hi')
    const isAuthenticated = false
    window.localStorage.setItem('isAuthenticated', isAuthenticated)
    this.props.history.push("/login")
  }

  render() {
    const isSub = window.localStorage.getItem('sub')
    
    return (
      

      <div>
        <Navbar logout={this.logout} />
        <h1>Dashboard for {window.localStorage.getItem('userName')}</h1>
        {isSub === "true"? <ProfileSub /> :  <ProfileOffice />}
        </div>
    )
  }
}

export default Dashboard
import React from "react"
import API from "../utils/API";



class Dashboard extends React.Component {
  
  getUserName = () => {
    API.loggedInUserInfo().then(user => {
      return(user.userName)
    })
  }

  logout = () => {
    console.log('hi')
    const isAuthenticated = false
    window.localStorage.setItem('isAuthenticated', isAuthenticated)
    this.props.history.push("/login")
  }

  render(){
    
return(
     
      <div>
        <h1>Dashboard for {window.localStorage.getItem('userName')}</h1>
        <button onClick={this.logout}>Logout</button>
        </div>
      )
  }
}

export default Dashboard
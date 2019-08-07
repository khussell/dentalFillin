import React from "react"
import API from "../utils/API";
import Navbar from "../components/Navbar"
import ProfileSub from "../components/ProfileSub"
import ProfileOffice from "../components/ProfileOffice"
import {Route, Switch} from "react-router-dom"
import Find from "./Find"



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
    window.localStorage.removeItem('sub')
    window.localStorage.removeItem('firstName')
    window.localStorage.removeItem('lastName')
    window.localStorage.removeItem('userName')
    window.localStorage.removeItem('_id')
    window.localStorage.removeItem('about')
    window.localStorage.removeItem('location')
    window.localStorage.removeItem('photo')
    window.localStorage.removeItem('starRating')

  
        window.localStorage.removeItem('avail' )
        window.localStorage.removeItem('pastJobs')
        window.localStorage.removeItem('currentJobs')
        window.localStorage.removeItem('searchParams')
        window.localStorage.removeItem('yearsExp')
        window.localStorage.removeItem('nitrous')
        window.localStorage.removeItem('anesthesia')
        window.localStorage.removeItem('howManyTimesSubbed')
    

        window.localStorage.removeItem('doctors')
        window.localStorage.removeItem('datesNeeded')
        window.localStorage.removeItem('pastSubs')
        window.localStorage.removeItem('currentSubs')
        window.localStorage.removeItem('officeName')
        window.localStorage.removeItem('kindOfPerson')
        window.localStorage.removeItem('howManySubsHaveYouHad')
        window.localStorage.removeItem('searchParams')
    this.props.history.push("/login")
  }

  render() {
    const isSub = localStorage.getItem('sub')
    
    const firstName = window.localStorage.getItem('firstName')
    
    return (
      

      <div className="dashboardContent">
        <Navbar {...this.props} logout={this.logout} />
        <h1>Dashboard for {firstName}</h1>
        <Switch>
          <Route exact path={`${this.props.match.url}/find`} render={() => <Find {...this.props} />} />
          {isSub === "true" && `${this.props.match.url}` !== '/dashboard/find'? <ProfileSub /> :  <ProfileOffice />}
        </Switch>
        
        
        </div>

    )
  }
}

export default Dashboard
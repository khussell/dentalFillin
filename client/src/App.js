import React from 'react';
import Welcome from './pages/Welcome'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import { BrowserRouter as Router, Route, } from "react-router-dom"
import API from './utils/API'
import Dashboard from "./pages/Dashboard"
import './css/app.css'



class App extends React.Component {

  state = {
    results: [],
    toLogin: false,
    userInfo: {
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
      datesNeeded: [],
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
    }
  }

  componentDidMount = () => {
    console.log(this.state.userInfo)
    this.setState({ toLogin: false })
    //this.loadUsers()
  }


  handleInputChange = (event) => {
    const name = event.target.name
    const value = event.target.value
    if (name === "yearsExp") {
      this.setState({ userInfo: { ...this.state.userInfo, [name]: value } })
    }
    this.setState({ userInfo: { ...this.state.userInfo, [name]: value } })
  }


  handleNitrousRadioChange = (event) => {
    this.setState({
      userInfo: { ...this.state.userInfo, nitrous: event.target.value }
    })
  }


  handleAnesthesiaRadioChange = (event) => {
    this.setState({
      userInfo: { ...this.state.userInfo, anesthesia: event.target.value }
    })
  }



  handleLicenseRadioChange = (event) => {
    this.setState({
      userInfo: { ...this.state.userInfo, sub: event.target.value }
    })
  }


  signUpSubmit = (event) => {
    event.preventDefault()
    this.setState({ toLogin: true })

    API.saveUser({
      firstName: this.state.userInfo.firstName,
      lastName: this.state.userInfo.lastName,
      userName: this.state.userInfo.userName,
      password: this.state.userInfo.password,
      sub: this.state.userInfo.sub,
      photo: this.state.userInfo.photo,
      location: this.state.userInfo.location,
      yearsExp: this.state.userInfo.yearsExp,
      about: this.state.userInfo.about,
      anesthesia: this.state.userInfo.anesthesia,
      nitrous: this.state.userInfo.nitrous,
      avail: this.state.userInfo.avail,
      officeName: this.state.userInfo.officeName,
      doctors: this.state.userInfo.doctors,
      datesNeeded: this.state.userInfo.datesNeeded,
      kindOfPerson: this.state.userInfo.kindOfPerson,
      starRating: this.state.userInfo.starRating,
      howManyTimesSubbed: this.state.userInfo.howManyTimesSubbed,
      howManySubsHaveYouHad: this.state.userInfo.howManySubsHaveYouHad,
      pastJobs: this.state.userInfo.pastJobs,
      currentJobs: this.state.userInfo.currentJobs,
      pastSubs: this.state.userInfo.pastSubs,
      currentSubs: this.state.userInfo.currentSubs,
      searchParams: this.state.userInfo.searchParams,
      invitations: this.state.userInfo.invitations
    }).then(res => { this.loadUsers() })
      .catch(err => console.log(err));
  }


  loadUsers = () => {
    API.getUsers()
      .then(res => {
        this.setState({
          toLogin: true,
          results: res.data, userInfo: {
            ...this.state.userInfo,
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
            invitations: []
          }
        })
      }).then().catch(err => console.log(err));
    window.location.reload()
  }


  handleDate = (date) => {
    const value = date
    if (this.state.userInfo.sub === "true") {
      this.setState({
        userInfo: { ...this.state.userInfo, avail: value }
      })
    } else {
      this.setState({
        userInfo: { ...this.state.userInfo, datesNeeded: value }
      })
    }
  }


  render() {
    if (this.state.toLogin === true) {
      this.setState({ toLogin: false })
    }

    return (
      <Router>
      
        <div className="App">
          <div className='backgroundAll'>
           <div className='backgroundImage'></div>
          </div>
          <Route exact path="/" component={Welcome} />
          <Route exact path="/login" render={(props) => <Login {...props} results={this.state.results} />} />
          <Route path="/signUp"
            render={(props) => <SignUp {...props} results={this.state.results}
              handleInputChange={this.handleInputChange}
              userInfo={this.state.userInfo}
              toLogin={this.state.toLogin}

              firstName={this.state.userInfo.firstName}
              lastName={this.state.userInfo.lastName}
              userName={this.state.userInfo.userName}
              password={this.state.userInfo.password}
              sub={this.state.userInfo.sub}
              photo={this.state.userInfo.photo}
              location={this.state.userInfo.location}
              yearsExp={this.state.userInfo.yearsExp}
              about={this.state.userInfo.about}
              anesthesia={this.state.userInfo.anesthesia}
              nitrous={this.state.userInfo.nitrous}
              avail={this.state.userInfo.avail}
              officeName={this.state.userInfo.officeName}
              doctors={this.state.userInfo.doctors}
              datesNeeded={this.state.userInfo.datesNeeded}
              kindOfPerson={this.state.userInfo.kindOfPerson}
              invitations={this.state.userInfo.invitations}
              starRating={this.state.userInfo.starRating}

              handleDate={this.handleDate}
              handleFormSubmit={this.handleFormSubmit}
              signUpSubmit={this.signUpSubmit}
              handleNitrousRadioChange={this.handleNitrousRadioChange}
              handleAnesthesiaRadioChange={this.handleAnesthesiaRadioChange}
              handleLicenseRadioChange={this.handleLicenseRadioChange}
              {...props} />}
          />
          <Route path="/dashboard" component={Dashboard} />
        </div>
      </Router>
    );
  }
}

export default App;

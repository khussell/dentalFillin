import React from 'react';
import Welcome from './pages/Welcome'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import { BrowserRouter as Router, Route, Redirect} from "react-router-dom"
import API from './utils/API'
import Dashboard from "./pages/Dashboard"



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
    //this.loadUsers()
  }





  handleInputChange = (event) => {
    const name = event.target.name
    const value = event.target.value

    if (name === "yearsExp") {
      console.log("hi")


      this.setState({ userInfo: { ...this.state.userInfo, [name]: value } })

      console.log("did it")
    }


    this.setState({ userInfo: { ...this.state.userInfo, [name]: value } })



    console.log(this.state.userInfo)
  }

  handleNitrousRadioChange = (event) => {
    this.setState({
      userInfo: { ...this.state.userInfo, nitrous: event.target.value }
    })
    console.log(this.state.userInfo)

  }

  handleAnesthesiaRadioChange = (event) => {
    this.setState({
      userInfo: { ...this.state.userInfo, anesthesia: event.target.value }
    })
    console.log(this.state.userInfo)
  }



  handleLicenseRadioChange = (event) => {
    this.setState({
      userInfo: { ...this.state.userInfo, sub: event.target.value }
    })
    console.log(this.state.userInfo)
  }


  signUpSubmit = (event) => {
    event.preventDefault()
    console.log(this.state.userInfo)
    console.log('here')

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
    }).then(res =>{ this.loadUsers()
    
    })
      .catch(err => console.log(err));

      console.log('hi')
      console.log( this.props.history)
     this.props.history.push('/login')
  }

  loadUsers = () => {
    API.getUsers()
      .then(res => {
        this.setState({
          toLogin: true,
          results: res.data, userInfo: {...this.state.userInfo,
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

        
        
      }).catch(err => console.log(err));
      
  }

  handleDate = (date) => {
    const value = date
    if (this.state.userInfo.sub === "true") {
      this.setState({
        userInfo: { ...this.state.userInfo, avail: value }
      })
    }else{
      this.setState({
        userInfo: { ...this.state.userInfo, datesNeeded: value }
      })
    }
  }


  render() {
    console.log(this.state.userInfo.nitrous)
    console.log(this.state.results)
    
    return (
      <Router>

        <div className="App">
          <Route exact path="/" component={Welcome} />
          <Route exact path="/login"  render={(props) => <Login {...props} results={this.state.results} />} />
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

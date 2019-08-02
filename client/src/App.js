import React from 'react';
import Welcome from './pages/Welcome'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import { BrowserRouter as Router, Route} from "react-router-dom"
import API from './utils/API'


class App extends React.Component {


  state = {
     results: [],
     userInfo:{
      firstName: "",
      lastName: "",
      userName: "",
      password: "",
      sub: false,
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
      starRating: 0,
      howManyTimesSubbed: 0,
      howManySubsHaveYouHad: 0,
      pastJobs: [],
      currentJobs: [],
      pastSubs: [],
      currentSubs: [],
      searchParams: []
     }
      
     
  }

  componentDidMount = () => {
    
    console.log(this.state.userInfo.firstName)
 }


  handleInputChange = (event) => {
      const name = event.target.name
      const value = event.target.value
      
      this.setState({userInfo: {[name]: value}}) 
      
  }

  handleNitrousRadioChange= (event) =>{
    this.setState({
      userInfo: {nitrous: event.target.value}
    })
  }

  handleAnesthesiaRadioChange= (event) =>{
    this.setState({
      userInfo: {anesthesia: event.target.value}
    })
  }


  signUpSubmit= (event) =>{
    event.preventDefault()
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
      searchParams: this.state.userInfo.searchParams
     }).then(res => this.loadUsers())
       .catch(err => console.log(err));
  }

  loadUsers = () => {
    API.getUsers()
       .then(res => this.setState({userInfo:{
        firstName: "",
        lastName: "",
        userName: "",
        password: "",
        sub: false,
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
        starRating: 0,
        howManyTimesSubbed: 0,
        howManySubsHaveYouHad: 0,
        pastJobs: [],
        currentJobs: [],
        pastSubs: [],
        currentSubs: [],
        searchParams: []
       }})).catch(err => console.log(err));
  }
 

  //handleFormSubmit = (event) => {
  //  event.preventDefault()
  //}

  render() {
    console.log(this.state.userInfo.nitrous)
  return (
    <Router>
      
        <div className="App">
          <Route exact path="/" component={Welcome} />
          <Route exact path="/login" component={Login} />
          <Route path="/signUp" 
                 render={(props)=> <SignUp results={this.state.results}
                 
                                         handleInputChange={this.handleInputChange}
                                         userInfo={this.state.userInfo}
/*
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
                                         nitrous={this.userInfo.state.nitrous}
                                         avail={this.userInfo.state.avail}
                                         officeName={this.state.userInfo.officeName}
                                         doctors={this.state.userInfo.doctors}
                                         datesNeeded={this.state.userInfo.datesNeeded}
                                         kindOfPerson={this.state.userInfo.kindOfPerson}
  */
                                         handleFormSubmit={this.handleFormSubmit}    
                                         signUpSubmit={this.signUpSubmit}
                                         handleNitrousRadioChange={this.handleNitrousRadioChange}
                                         handleAnesthesiaRadioChange={this.handleAnesthesiaRadioChange}
                                         {...props} />}
           />
        </div>
      
    </Router>
  
  );
  }
}

export default App;

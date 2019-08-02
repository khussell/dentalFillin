import React from 'react';
import Welcome from './pages/Welcome'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import { BrowserRouter as Router, Route} from "react-router-dom"


class App extends React.Component {


  state = {
     results: [],
     
      firstName: "",
      lastName: "",
      userName: "",
      password: "",
      sub: false,
      photo: "",
      location: "",
      yearsExp: 0,
      about: "",
      anesthesia: false,
      nitrous: false,
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
      searchParams: [],
      
     
  }

  componentDidMount = () => {
    console.log(this.state.firstName)
 }


  handleInputChange = (event) => {
      const name = event.target.name
      const value = event.target.value
      this.setState({[name]: value})
      
  }

 

  //handleFormSubmit = (event) => {
  //  event.preventDefault()
  //}

  render() {
  return (
    <Router>
      
        <div className="App">
          <Route exact path="/" component={Welcome} />
          <Route exact path="/login" component={Login} />
          <Route path="/signUp" 
                 render={(props)=> <SignUp results={this.state.results}
                 
                                         handleInputChange={this.handleInputChange}
                                         
                                         firstName={this.state.firstName}
                                         lastName={this.state.lastName}
                                         userName={this.state.userName}
                                         password={this.state.password}
                                         sub={this.state.sub}
                                         photo={this.state.photo}
                                         location={this.state.location}
                                         yearsExp={this.state.yearsExp}
                                         about={this.state.about}
                                         anesthesia={this.state.anesthesia}
                                         nitrous={this.state.nitrous}
                                         avail={this.state.avail}
                                         officeName={this.state.officeName}
                                         doctors={this.state.doctors}
                                         datesNeeded={this.state.datesNeeded}
                                         kindOfPerson={this.state.kindOfPerson}
                                         
                                         handleFormSubmit={this.handleFormSubmit}    
                                         {...props} />}
           />
        </div>
      
    </Router>
  
  );
  }
}

export default App;

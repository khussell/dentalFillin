import React from 'react';
import Welcome from './pages/Welcome'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import { BrowserRouter as Router, Route} from "react-router-dom"


class App extends React.Component {

  state = {
     results: [],
     
      firstName: "hi",
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

      console.log(this.state.name)
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
                 component={SignUp}
                 results={this.state.results}
                 handleFormSubmit={this.handleFormSubmit}
                 handleInputChange={this.handleInputChange}
                 firstName={this.state.firstName}
           />
        </div>
      
    </Router>
  
  );
  }
}

export default App;

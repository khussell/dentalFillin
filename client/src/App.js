import React from 'react';
import Welcome from './pages/Welcome'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"


class App extends React.Component {

  state = {
     results: [],
     user: "",
     isSub: false
  }

  componentDidMount = () => {
    
 }


  handleInputChange = (event) => {
      const name = event.target.name
      const value = event.target.value
      this.setState({[name]: value})
  }

  subOrOffice = (event) => {
    if(event.target.id === "subClick"){
        this.setState({isSub: true})
    }else{
        this.setState({isSub: false})
    }
    console.log(this.state.isSub)
}

  //handleFormSubmit = (event) => {
  //  event.preventDefault()
  //}

  render() {
  return (
    <Router>
      <Switch>
        <div className="App">
          <Route exact path="/" component={Welcome} />
          <Route exact path="/login" component={Login} />
          <Route path="/signUp" 
                 component={SignUp}
                 results={this.state.results}
                 user={this.state.user}
                 handleFormSubmit={this.handleFormSubmit}
                 handleInputChange={this.handleInputChange}
                 subOrOffice={this.subOrOffice}
           />
        </div>
      </Switch>
    </Router>
  
  );
  }
}

export default App;

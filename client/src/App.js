import React from 'react';
import Welcome from './pages/Welcome'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import SubSignUp from "./components/SubSignUp"
import OfficeSignUp from "./components/OfficeSignUp"


function App() {

 // state = {

 // }

 // componentDidMount = () => {
// }

 // handleInputChange = (event) => {
    //  const name = event.target.name
    //  const value = event.target.value
    //  this.setState({[name]: value})
  //}

 // handleFormSubmit = (event) => {
  //  event.preventDefault()
  //}

  return (
    <Router>
      <Switch>
        <div className="App">
          <Route exact path="/" component={Welcome} />
          <Route exact path="/login" component={Login} />
          <Route  path="/signUp" component={SignUp} />
        </div>
      </Switch>
    </Router>
  );
}

export default App;

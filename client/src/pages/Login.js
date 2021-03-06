import React from "react"
import { Link, Redirect } from "react-router-dom";
import API from '../utils/API'
import '../css/login.css'

class Login extends React.Component {
    state = {
        userName: '',
        password: '',
        invitations: [],

    }

    componentDidMount = () => {
    }

    submit = (event) => {
        event.preventDefault()
        let userName = document.getElementById('usernameInput').value
        let password = document.getElementById('passwordInput').value
        let userInput = {
            userName: userName,
            password: password
        }

        API.loginInput(userInput).then(res => {
            if (res.data) {
                const isAuthenticated = true
                window.localStorage.setItem('isAuthenticated', isAuthenticated)

                let invitations = res.data.invitations
                this.setState({ invitations: invitations })

                window.localStorage.setItem('sub', res.data.sub)
                window.localStorage.setItem('firstName', res.data.firstName)
                window.localStorage.setItem('lastName', res.data.lastName)
                window.localStorage.setItem('_id', res.data._id)
                window.localStorage.setItem('about', res.data.about)
                window.localStorage.setItem('location', res.data.location)
                window.localStorage.setItem('photo', res.data.photo)
                window.localStorage.setItem('starRating', res.data.starRating)
                window.localStorage.setItem('invitations', res.data.invitations)
                window.localStorage.setItem('userName', res.data.userName)

                if (res.data.sub === "true") {
                    window.localStorage.setItem('avail', res.data.avail)
                    window.localStorage.setItem('pastJobs', res.data.pastJobs)
                    window.localStorage.setItem('currentJobs', res.data.currentJobs)
                    window.localStorage.setItem('searchParams', res.data.searchParams)
                    window.localStorage.setItem('yearsExp', res.data.yearsExp)
                    window.localStorage.setItem('nitrous', res.data.nitrous)
                    window.localStorage.setItem('anesthesia', res.data.anesthesia)
                    window.localStorage.setItem('howManyTimesSubbed', res.data.howManyTimesSubbed)
                } else {

                    window.localStorage.setItem('doctors', res.data.doctors)
                    window.localStorage.setItem('datesNeeded', res.data.datesNeeded)
                    window.localStorage.setItem('pastSubs', res.data.pastSubs)
                    window.localStorage.setItem('currentSubs', res.data.currentSubs)
                    window.localStorage.setItem('officeName', res.data.officeName)
                    window.localStorage.setItem('kindOfPerson', res.data.kindOfPerson)
                    window.localStorage.setItem('howManySubsHaveYouHad', res.data.howManySubsHaveYouHad)
                    window.localStorage.setItem('searchParams', res.data.searchParams)
                } 

            }
            //const isAuthenticated = res.data.isAuthenticated
            this.props.history.push("/dashboard", userInput)

        }).catch(error => {
            alert("Email or password not valid")
            console.log(error)
        })
    }

    render() {

        const isAuthenticated = window.localStorage.getItem('isAuthenticated')
        if (isAuthenticated === true) {
            return <Redirect to='/dashboard' />
        }
        return (
            <div>
                
                
            
            <div id="loginContent" className="container">
                <div className='loginTrans'></div>
                <div className="row justify-content-center loginForm">
                    <h1 className="col-sm-12 text-center loginTitle">Login</h1>

                    <div className="row ">
                        <form id="loginForm" className="col text-center">
                            <div className="form-group">
                                <label htmlFor="usernameInput">Username</label>
                                <input type="text" className="form-control" id="usernameInput" aria-describedby="emailHelp" placeholder="Enter Username" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="passwordInput">Password</label>
                                <input type="password" className="form-control" id="passwordInput" placeholder="Password" />
                            </div>
                            <button id="loginButton" className="btn btn-primary" onClick={this.submit}>Login</button>
                        </form>
                    </div>
                </div>

                <div className="row justify-content-center signUpForm">
                    <p id="signUpIntro" className="col-sm-12 text-center">Don't have an account?</p>
                    <Link to={"/signup"}>
                        <button id='signUpButton' className="col-sm-12 btn btn-primary">Sign Up</button>
                    </Link>
                </div>
            </div>
            </div>
        )
    }
}

export default Login
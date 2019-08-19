import React from "react"
import { Link } from "react-router-dom";
import '../css/welcome.css'



class Welcome extends React.Component {
    render() {
        return (

            <div id="welcomeContent" className="container" >
                <div className="row">
                    <p id="welcome" className="col-sm-12 text-center">Welcome to</p>
                    <div id="logoDiv">
                        <h1 id="logo" className="col-sm-12 text-center">Dental Fillin'</h1>
                        <img id="logoTooth" alt="tooth" src="/images/tooth4.png" height="40px"></img>
                    </div>
                    <div id="welcomeBottom">
                        <p id="question" className="col-sm-12 text-center">Are you looking for a fillin' hygienist or an office to fillin' for?</p>
                        <div className="container">
                            <div className='row'>
                                <div className="col text-center">
                                    <Link to={"/login"}>
                                        <button id="welcomeBtn" className="btn btn-info">Get Started</button>
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default Welcome
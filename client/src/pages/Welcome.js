import React from "react"
import { Link } from "react-router-dom";
import '../css/welcome.css'



class Welcome extends React.Component {
    render() {
        return (

            <div id="welcomeContent" className="" >
                <div className="row">
            
                    <div id="logoDiv">
                        <h1 id="logo" className="col-sm-12 text-center ">Dental Filli<span className='disappear'>n</span>'</h1>
                        <img alt="tooth" className='tooth2' src='/images/tooth7.png'/>
                       

                        
                    </div>
                    
                    <div id="welcomeBottom">
                    <div className='welcomeBottomTrans'></div>
                        <p id="question" className="col-sm-12 text-center">Are you looking for a fill-in hygienist or an office to fill-in for?</p>
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
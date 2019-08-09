import React from "react"
import { Link } from "react-router-dom";



class Welcome extends React.Component {
    render() {
        return (

            <div className="container">
                <div className="row">
                    <p className="col-sm-12">Welcome to</p>
                    <h1 className="col-sm-12">Dental Fillin'</h1>
                    <p className="col-sm-12">Are you looking for a sub or an office?</p>
                    <div className="row">
                        <Link to={"/login"}>
                            <button  className="btn btn-primary">Get Started</button>
                        </Link>
                    </div>
                   
                </div>
            </div>
        )
    }
}

export default Welcome
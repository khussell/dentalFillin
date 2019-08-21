import React from "react"
import { Link, } from "react-router-dom"
import '../css/navbar.css'


class Navbar extends React.Component {
    render() {
        return (
            <div>
                <nav id='nav' className="navbar navbar-expand-lg navbar-light bg-light navbar-custom">
                    <Link to="/dashboard" id="navTitle" className="navbar-brand">Dental Fillin'</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <Link to={`${this.props.match.url}/find`} className="nav-link" >Find</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={`${this.props.match.url}/upcoming`} className="nav-link" >Upcoming</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={`${this.props.match.url}/past`} className="nav-link" >Past</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={`${this.props.match.url}/edit`} className="nav-link" >Edit</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="#" onClick={this.props.logout} className="nav-link">Logout</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar
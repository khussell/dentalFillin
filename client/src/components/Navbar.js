import React from "react"
import {Link} from "react-router-dom"

class Navbar extends React.Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <Link to="/dashboard" className="navbar-brand">DentalFillin'</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <Link to="/find" className="nav-link" >Find</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/chat" className="nav-link" >Chat</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/upcoming" className="nav-link" >Upcoming</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/past" className="nav-link" >Past</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="edit" className="nav-link" >Edit</Link>
                            </li>
                            <li className="nav-item">
                                <Link onClick={this.props.logout} className="nav-link">Logout</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar
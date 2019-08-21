import React from "react"
import StaticCalendar from "./StaticCalendar"
import Map from "../components/Map"
import Ratings from 'react-ratings-declarative'
import '../css/subAndOfficeDash.css'



class ProfileOffice extends React.Component {
    state = {
        rating: 5
    }

    componentDidMount = () => {
        let rates = window.localStorage.getItem('starRating').split(",")
        console.log(rates)
        let total = 0
        for (let i = 0; i < rates.length; i++) {
            total += parseInt(rates[i])
        }
        let avg = total / rates.length
        console.log(avg)
        this.setState({ rating: avg })
    }

    render() {
        return (
            <div id="officeProfileContent">
                <div className='ratings col-sm-12'>
                    <Ratings
                        widgetDimensions="25px"
                        widgetSpacings="7px"
                        rating={this.state.rating}
                        widgetRatedColors="orange"
                    >
                        <Ratings.Widget />
                        <Ratings.Widget />
                        <Ratings.Widget />
                        <Ratings.Widget />
                        <Ratings.Widget />
                    </Ratings>
                </div>
                <div className="col-sm-12 text-center fullName">
                        <h3 >{window.localStorage.getItem('officeName')}</h3>
                        </div>
                <div className='row justify-content-center'>
                    <img className="profilePic" alt="Pic" src={window.localStorage.getItem('photo')}></img>
                </div>
                <div className='col-sm-12 text-center neededDatesTitle'>
                        <h6>Your Needed Dates:</h6>
                    </div>
                <div className='col-sm-12 profileCalendar'>

                    <StaticCalendar dates={window.localStorage.getItem('datesNeeded').split(',')}/>
                </div>
                
                <hr></hr>
                <div className='col-sm-12 text-center infoGroup'>
                    <h4 className='aboutOffice'>About your Office</h4>
                    <p>{window.localStorage.getItem('about')}</p>
                    <hr></hr>
                    <h4 className='aboutOffice'>You are looking for... </h4>
                    <p>{window.localStorage.getItem('kindOfPerson')}</p>
                </div>
                <hr></hr>
                <div className='col-sm-12 text-center locationTitle'><h4>Your Location</h4></div>
                <div className="map">
                <Map location={window.localStorage.getItem('location')} />
                </div>
            </div>
        )
    }
}

export default ProfileOffice
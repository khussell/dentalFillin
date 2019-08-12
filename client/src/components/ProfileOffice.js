import React from "react"
import StaticCalendar from "./StaticCalendar"
import Map from "../components/Map"
import Ratings from 'react-ratings-declarative'



class ProfileOffice extends React.Component {
    state = {
        rating: 5
    }
    componentDidMount = () =>{
        let rates = window.localStorage.getItem('starRating').split(",")
        console.log(rates)
        let total = 0
        
        for (let i =0; i< rates.length; i++){
               total += rates[i]
        }
        let avg = total/ rates.length
        this.setState({rating : avg})
    }

    render() {
        return (
            <div>
                <h1>ProfileOffice of {window.localStorage.getItem('firstName')}</h1>
                <Ratings

                    widgetDimensions="40px"
                    widgetSpacings="15px"
                    rating={this.state.rating}
                    widgetRatedColors="orange"
                >
                    <Ratings.Widget />
                    <Ratings.Widget />
                    <Ratings.Widget />
                    <Ratings.Widget />
                    <Ratings.Widget />
                </Ratings>
                <StaticCalendar />
                <Map />
            </div>
        )
    }
}

export default ProfileOffice
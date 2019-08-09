import React from "react"
import StaticCalendar from "./StaticCalendar"
import Map from "../components/Map"


class ProfileOffice extends React.Component {
    render() {
        return (
           <div>
               <h1>ProfileOffice</h1>
               <StaticCalendar />
               <Map />
           </div>
        )
    }
}

export default ProfileOffice
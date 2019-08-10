import React from "react"
import StaticCalendar from "./StaticCalendar"


class ProfileSub extends React.Component {


    
    render() {
        return (
           <div>
               <h1>ProfileSub of {window.localStorage.getItem('userName')}</h1>
               <StaticCalendar />
           </div>
        )
    }
}

export default ProfileSub
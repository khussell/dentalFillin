import React from "react"
import Flatpickr from 'react-flatpickr'
import API from '../utils/API'

class Find extends React.Component {
    constructor() {
        super();
    
        this.state = {
          date: new Date()
        };
      }

    findAll = (event) =>{
        event.preventDefault()
        console.log("hey")
        const isSub = window.localStorage.getItem('sub')
        console.log(isSub)
        if(isSub){
            API.getAllOffices().then(res =>{
                console.log(res.data)
            })
        }
    }

    render() {
        return (
            <div>
                <h1>Find</h1>
                <button onClick={this.findAll}>Search all dates</button>
                <button >Search Profile Dates</button>
                <br></br>
                <label>Search certain day:</label>
                <br></br>
                <Flatpickr
                    value={this.state.date}
                    onChange={date => { this.setState({ date }) }}
                    options={{
                        dateFormat: "Y-m-d"
                    }} />
            </div>
        )
    }
}

export default Find
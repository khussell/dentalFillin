import React from "react"
import Flatpickr from 'react-flatpickr'
import API from '../utils/API'
import Map from "../components/Map"

class Find extends React.Component {
    constructor() {
        super();
    
        this.state = {
          results: [],
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
                this.setState({results: res.data})

                
            })
        }else{
            API.getAllSubs().then(res =>{
                console.log(res.data)
                this.setState({results : res.data})
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
                <div>
                    {this.state.results.map(data => {
                        return(
                            <div key={data._id}>
                                <h1>{data.officeName}</h1>
                                <h1>{data.userName}</h1>
                                <Map />
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Find
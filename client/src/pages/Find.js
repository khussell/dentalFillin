import React from "react"
import Flatpickr from 'react-flatpickr'
import API from '../utils/API'
import Map from "../components/Map"
import {Link, } from "react-router-dom"


class Find extends React.Component {
    constructor() {
        super();

        this.state = {
            results1: [],
            results2: [],
            date: new Date(),
            user: ""
        };
    }

    componentDidMount = () => {
        this.setState({
            results1: [],
            results2: [],
            load1: "false",
            load2: "false"
        })
    }

    findAll = (event) => {
        event.preventDefault()
        const isSub = window.localStorage.getItem('sub')
        console.log(isSub)
        if (isSub) {
            API.getAllOffices().then(res => {
                console.log(res.data)
                this.setState({
                    results1: res.data,
                    results2: [],
                    load1: "true",
                    load2: 'false',

                })
            })
        } else {
            API.getAllSubs().then(res => {
                console.log(res.data)
                this.setState({
                    results1: res.data,
                    results2: [],
                    load1: "true",
                    load2: 'false',

                })
            })
        }
    }

    findDate = (event) => {
        event.preventDefault()
        const isSub = window.localStorage.getItem('sub')
        const date = this.state.date
        console.log(isSub)
        console.log(date)

        if (isSub) {
            API.getAllOfficesFromDate({ date: date }).then(res => {
                console.log(res.data)
                this.setState({
                    results1: [],
                    results2: res.data,
                    load1: 'false',
                    load2: "true",

                })
            })
        } else {
            API.getAllSubsFromDate({ date: date }).then(res => {
                console.log(res.data)
                this.setState({
                    results1: [],
                    results2: res.data,
                    load1: "false",
                    load2: "true",

                })
            })
        }
    }

  



    render() {
        return (
            <div id="allFind">
                <h1>Find</h1>
                <button onClick={this.findAll}>Search all dates</button>

                <br></br>
                <label>Search certain day:</label>
                <br></br>
                <Flatpickr
                    value={this.state.date}
                    onChange={date => { this.setState({ date }) }}
                    options={{
                        dateFormat: "Y-m-d"
                    }} />
                <button onClick={this.findDate}>Search Date</button>
                <div>
                    {
                        this.state.results1.map(data => {
                            return (
                                <div key={data._id}>
                                    <h1>{data.officeName}</h1>
                                    <h1>{data.userName}</h1>
                                    <Map />
                                    <Link className="btn btn-primary" to={`${this.props.match.url}/find/searched/${data.userName}`} >Profile</Link>
                                    
                                </div>
                            )
                        })
                    }
                    {this.state.results2.map(data => {
                            return (
                                <div key={data._id}>
                                    <h1>{data.officeName}</h1>
                                    <h1>{data.userName}</h1>
                                    <Map />
                                    <Link className="btn btn-primary" to={`${this.props.match.url}/find/searched/${data.userName}`} >Profile</Link>
                            
                                </div>
                            )
                        
                    })}
                </div>
                
            </div>
        )
    }
}

export default Find
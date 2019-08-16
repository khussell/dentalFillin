import React from "react"
import Flatpickr from 'react-flatpickr'
import API from '../utils/API'
import Map from "../components/Map"
import { Link, } from "react-router-dom"
import '../css/find.css'
import Ratings from "react-ratings-declarative"


class Find extends React.Component {
    constructor() {
        super();

        this.state = {
            results1: [],
            results2: [],
            date: new Date(),
            user: "",
            searchButtonClicked: 'false',
            searchButtonClicked2: 'false',
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
        this.setState({ searchButtonClicked: 'true' })
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
        this.setState({ searchButtonClicked2: 'true' })
    }


    getRating = (starArr) => {
        let total = 0

        for (let i = 0; i < starArr.length; i++) {
            total += starArr[i]
        }
        let avg = total / starArr.length

        return avg

    }





    render() {
        return (
            <div id="allFind" className="col text-center ">
                {window.localStorage.getItem('sub') === 'true' ? <h3 className="findTitle">Find an office.</h3> : <h3>Find a sub.</h3>}
                <button className="search btn" onClick={this.findAll}>Search all dates</button>

                <br></br>
                <label>OR</label>
                <br></br>
                <Flatpickr
                    value={this.state.date}
                    onChange={date => { this.setState({ date }) }}
                    options={{
                        dateFormat: "Y-m-d"
                    }} />
                <button className="search searchDate btn" onClick={this.findDate}>Search Date</button>
                <div>
                {this.state.results1.length === 0 && this.state.searchButtonClicked1 === 'true' ? <h4>No dates found.</h4> :
                        this.state.results1.map(data => {
                            return (
                                <div className='myCard' key={data._id}>
                                    {window.localStorage.getItem('sub') === 'true' ? (<div>
                                        <Link className="" to={`${this.props.match.url}/find/searched/${data.userName}`} >{data.officeName}</Link>
                                        <div className='col-sm-12'>
                                            <Ratings

                                                widgetDimensions="20px"
                                                widgetSpacings="2px"
                                                rating={this.getRating(data.starRating)}


                                                widgetRatedColors="orange"
                                            >
                                                <Ratings.Widget />
                                                <Ratings.Widget />
                                                <Ratings.Widget />
                                                <Ratings.Widget />
                                                <Ratings.Widget />
                                            </Ratings>
                                        </div>
                                        <div className='map'>
                                            <Map name={data.officeName} location={data.location} />
                                        </div>
                                    </div>) : (<div>
                                        <h4>{data.firstName + " " + data.lastName}</h4>
                                    </div>)}
                                </div>
                            )
                        })
                    }
                    {this.state.results2.length === 0 && this.state.searchButtonClicked2 === 'true' ? <h4>No dates found.</h4> :
                        this.state.results2.map(data => {
                            return (
                                <div className='myCard' key={data._id}>
                                    {window.localStorage.getItem('sub') === 'true' ? (<div>
                                        <Link className="" to={`${this.props.match.url}/find/searched/${data.userName}`} >{data.officeName}</Link>
                                        <div className='col-sm-12'>
                                            <Ratings

                                                widgetDimensions="20px"
                                                widgetSpacings="2px"
                                                rating={this.getRating(data.starRating)}


                                                widgetRatedColors="orange"
                                            >
                                                <Ratings.Widget />
                                                <Ratings.Widget />
                                                <Ratings.Widget />
                                                <Ratings.Widget />
                                                <Ratings.Widget />
                                            </Ratings>
                                        </div>
                                        <div className='map'>
                                            <Map name={data.officeName} location={data.location} />
                                        </div>
                                    </div>) : (<div>
                                        <h4>{data.firstName + " " + data.lastName}</h4>
                                    </div>)}
                                </div>
                            )
                        })
                    }
                </div>

            </div>
        )
    }
}

export default Find
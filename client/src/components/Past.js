import React from "react"
import API from "../utils/API"
import { Link, } from "react-router-dom"
import Ratings from 'react-ratings-declarative';


class Past extends React.Component {
    state = {
        pastJobs: [],
        pastSubs: [],
        inviterUser: '',
        rating: 0
    }

    componentDidMount = () => {
        const userName = window.localStorage.getItem('userName')
        console.log(userName)
        API.findUpcoming(userName).then(res => {
            console.log(res.data)
            this.setState({
                pastJobs: res.data[0].pastJobs,
                pastSubs: res.data[0].pastSubs
            })
        })
    }


    findUserInfo = (userName) => {
        API.findUserInfo3(userName).then(res => {
            console.log(res.data)
            this.setState({ inviterUser: res.data.userName })
        })
    }

    changeRating = (newRating) => {
        this.setState({
            rating: newRating
        });
    }

    saveRate = (userName) => {
        API.updateRate().then(res => {
            console.log(res.data)
        })
    }


    render() {
        return (
            <div>
                <h1>Past for: {window.localStorage.getItem('userName')}</h1>
                {this.state.pastJobs.map(job => {

                    return (
                        <div key={job.date}>
                            <Link to={`/dashboard/find/searched/${job.inviterUser}`} >{job.inviter}</Link>
                            <p>{job.date}</p>

                            <button type="button"  className="btn btn-primary" data-toggle="modal" data-target="#hello">
                                Rate
                             </button>


                            <div className="modal fade" id="hello" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog" role="document">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="exampleModalLabel">Rate {job.inviterUser}</h5>

                                        </div>
                                        <div className="modal-body">
                                            <Ratings
                                                rating={this.state.rating}
                                                widgetRatedColors="orange"
                                                changeRating={this.changeRating}
                                            >
                                                <Ratings.Widget widgetHoverColor="orange" />
                                                <Ratings.Widget widgetHoverColor="orange" />
                                                <Ratings.Widget widgetHoverColor="orange" />
                                                <Ratings.Widget widgetHoverColor="orange" />
                                                <Ratings.Widget widgetHoverColor="orange" />
                                            </Ratings>
                                        </div>
                                        <div className="modal-footer">

                                            <button type="button" className="btn btn-primary" onClick={() => this.saveRate(job.inviterUser)}>Save changes</button>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    )

                })}
                {this.state.pastSubs.map(sub => {

                    return (
                        <div key={sub.date}>
                            <Link to={`/dashboard/find/searched/${sub.invitee}`} >{sub.invitee}</Link>
                            <p>{sub.date}</p>

                            <button type="button"  className="btn btn-primary" data-toggle="modal" data-target={`#${sub.date}${sub.invitee}`}>
                                Rate</button>


                            <div className="modal fade" id={`${sub.date}${sub.invitee}`} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog" role="document">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="exampleModalLabel">Rate {sub.inviteeName}</h5>

                                        </div>
                                        <div className="modal-body">
                                            <Ratings
                                                rating={this.state.rating}
                                                widgetRatedColors="orange"
                                                changeRating={this.changeRating}
                                            >
                                                <Ratings.Widget widgetHoverColor="orange" />
                                                <Ratings.Widget widgetHoverColor="orange" />
                                                <Ratings.Widget widgetHoverColor="orange" />
                                                <Ratings.Widget widgetHoverColor="orange" />
                                                <Ratings.Widget widgetHoverColor="orange" />
                                            </Ratings>
                                        </div>
                                        <div className="modal-footer">

                                            <button type="button" className="btn btn-primary" onClick={() => this.saveRate(sub.invitee)}>Save changes</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Past
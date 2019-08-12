import React from "react"
import API from "../utils/API"
import { Link, } from "react-router-dom"
import Ratings from 'react-ratings-declarative';


class Past extends React.Component {
    state = {
        pastJobs: [],
        pastSubs: [],
        inviterUser: '',
        rating: 0,
        count: 0
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

    saveRate = (event, inviter, invitee, date) => {
        event.persist()
        let rating = this.state.rating
        console.log(date)
        API.updateRate( inviter, rating, date).then(res => {
            console.log(res.data)
            let id = event.target.id
            console.log(id)
            let button = document.getElementById(id)
            button.disabled = true

        })
        API.buttonClicked(invitee,date).then(res =>{
            console.log(res.data)
        })
    }

    saveRate2 = (inviter, invitee,date) => {
        let rating = this.state.rating
        API.updateRate(invitee, rating).then(res => {
            console.log(res.data)
            let id = inviter + invitee + 'butt' + date
            console.log(id)
            let button = document.getElementById(id)
            button.disabled = true
        })
        API.buttonClicked2(inviter, date).then(res =>{
           console.log(res.data)
        })
    }


    render() {
        
        return (
            <div>
                <h1>Past for: {window.localStorage.getItem('userName')}</h1>
                {this.state.pastJobs.map(job=> {
                       
                    return (
                        <div key={job.date}>
                            <Link to={`/dashboard/find/searched/${job.inviterUser}`} >{job.inviter}</Link>
                            <p>{job.date}</p>

                            <button type="button" data-date={job.date} data-inviter={job.inviterUser} data-invitee={job.invitee} disabled={job.buttonClicked? true: false} id={`${job.inviterUser}${job.invitee}butt${job.date}`} className="btn btn-primary" data-toggle="modal" data-target={`#${job.inviterUser}${job.invitee}`}>
                                Rate
                             </button>


                            <div className="modal fade" id={`${job.inviterUser}${job.invitee}`} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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

                                            <button type="button"  className='btn btn-primary' id={`${job.inviterUser}${job.invitee}${job.date}butt`} onClick={(event) => this.saveRate(event, job.inviterUser, job.invitee, job.date)}>Save changes</button>
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

                            <button type="button" disabled={sub.buttonClicked? true: false} id={`${sub.inviterUser}${sub.invitee}butt`} className="btn btn-primary" data-toggle="modal" data-target={`#${sub.inviterUser}${sub.invitee}`}>
                                Rate</button>


                            <div className="modal fade" id={`${sub.inviterUser}${sub.invitee}`} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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

                                            <button type="button" className="btn btn-primary" onClick={() => this.saveRate2(sub.inviterUser, sub.invitee, sub.date)}>Save changes</button>
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
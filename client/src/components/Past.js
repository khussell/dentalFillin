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

    saveRate = (event, inviter, invitee, id) => {
        event.persist()
        let rating = this.state.rating
        console.log(id)
        
        API.updateRate( inviter, rating, id).then(res => {
            console.log(res.data)
           

        })

        let buttonId = id + "button"
            
            let button = document.getElementById(buttonId)
            button.disabled = true
            
        API.buttonClicked(invitee, id).then(res =>{
            console.log(res.data)
        })
    }

    saveRate2 = (event, inviter, invitee, id) => {
        event.persist()
        let rating = this.state.rating
        API.updateRate(invitee, rating, id ).then(res => {
            console.log(res.data)
            
        })
        let buttonId = id + "button"
            
        let button = document.getElementById(buttonId)
        button.disabled = true

        API.buttonClicked2(inviter, id).then(res =>{
           console.log(res.data)
        })
    }


    render() {
        
        return (
            <div>
                <h1>Past for: {window.localStorage.getItem('userName')}</h1>
                {this.state.pastJobs.map(job=> {
                       
                    return (
                        <div key={job.id}>
                            <Link to={`/dashboard/find/searched/${job.inviterUser}`} >{job.inviter}</Link>
                            <p>{job.date}</p>

                            <button type="button" disabled={job.buttonClicked? true: false} id={`${job.id}button`} className="btn btn-primary" data-toggle="modal" data-target={`#${job.id}`}>
                                Rate
                             </button>


                            <div className="modal fade" id={`${job.id}`} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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

                                            <button type="button"  className='btn btn-primary'  onClick={(event) => this.saveRate(event, job.inviterUser, job.invitee, job.id)}>Save changes</button>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    )

                })}
                {this.state.pastSubs.map(sub => {
                   
                    return (
                        <div key={sub.id}>
                            <Link to={`/dashboard/find/searched/${sub.invitee}`} >{sub.invitee}</Link>
                            <p>{sub.date}</p>

                            <button type="button" disabled={sub.buttonClicked? true: false} id={`${sub.id}button`} className="btn btn-primary" data-toggle="modal" data-target={`#${sub.id}`}>
                                Rate</button>


                            <div className="modal fade" id={`${sub.id}`} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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

                                            <button type="button" className="btn btn-primary" onClick={(event) => this.saveRate2(event, sub.inviterUser, sub.invitee, sub.id)}>Save changes</button>
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
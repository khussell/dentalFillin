import React from "react"
import API from "../utils/API"
import { Link, } from "react-router-dom"


class Past extends React.Component {
    state = {
        pastJobs: [],
        pastSubs: [],
        inviterUser: ''
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
        API.findUserInfo(userName).then(res => {
            console.log(res.data)
            this.setState({ inviterUser: res.data.userName })
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

                            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                                Rate
</button>


                            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog" role="document">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="exampleModalLabel">Rate {job.inviterUser}</h5>
                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div className="modal-body">
                                            ...
      </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                            <button type="button" className="btn btn-primary">Save changes</button>
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

                            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                                Rate
</button>


                            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog" role="document">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="exampleModalLabel">Rate {sub.invitee}</h5>
                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div className="modal-body">
                                            ...
      </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                            <button type="button" className="btn btn-primary">Save changes</button>
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
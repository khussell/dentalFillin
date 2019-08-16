import React from 'react'
import API from '../utils/API';
import {Link} from 'react-router-dom'
import '../css/upcoming.css'



class Upcoming extends React.Component{
    state={
          currentSubs: [],
          currentJobs: [],
          inviterUser: ''
    }

    componentDidMount = () => {
        let userName= window.localStorage.getItem('userName')
       
        API.findUpcoming(userName).then(res=> {
            let isSub = window.localStorage.getItem('sub')
            if(isSub === "true"){
                this.setState({currentJobs: res.data[0].currentJobs})
            }else{
                this.setState({currentSubs: res.data[0].currentSubs})
            }
        })
     

    }

    //userName is acutally officeName
    findUserInfo = (userName) =>{
        API.findUserInfo2(userName).then(res =>{
            console.log(res.data)
            this.setState({inviterUser: res.data.userName})
        })
    }

    makePast = (past =>{
        
      API.makePast(past).then(res =>{
          console.log(res.data)
      })
    })




    render(){
        console.log(this.state)
        
        return(
            <div className='allUpcoming col text-center'>
              <h4 className='upcomingTitle'>Your Upcoming Jobs</h4>
              <div className="upcomingJobs">
              {this.state.currentJobs.length === 0? <p>No current upcoming jobs.</p>: this.state.currentJobs.map(job => {
                  //this.findUserInfo(job.inviter)
                    return(
                        <div className='upcomingJob' key={job.id}>
                            <Link to={`/dashboard/find/searched/${job.inviterUser}`} style={{color: 'white'}}>{job.inviter}</Link>
                            <p>{job.date}</p>
                            <Link to={`/dashboard/past`} className="btn didItBtn btn-primary" onClick={() => this.makePast(job)}>Did it!</Link>
                        </div>
                    )
             
            })}
           {this.state.currentSubs.length === 0? <p>No current upcoming subs.</p> : this.state.currentSubs.map(sub => {
               
                    return(
                        <div className='upcomingJob' key={sub.id}>
                            <Link to={`/dashboard/find/searched/${sub.invitee}`} style={{color: 'white'}}>{sub.invitee}</Link>
                            <p>{sub.date}</p>
                            <Link to={`/dashboard/past`} className="btn didItBtn btn-primary" onClick={()=>this.makePast(sub)}>Did it!</Link>
                        </div>
                    )
               })}
               </div>
            </div>
        )
    }
}

export default Upcoming
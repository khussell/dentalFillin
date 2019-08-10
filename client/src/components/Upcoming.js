import React from 'react'
import API from '../utils/API';
import {Link} from 'react-router-dom'



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
        API.findUserInfo(userName).then(res =>{
            console.log(res.data)
            this.setState({inviterUser: res.data.userName})
        })
    }


done = () =>{
    console.log('done')
}

    render(){
        console.log(this.state)
        
        return(
            <div>
              <h1>Upcoming for: {window.localStorage.getItem('userName')}</h1>
              {this.state.currentJobs.map(job => {
                  this.findUserInfo(job.inviter)
                    return(
                        <div key={job.date}>
                            <Link to={`/dashboard/find/searched/${this.state.inviterUser}`} >{job.inviter}</Link>
                            <p>{job.date}</p>
                            <Link to={`/dashboard/find/searched/${this.state.inviterUser}`} >Did it!</Link>
                        </div>
                    )
             
            })}
           {this.state.currentSubs.map(sub => {
               
                    return(
                        <div key={sub.date}>
                            <Link to={`/dashboard/find/searched/${sub.invitee}`} >{sub.invitee}</Link>
                            <p>{sub.date}</p>
                            <Link to={`/dashboard/find/searched/${sub.invitee}`} onClick={this.done}>Did it!</Link>
                        </div>
                    )
               })}
            </div>
        )
    }
}

export default Upcoming
import React from 'react'
import API from '../utils/API'

class SearchedUser extends React.Component {
    state = {
        user: []
    }
    componentDidMount = () => {
        console.log(this.props.history.location.pathname)
        console.log(`${this.props.match.url}`)
        API.findUser(this.props.history.location.pathname).then(res => {
            console.log(res.data)
            this.setState({
                firstName: res.data.firstName,
                lastName: res.data.lastName,
                userName: res.data.userName,
                password: res.data.password,
                sub: res.data.sub,
                photo: res.data.photo,
                location: res.data.location,
                yearsExp: res.data.yearsExp,
                about: res.data.about,
                anesthesia: res.data.anesthesia,
                nitrous: res.data.nitrous,
                avail:res.data.avail,
                officeName: res.data.officeName,
                doctors: res.data.doctors,
                datesNeeded: res.data.datesNeeded,
                kindOfPerson:res.data.kindOfPerson,
                starRating: res.data.starRating,
                howManyTimesSubbed: res.data.howManyTimesSubbed,
                howManySubsHaveYouHad: res.data.howManySubsHaveYouHad,
                pastJobs: res.data.pastJobs,
                currentJobs:res.data.currentJobs,
                pastSubs: res.data.pastSubs,
                currentSubs: res.data.currentSubs,
                searchParams: res.data.searchParams
            })
        })
    }

    render() {

        return (
            <div>{this.state.userName}</div>
        )
    }
}

export default SearchedUser
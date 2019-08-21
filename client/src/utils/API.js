import axios from "axios"

export default {
    
    saveUser: function(userData){
        return axios.post("/api/users", userData)
    },

    getUsers: function(){
        return axios.get("/api/users")
    },

    loginInput: function(userInput){
        return axios.post('/login', userInput)
    },

    loggedInUserInfo: function(){
        return axios.get('/hello')
    },

    getAllOffices: function(){
        return axios.get('/api/users/allOffices')
    },

    getAllSubs: function(){
        return axios.get('/api/users/allSubs')
    },

    getAllOfficesFromDate: function(date){
       
        return axios.post('/api/users/allOfficesFromDate', {
                date: date
            }
         )
    },

    getAllSubsFromDate: function(date){
        return axios.post('/api/users/allSubsFromDate', {
                date : date
            }
        )
    },

    findUser: function(url){
        let queryUrl = "/api/users" + url
        console.log(queryUrl)
        return axios.get(queryUrl)
    },

    inviteUser: function(info){
       return axios.post('/invite', {info: info})
      
    },

    putInviteIntoOffice: function(info){
        return axios.post('/putInvite', {info: info})
       
     },
     
     findInvites: function(userName){
         return axios.post('/findInvites', {userName: userName})
     },

     findUserInfo: function(userName){
        return axios.post('/findUserName', {userName: userName})
    },
     
    acceptedInvite: function(invite){
        return axios.post('/acceptedInvite', {invite : invite})
    },

    findUpcoming: function(userName){
        let url = `/findUpcoming/${userName}`
        return axios.get(url)
    },

    makePast: function(past){
        return axios.post('/makePast', {past: past})
    },

    findUserInfo2: function(userName){
        return axios.post('/findUserName2', {userName: userName})
    },

    findUserInfo3: function(userName){
        return axios.post('/findUserName2', {userName: userName})
    },

    updateRate: function(userName, rating, id){
        let info = {
            userName: userName,
            rating: rating,
            id: id
        }
        return axios.post('/updateRate', {info: info})
    },

    updateRate2: function(userName, rating, id){
        let info = {
            userName: userName,
            rating: rating,
            id: id
        }
        return axios.post('/updateRate2', {info: info})
    },

    buttonClicked: function(userName, id){
        let info={
            userName: userName,
            id: id
        }
        return axios.post('/buttonClicked', {info: info})
    },

    buttonClicked2: function(userName, id){
        let info={
            userName: userName,
            id: id
        }
        return axios.post('/buttonClicked2', {info: info})
    },

    email: function(emailInfo){
        return axios.post('/email', {emailInfo: emailInfo})
    },

    updateUserInfo: function(userName, info){
        let data={
            userName: userName,
            info: info
        }
        console.log(data)
        return axios.post('updateUser', {info: data})
    }
    
}
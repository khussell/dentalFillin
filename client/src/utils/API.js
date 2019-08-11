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
    
}
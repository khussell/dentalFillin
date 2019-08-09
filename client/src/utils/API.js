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
    }
}
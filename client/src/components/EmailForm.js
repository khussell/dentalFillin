import React from "react"
import API from "../utils/API";



class EmailForm extends React.Component {

    email = () => {
        let title = document.getElementById('emailTitle').value
        let message = document.getElementById('emailMessage').value

        let emailInfo ={
            title: title,
            message: message
        }

        API.email(emailInfo).then(res =>{
            console.log(res.data)
        })
    }

    render() {
        
        return (
            <div>
                <form>
                    <label>Title:</label>
                    <input id="emailTitle" type="text"/>
                    <label>Message:</label>
                    <textarea id="emailMessage"></textarea>
                    <button onClick={this.email}>Submit</button>
                </form>
            </div>
        )
    }
}

export default EmailForm
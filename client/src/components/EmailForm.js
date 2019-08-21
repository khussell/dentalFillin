import React from "react"
import API from "../utils/API";
import '../css/emailForm.css'


class EmailForm extends React.Component {

    email = () => {
        let title = document.getElementById('emailTitle').value
        let message = document.getElementById('emailMessage').value

        let emailInfo = {
            title: title,
            message: message
        }

        API.email(emailInfo).then(res => {
        })
    }

    render() {

        return (
            <div>
                <form className="col text-center email">
                    <label className="col text-center">Title:</label>
                    <input id="emailTitle" type="text" />
                    <label className="col text-center">Message:</label>
                    <textarea id="emailMessage"></textarea>
                    <button className=" emailBtn btn btn-info" onClick={this.email}>Submit</button>
                </form>
            </div>
        )
    }
}

export default EmailForm
import React from "react"



class EmailForm extends React.Component {
    render() {
        return (
            <div>
                <form>
                    <label>Title:</label>
                    <input type="text"/>
                    <label>Message:</label>
                    <textarea></textarea>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default EmailForm
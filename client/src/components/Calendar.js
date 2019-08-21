import 'flatpickr/dist/themes/material_blue.css'
import React from "react"

import Flatpickr from 'react-flatpickr'
import { Component } from 'react'

class App extends Component {
  constructor() {
    super();

    this.state = {
      avail: new Date()
    };
  }


  render() { 
    const  avail  = this.props.avail;
    return (
      <Flatpickr 
        id='dates'
        value={avail}
        onChange={avail => {this.props.handleDate(avail)}} 
        options={{
            mode: "multiple",
            dateFormat: "Y-m-d"
        }}
        />
    )
  }
}

export default App
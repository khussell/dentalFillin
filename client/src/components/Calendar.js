import 'flatpickr/dist/themes/material_blue.css'
import React from "react"

import Flatpickr from 'react-flatpickr'
import { Component } from 'react'

class App extends Component {
  constructor() {
    super();

    this.state = {
      date: new Date()
    };
  }

  render() {
    const { date } = this.state;
    return (
      <Flatpickr 
        value={date}
        onChange={date => { this.setState({date}) }} 
        options={{
            mode: "multiple",
            dateFormat: "Y-m-d"
        }}
        />
    )
  }
}

export default App
import 'flatpickr/dist/themes/material_blue.css'
import React from "react"

import Flatpickr from 'react-flatpickr'
import { Component } from 'react'

class StaticCalendar extends Component {
    constructor() {
        super();

        this.state = {
            avail: new Date()
        };
    }


    render() {
       
        
        
        const parseDates = function(arr){
            let needed=[]
            for (let i = 0; i < arr.length; i++) {
                let splitStr = arr[i].split('')
                
                
                for (let j = 0; j < splitStr.length; j++) {
                    if (splitStr[j] === "T") {
                        let fixedDate =splitStr.slice(0, 10)
                        let join =fixedDate.join('')
                         needed.push(join)
                        
                    }
                }

            }
            return needed
        }
        const correctDates = parseDates(this.props.dates)

        console.log(parseDates(this.props.dates))

        

        return (
            <Flatpickr
                options={{
                    mode: "multiple",
                    dateFormat: "Y-m-d",
                    defaultDate: correctDates,
                    inline: true,
                    allowInput: false,
                    disable: [],
                    enable: correctDates,
                }}
            />
        )
    }
}

export default StaticCalendar
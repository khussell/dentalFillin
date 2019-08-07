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
        let dates;
        const isSub = window.localStorage.getItem('sub')
        if(isSub){
            dates = window.localStorage.getItem('avail')
        }else{
            dates = window.localStorage.getItem('datesNeeded')
        }
        let arr = dates.split(",")
        
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
        const correctDates = parseDates(arr)

        console.log(parseDates(arr))

        

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
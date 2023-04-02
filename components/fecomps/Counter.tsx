"use client"

import React, { useEffect, useState } from 'react'

type Props = {
  number: any
  duration: number
}

const Count = (props: Props) => {
    // label of counter
    // number to increment to
    // duration of count in seconds
    const {number, duration } = props
  
    // number displayed by component
    const [count, setCount] = useState("0")
  
    useEffect(() => {
      let start = 0;
      // first three numbers from props
      const end = parseInt(number.substring(0,3))
      // if zero, return
      if (start === end) return;
  
      // find duration per increment
      let totalMilSecDur = duration;
      let incrementTime = (totalMilSecDur / end) * 1000;
  
      // timer increments start counter 
      // then updates count
      // ends if start reaches end
      let timer = setInterval(() => {
        start += 1;
        setCount(String(start) + number.substring(3))
        if (start === end) clearInterval(timer)       
      }, incrementTime);
  
      // dependency array
    }, [number, duration]);
  
    return (
        <div>
          <p className='text-6xl mb-2 text-white font-bold not-italic'>{count}</p>
          <p>of 100</p>
        </div>
    );
  }
  
  export default Count;
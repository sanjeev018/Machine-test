import React, { useEffect, useState } from 'react'

const DigitalClock = () => {
    const [time, setTime] = useState(new Date());
    useEffect(()=> { 
        const interValid = setInterval(()=> { 
            setTime(new Date()); 
        },1000);
        return ()=> { 
            clearInterval(interValid); 
        }
    }, []); 

    function formatTime(){ 
        let hours = time.getHours(); 
        let minutes = time.getMinutes(); 
        let seconds = time.getSeconds(); 
        const meridiem = hours >= 12 ? "PM" : "AM" ;

        hours = hours % 12 || 12; 

        return `${addZero(hours)}:${addZero(minutes)}:${addZero(seconds)}:${meridiem}`
    }

    function addZero(number : number){ 
        return (number < 10 ? "0" : "") + number;
        }
       
  return (
    <div className=''>
      <span>{formatTime()}</span>
    </div>
  )
}

export default DigitalClock

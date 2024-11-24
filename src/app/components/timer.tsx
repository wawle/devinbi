"use client"
import { useEffect } from "react";


const Timer = () => {

    // count-down timer


useEffect(() => {
    let dest = new Date("dec 31, 2024 23:59:59").getTime();
      setInterval(function () {
        const now = new Date().getTime();
        const diff = dest - now;
        // Check if the countdown has reached zero or negative
        if (diff <= 0) {
          // Set the destination date to the same day next month
          const nextMonthDate = new Date();
          nextMonthDate.setMonth(nextMonthDate.getMonth() + 1);
      
          // If the current month is December, set the destination date to the same day next year
          if (nextMonthDate.getMonth() === 0) {
            nextMonthDate.setFullYear(nextMonthDate.getFullYear() + 1);
          }
      
          dest = nextMonthDate.getTime();
          return; // Exit the function
        }
      
        let days:any = Math.floor(diff / (1000 * 60 * 60 * 24));
        let hours:any = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes:any = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        let seconds:any = Math.floor((diff % (1000 * 60)) / 1000);
      
        if (days < 10) {
          days = `0${days}`;
        }
      
        if (hours < 10) {
          hours = `0${hours}`;
        }
        if (minutes < 10) {
          minutes = `0${minutes}`;
        }
        if (seconds < 10) {
          seconds = `0${seconds}`;
        }
      
        // Get elements by className name
        const countdownElements = document.getElementsByClassName("countdown-element");
      
        // Loop through the elements and update their content
        for (let i = 0; i < countdownElements.length; i++) {
          const classNameName = countdownElements[i].classList[1]; // Get the second className name
          switch (classNameName) {
            case "days":
              countdownElements[i].innerHTML = days;
              break;
            case "hours":
              countdownElements[i].innerHTML = hours;
              break;
            case "minutes":
              countdownElements[i].innerHTML = minutes;
              break;
            case "seconds":
              countdownElements[i].innerHTML = seconds;
              break;
            default:
              break;
          }
        }
      }, 10);
    }, [])
  return (
    <div className="flex items-start justify-center w-full gap-2 count-down-main">
    <div className="timer flex flex-col gap-0.5">
        <div className="">
            <h3 className="countdown-element days text-center text-white text-2xl font-bold font-manrope leading-9"></h3>
        </div>
        <p className="text-center text-gray-500 text-xs font-normal leading-normal w-full">DAYS</p>
    </div>
    <h3 className="w-3 text-center text-gray-500 text-2xl font-medium font-manrope leading-9">:</h3>
    <div className="timer flex flex-col gap-0.5">
        <div className="">
            <h3 className="countdown-element hours text-center text-white text-2xl font-bold font-manrope leading-9"></h3>
        </div>
        <p className="text-center text-gray-500 text-xs font-normal leading-normal w-full">HRS</p>
    </div>
    <h3 className="w-3 text-center text-gray-500 text-2xl font-medium font-manrope leading-9">:</h3>
    <div className="timer flex flex-col gap-0.5">
        <div className="">
            <h3 className="countdown-element minutes text-center text-white text-2xl font-bold font-manrope leading-9"></h3>
        </div>
        <p className="text-center text-gray-500 text-xs font-normal leading-normal w-full">MINS</p>
    </div>
    <h3 className="w-3 text-center text-gray-500 text-2xl font-medium font-manrope leading-9">:</h3>
    <div className="timer flex flex-col gap-0.5">
        <div className="">
            <h3 className="countdown-element seconds text-center text-white text-2xl font-bold font-manrope leading-9"></h3>
        </div>
        <p className="text-center text-gray-500 text-xs font-normal leading-normal w-full">SECS</p>
    </div>
</div>
  )
}

export default Timer
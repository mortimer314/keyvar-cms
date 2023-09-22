import React, { useRef } from 'react';
import { useState, useEffect } from 'react';

export default function Testimer() {
    //   const [days, setDays] = useState(0);
    //   const [hours, setHours] = useState(0);
    //   const [minutes, setMinutes] = useState(0);
    //   const [seconds, setSeconds] = useState(0);

    //   const deadline = "December, 31, 2022";

    //   const getTime = () => {
    //     const time = Date.parse(deadline) - Date.now();

    //     setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    //     setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    //     setMinutes(Math.floor((time / 1000 / 60) % 60));
    //     setSeconds(Math.floor((time / 1000) % 60));
    //   };

    //   useEffect(() => {
    //     const interval = setInterval(() => getTime(deadline), 1000);

    //     return () => clearInterval(interval);
    //   }, []);

    //   return (
    //     <div className="timer"><p id="second">{seconds < 10 ? "0" + seconds : seconds}</p>
    //     </div>
    //   );

    // ========================================================


    // const [seconds, setSeconds] = useState(0);
    // useEffect(() => {
    //     const interval = setInterval(() => setSeconds(prevS => prevS + 1), 1000);

    //     return () => clearInterval(interval);
    // }, []);


    // return (
    //         <div className="timer"><p id="second">{seconds < 10 ? "0" + seconds : seconds}</p><br />
    //         {seconds}
    //         </div>
    //       );

    // const [seconds, setSeconds] = useState(0);
    // const [rerender, setRerender] = useState(false);
    // const refCounter = useRef(0);
    // const refElem = useRef();

    // useEffect(() => {
    //     // const interval = setInterval(() => setSeconds(prevS => prevS + 1), 1000);
    //     // const interval = setInterval(() => setSeconds(prevS => prevS + 1), 1000);
    //     // setInterval(() => refCounter.current +=1 , 1000);
    //     // refElem.current.innerHTML = refCounter.current
    //     // return () => clearInterval(interval);
    // });


    // return (
    //     <div ref={refElem} className="timer">
    //         {/* <p id="second">{seconds < 10 ? "0" + seconds : seconds}</p><br />
    //         {seconds} */}

    //     </div>    );

    
    // ==========================================================================

    //     const [num, setNum] = useState(100);
    //   const [pause, setPause] = useState(false);

    //   let intervalRef = useRef();

    //   const decreaseNum = () => setNum((prev) => prev - 1);

    //   useEffect(() => {
    //     intervalRef.current = setInterval(decreaseNum, 1000);

    //     return () => clearInterval(intervalRef.current);
    //   }, []);

    //   const handleClick = () => {
    //     if (!pause) {
    //       clearInterval(intervalRef.current);
    //     } else {
    //       intervalRef.current = setInterval(decreaseNum, 1000);
    //     }
    //     setPause((prev) => !prev);
    //   };

    //   return (
    //     <div>
    //       <div>{num}</div>
    //       <button onClick={handleClick}>{pause ? "Run" : "Pause"}</button>
    //     </div>
    //   );
};


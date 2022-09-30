import { useEffect, useRef, useState } from "react";


const StopWatch = () => {

    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);

    let stopWatchId;
    
    const resumeRef = useRef();

    useEffect(() => {
        resumeRef.current.disabled = true;
    }, []);

    useEffect(() => {
            stopWatchId = setInterval(() => {
                setSeconds(seconds + 1);
                if(seconds === 59){
                    setMinutes(minutes + 1);
                    setSeconds(0);
                }
            }, 1000);

        return () => {
            clearInterval(stopWatchId);
        }
    });

    const stopTimer = () => {
        clearInterval(stopWatchId);
        resumeRef.current.disabled = false;
    };

    const resumeTimer = () => {
        resumeRef.current.disabled = true;
        stopWatchId = setInterval(() => {
            setSeconds(seconds + 1);
            if(seconds === 59){
                setMinutes(minutes + 1);
                setSeconds(0);
            }
        }, 1000);
    };

    const restart = () => {
        setSeconds(0);
        setMinutes(0);
    };

    return (
        <div>
            <h1>StopWatch</h1>

            <h1>
                {minutes < 10 ? '0' + minutes : minutes }:
                {seconds < 10 ? '0' + seconds : seconds}
            </h1>

            <button onClick={stopTimer}>Stop</button>
            <button onClick={resumeTimer} ref={resumeRef}>Resume</button>
            <button onClick={restart}>Restart</button>
        </div>
    );
};

export default StopWatch;
import styles from "./Countdown.module.css";
import {useState, useEffect} from "react";

function Countdown() {
    const [day, setDay] = useState("00");
    const [hour, setHour] = useState("00");
    const [minutes, setMinutes] = useState("00");
    const [seconds, setSeconds] = useState("00");

    const currentYear = new Date().getFullYear();
    const endDate = new Date(`March 14 ${currentYear} 00:00:00`) // 66 days from 6 January
    
    useEffect(() => {
        const int = setInterval(() => {
            const currentTime = new Date();
            const diff = endDate - currentTime;
            
            const d = Math.floor(diff / 1000 / 60 / 60 / 24);
            const h = Math.floor(diff / 1000 / 60 / 60) % 24;
            const m = Math.floor(diff / 1000 / 60) % 60;
            const s = Math.floor(diff / 1000) % 60;

            setDay(d);
            setHour(h);
            setMinutes(m);
            setSeconds(s);
        }, 1000)

        return () => {
            clearInterval(int);
        }
    }, [])


    return (
        <div className={styles.countDownWrapper}>
            <div>
                <h1>{day < 10 ? "0" + day : day}</h1>
                <p>Days</p>
            </div>
            <div>
                <h1>{hour < 10 ? "0" + hour : hour} </h1>
                <p>Hours</p>
            </div>
            <div>
                <h1>{minutes < 10 ? "0" + minutes : minutes}</h1>
                <p>Minutes</p>
            </div>
            <div>
                <h1>{seconds < 10 ? "0" + seconds : seconds}</h1>
                <p>Seconds</p>
            </div>
        </div>
    )
}

export default Countdown

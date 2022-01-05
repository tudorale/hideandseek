import styles from './Nft.module.css'
import {useEffect, useState} from "react";

function Nft(props) {

    const mouseOver = (h,s) =>{
        let hide = document.querySelector(`.${h}`);
        let seek = document.querySelector(`.${s}`);
        if(hide && seek) {
            hide.style.opacity = "0";
            hide.style.zIndex = "-1";
            seek.style.zIndex = "999";
            seek.style.opacity = "1";
        }
    }

    const mouseOut = (h,s) =>{
        let hide = document.querySelector(`.${h}`);
        let seek = document.querySelector(`.${s}`);
        if(hide && seek) {
            hide.style.opacity = "1";
            hide.style.zIndex = "999";
            seek.style.zIndex = "-1";
            seek.style.opacity = "0";
        }
    }

    const [classOne, setClassOne] = useState("");
    const [classTwo, setClassTwo] = useState("");
    useEffect(() => {
        setClassOne(`btn${Math.floor(Math.random() * 999999)}`);
        setClassTwo(`btn${Math.floor(Math.random() * 999999)}`)
    }, [])

    return (
        <div className={styles.NftWrapper}>
            <img src={`${props.src}`} alt={`${props.name}`} />
            <p>{props.name}</p>

            <p className={styles.hide + " " + classOne} onMouseOver={() => mouseOver(classOne, classTwo)}>Hide</p>
            <a className={styles.seek + " " + classTwo} onMouseOut={() => mouseOut(classOne, classTwo)}
               target="_blank" 
               rel="noreferrer"
               href="https://twitter.com/intent/tweet?text=Hello%20world"
               data-size="large">
                Seek
            </a>
        </div>
    )
}

export default Nft

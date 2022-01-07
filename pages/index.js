import styles from "../styles/Home.module.css"
import Countdown from "../components/Countdown/Countdown"

function index() {
    return (
        <div className={styles.homepage}>
            <img alt="banner" className={styles.bannerOne} src="/images/banner2.png"/>

            <div className={styles.countdownWrapper}>
                <Countdown />
            </div>

            <div className={styles.wrapper}>
                <img alt="roadmap" className={styles.roadmap} src="/images/roadmaplogo.png"/>
            </div>

            <div className={styles.roadmapText}>
                <p>1) First 66 Boogle owners have 66 days to Seek their Peek-a-Boogle</p>
                <p>2) We are same-same, but different… but still same</p>
            </div>
        </div>
    )
}

export default index

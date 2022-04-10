import styles from './Clock.module.scss'

interface IProps {
    timeInSeconds: number | undefined
}

export default function Clock({ timeInSeconds = 0 }: IProps) {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    const [minutesTen, minutesUnity] = String(minutes).padStart(2, '0');
    const [secondsTen, secondsUnity] = String(seconds).padStart(2, '0');

    return (
        <>
            <span className={styles.clockNumber}>{minutesTen}</span>
            <span className={styles.clockNumber}>{minutesUnity}</span>
            <span className={styles.clockDivision}>:</span>
            <span className={styles.clockNumber}>{secondsTen}</span>
            <span className={styles.clockNumber}>{secondsUnity}</span>
        </>
    )
}
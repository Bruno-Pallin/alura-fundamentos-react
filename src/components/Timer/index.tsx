import Clock from './Clock';
import Button from '../Button';
import style from './Timer.module.scss';
import { timeToSeconds } from '../../common/utils/time';
import { ITask } from '../../types/task';
import { useEffect, useState } from 'react';

interface IProps {
    selectedTask: ITask | undefined
    finishTask: () => void
}

export default function Timer({ selectedTask, finishTask }: IProps) {
    const [time, setTime] = useState<number>();

    useEffect(() => {
        if (selectedTask?.time) setTime(timeToSeconds(selectedTask.time));
    }, [selectedTask])

    function regressiveTimer(counter: number = 0) {
        setTimeout(() => {
            if (counter > 0) {
                setTime(counter - 1);
                return regressiveTimer(counter - 1);
            }
            finishTask();
        }, 1000)
    }

    return (
        <div className={style.timer}>
            <p className={style.title}>Pick a card and start the timer</p>
            <div className={style.clockWrapper}>
                <Clock timeInSeconds={time} />
            </div>
            <Button onClick={() => {
                regressiveTimer(time);
            }}>
                Start
            </Button>
        </div>
    )
}
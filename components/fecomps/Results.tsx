import React from 'react'
import styles from '@/styles/ResultsSummary.module.css';

type Props = {
    scores: any
}

export default function Results({scores}: Props) {
    const getNumbers = (data: any) => {
        let scoreArr = [];
        for (let i = 0; i < data.length; i++) {
            scoreArr.push(data[i].score);
        }

        return scoreArr;
    }

    const average = (array: number[]) => array.reduce((a: number,b: number) => a+b) / array.length;

    const message = (total: any) => {
        if (total < 75) {
            return "Okay"
        } else if (total >= 75) {
            return "Great"
        }
    }

    console.log(average(getNumbers(scores)))

    return (
        <div className={styles.mainCard}>
            <div className={styles.grid}>
                <div className={styles.rectangle}>
                    <h2>Your Result</h2>
                    <div className={styles.circle}>
                        <h3 className={`text-7xl ${styles.number} font-bold`}>{average(getNumbers(scores)).toFixed()}</h3>
                    </div>
                    <h1>{message(average(getNumbers(scores)).toFixed())}</h1>
                    <p>You scored higher than 65% of the people who have taken these tests.</p>
                </div>
                <div className={styles.rectangle}>
                    <h2 className='text-left w-full font-bold text-2xl pt-7 mb-6'>Summary</h2>
                    {scores.map((item: any, index: React.Key | null | undefined) => (
                        <div key={index} className={styles.individual}>
                                <h3 className='font-medium ju'>{item.title}</h3>
                                <p>{item.score} / 100</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

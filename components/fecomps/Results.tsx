import React from 'react'
import styles from '@/styles/ResultsSummary.module.css';
import Link from 'next/link';
import Counter from './Counter';

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

    return (
        <div className={styles.mainCard}>
            <div className={styles.grid}>
                <div className={styles.rectangle}>
                    <h2>Your Result</h2>
                    <div className={styles.circle}>
                        <Counter number={average(getNumbers(scores)).toFixed()} duration={0.5} />
                    </div>
                    <h1>{message(average(getNumbers(scores)).toFixed())}</h1>
                    <p>You scored higher than 65% of the people who have taken these tests.</p>
                </div>
                <div className={styles.rectangle}>
                    <h2 className='text-left w-full font-bold text-2xl pt-7 mb-6'>Summary</h2>
                    {scores.map((item: any, index: React.Key | null | undefined) => (
                        <div key={index} className={styles.individual}>
                            <div className={styles.content}>
                                {item.title == "Reaction" 
                                    ? <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20"><path stroke="#F55" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25" d="M10.833 8.333V2.5l-6.666 9.167h5V17.5l6.666-9.167h-5Z"/></svg> 
                                    : item.title == "Memory" 
                                        ? <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20"><path stroke="#FFB21E" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25" d="M5.833 11.667a2.5 2.5 0 1 0 .834 4.858"/><path stroke="#FFB21E" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25" d="M3.553 13.004a3.333 3.333 0 0 1-.728-5.53m.025-.067a2.083 2.083 0 0 1 2.983-2.824m.199.054A2.083 2.083 0 1 1 10 3.75v12.917a1.667 1.667 0 0 1-3.333 0M10 5.833a2.5 2.5 0 0 0 2.5 2.5m1.667 3.334a2.5 2.5 0 1 1-.834 4.858"/><path stroke="#FFB21E" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25" d="M16.447 13.004a3.334 3.334 0 0 0 .728-5.53m-.025-.067a2.083 2.083 0 0 0-2.983-2.824M10 3.75a2.085 2.085 0 0 1 2.538-2.033 2.084 2.084 0 0 1 1.43 2.92m-.635 12.03a1.667 1.667 0 0 1-3.333 0"/></svg> 
                                        : item.title == "Verbal"
                                            ? <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20"><path stroke="#00BB8F" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25" d="M7.5 10h5M10 18.333A8.333 8.333 0 1 0 1.667 10c0 1.518.406 2.942 1.115 4.167l-.699 3.75 3.75-.699A8.295 8.295 0 0 0 10 18.333Z"/></svg>
                                            : item.title == "Visual"
                                                ? <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20"><path stroke="#1125D6" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25" d="M10 11.667a1.667 1.667 0 1 0 0-3.334 1.667 1.667 0 0 0 0 3.334Z"/><path stroke="#1125D6" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25" d="M17.5 10c-1.574 2.492-4.402 5-7.5 5s-5.926-2.508-7.5-5C4.416 7.632 6.66 5 10 5s5.584 2.632 7.5 5Z"/></svg>
                                                : ""
                                }
                                <h3 className='font-medium px-2'>{item.title}</h3>
                                <p className='ml-auto'>{item.score} / 100</p>
                            </div>
                        </div>
                    ))}
                    <Link href={'/frontend-mentor'} className={styles.button}>
                        Continue
                    </Link>
                </div>
            </div>
        </div>
    )
}

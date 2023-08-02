"use client"
import React, { useEffect, useState } from 'react'

export default function Countdown({data}: any) {
    const [timeLeft, setTimeLeft] = useState({ days: '00', hours: '00', minutes: '00', seconds: '00' });

    useEffect(() => {
        const interval = setInterval(() => {
            const targetTime = new Date(data.launch.launchAt).getTime();
            const currentTime = new Date().getTime();
            const timeDifference = targetTime - currentTime;
        
            if (timeDifference > 0) {
                const days = String(Math.floor(timeDifference / (1000 * 60 * 60 * 24))).padStart(2, '0');
                const hours = String(Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0');
                const minutes = String(Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
                const seconds = String(Math.floor((timeDifference % (1000 * 60)) / 1000)).padStart(2, '0');
        
                setTimeLeft({ days, hours, minutes, seconds });
            } else {
                clearInterval(interval);
            }
        }, 1000);
    
        return () => clearInterval(interval);
    }, [data.launch.launchAt]);

    const timeComponents = [
        { label: 'Days', value: timeLeft.days },
        { label: 'Hours', value: timeLeft.hours },
        { label: 'Minutes', value: timeLeft.minutes },
        { label: 'Seconds', value: timeLeft.seconds },
    ];
    

    return (
        <div className='w-full h-full flex flex-col items-center mt-40 absolute top-0 z-50 px-2 space-y-10'>
            <h1 className='text-xl uppercase tracking-[0.25em] text-center'>We're launching soon!</h1>
            <div className='w-full flex gap-4 mx-4 justify-center items-center'>
                {timeComponents.map((component) => (
                    <div key={component.label}>
                        <div className='relative w-[4.5rem] h-[4.5rem] md:h-28 md:w-28 bg-count-black shadow shadow-count-very-dark-blue'>
                            <div className='bg-count-dark-desaturated-blue/50 absolute top-0 w-full h-1/2 rounded-md' />
                            <div className='bg-count-dark-desaturated-blue absolute bottom-0 w-full h-1/2 rounded-md' />
                            <p className='text-count-soft-red text-4xl md:text-6xl text-center absolute flex justify-center items-center w-full h-full'>
                                {component.value}
                            </p>
                        </div>
                        <p className='mt-2 tracking-widest text-xs font-thin text-count-gray-blue uppercase text-center'>
                            {component.label}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}

# Frontend Mentor - Launch countdown timer solution

This is a solution to the [Launch countdown timer challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/launch-countdown-timer-N0XkGfyz-). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- See hover states for all interactive elements on the page
- See a live countdown timer that ticks down every second (start the count at 14 days)

### Screenshot

![](/public/images/countdown.png)
![](/public/images/countdown-mobile.png)


### Links

- Solution URL: [https://github.com/briannelson95/briannelson.dev/blob/main/components/fecomps/Countdown.tsx](https://github.com/briannelson95/briannelson.dev/blob/main/components/fecomps/Countdown.tsx)
- Live Site URL: [https://www.briannelson.dev/frontend-mentor/launch-countdown](https://www.briannelson.dev/frontend-mentor/launch-countdown)

## My process

### Built with

- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [Sanity.io](https://sanity.io/) - CMS to handle date input
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

I learned how to translate a date that is in Zulu time (2023-08-11T20:52:00.000Z) and convert it into the users local time. This was a really fun challenge, the style wasn't hard to put together but the function of a time input and then counting down was fun to work with.

```tsx
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
```

## Author

- Website - [Brian Nelson](https://www.briannelson.dev)
- Frontend Mentor - [@briannelson95](https://www.frontendmentor.io/profile/briannelson95)

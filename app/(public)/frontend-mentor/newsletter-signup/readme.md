# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](/public/images/newsletter-signup.png)
![](/public/images/newsletter-mobile.png)

### Links

- Solution URL: [https://github.com/briannelson95/briannelson.dev/blob/main/components/fecomps/Newsletter.tsx](https://github.com/briannelson95/briannelson.dev/blob/main/components/fecomps/Newsletter.tsx)
- Live Site URL: [https://www.briannelson.dev/frontend-mentor/newsletter-signup](https://www.briannelson.dev/frontend-mentor/newsletter-signup)

## My process

This was one of the quickest challenges I've completed for Frontend Mentor. I started with the mobile design as I'm using TailwindCSS and it's much easier to work mobile and then make adjustments for desktop. The part that took me the longest was validating the email address to be in the correct format. I haven't worked with RegEx a lot so I found a [resource](https://www.tutorialspoint.com/regex-in-reactjs) that explained how I could do this and I'll post the code below.

```tsx
    const validEmail = new RegExp(
        '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$'
    );

    const validate = (e: any) => {
        e.preventDefault()
        if (!validEmail.test(email)) {
            setEmailErr(true)
        } else {
            setEmailErr(false)
            setSuccess(true)
        }
    }
```

### Built with

- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- Flexbox
- CSS Grid
- Mobile-first workflow


## Author

- Website - [Brian Nelson](https://www.briannelson.dev)
- Frontend Mentor - [@briannelson95](https://www.frontendmentor.io/profile/briannelson95)


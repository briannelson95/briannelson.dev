# Frontend Mentor - Results Summary Component Solution

This is my solution for the Result [Summary Component by Frontend Mentor](https://www.frontendmentor.io/challenges/results-summary-component-CE_K6s0maV) 

## Table of Contents

- [Overview](#overview)
    - [Screenshot](#screenshot)
    - [Links](#links)
- [My Process](#my-process)
    - [Built With](#built-with)
    - [What I Learned](#what-i-learned)
    - [Resources](#resources)
- [Author](#author)

## Overview

This challenge was a little tougher than the last. I decided to add this to my existing NextJS application of my portfolio. This means I was also able to fetch data from my Sanity.io CMS. 

### Screenshot

![](images/frontend-mentor-results-summary.png)
![](image/results-summary-mobile.png)

### Links

- [Solution URL](https://github.com/briannelson95/briannelson.dev/blob/main/components/fecomps/Results.tsx)
- [Live Site URL](https://www.briannelson.dev/frontend-mentor/results-summary)

## My Process

This solution took me longer than I expected mostly because of lack of free time, but I did decide to build this out onto an existing nextjs application of my portfolio website. I needed to first change around the structure to allow for the additional pages to be worked on as a clean slate. I'm using the NextJS 13 app directory which allows me to use `(group)` layouts. I moved my main portfolio (along with the root layout with my navigation) to a subfolder `(main)`. Now I have another folder at the same level as `(main)` titled `frontend-mentor` which has its own `layout.tsx` file.

I should have built mobile first and then converted to desktop but now I know for next time. I will also switch to using tailwind for all styling on my next challenge too.


### Built With

- NextJS
    - App Dir
- Sanity.io
- CSS Modules
- Tailwind CSS
- HTML Semantics
- Flexbox
- Grid

### What I Learned

I learned that background gradients need to use the `background-image` css property and to transition to a gradient on hover, you need to use the `::before` property.

```css
.button {
    width: 100%;
    position: relative;
    background-image: var(--result-dark-blue-gradient);
    color: var(--results-white);
    border-radius: 999px;
    padding: 1rem;
    margin: 2rem;
    transition: background-color 300ms;
    z-index: 1;
}

.button::before {
    position: absolute;
    content: "";
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: var(--results-background-gradient);
    z-index: -1;
    transition: opacity 200ms linear;
    opacity: 0;
    border-radius: 999px;
}

.button:hover::before {
    opacity: 1;
}
```

### Resources

- [Calculating average of an array](https://stackoverflow.com/questions/29544371/finding-the-average-of-an-array-using-js)
- [Linear gradient transition on hover](https://developer.mozilla.org/en-US/docs/Learn/CSS/Howto/Transition_button)
- [JS counter](https://dev.to/cooljasonmelton/building-an-animated-counter-with-react-and-css-59ee)

## Author

- Website - [Brian Nelson](https://www.briannelson.dev)
- Frontend Mentor - [@briannelson95](https://www.frontendmentor.io/profile/briannelson95)
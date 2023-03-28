# Frontend Mentor - QR code component solution

This is a solution to the [QR code component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/qr-code-component-iux_sIO_H). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

This is my solution to the QR Code Component from Frontend Mentor. This is the first challenge I took on since joining this program.

### Screenshot

![](./screenshot.png)

### Links

- Solution URL: [https://github.com/briannelson95/frontend-mentor/tree/main/qr-code-component-main](https://briannelson95.github.io/frontend-mentor/qr-code-component-main/https://github.com/briannelson95/frontend-mentor/tree/main/qr-code-component-main) 
- Live Site URL: [https://briannelson95.github.io/frontend-mentor/qr-code-component-main/](https://briannelson95.github.io/frontend-mentor/qr-code-component-main/)

## My process

Before starting the code for this project I brought the preview images provided into [penpot](https://penpot.app/) to recreate the elements. This allowed me to get a better understanding of font sizes, margins and paddings. 

I started this project by creating a [styles.css](https://github.com/briannelson95/frontend-mentor/blob/main/qr-code-component-main/styles.css) file and adding all of the properties that are specified in the style guide. I utilized the `var()` css property to set all the custom colors.

After setting all my css variables I got started on the html semantics. I decided that this component would be a single `div` inside the `main`. Inside the card div I sectioned off the image and text into their own divs to better style them.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow

### What I learned

To see how you can add code snippets, see below:

```css
:root {
  --theme-white: hsl(0, 0%, 100%);
  --theme-gray: hsl(212, 45%, 89%);
  --theme-gray-blue: hsl(220, 15%, 55%);
  --theme-dark-blue: hsl(218, 44%, 22%);
  font-family: 'Outfit', sans-serif;
}
```

## Author

- Website - [Brian Nelson](https://www.briannelson.dev)
- Frontend Mentor - [@briannelson95](https://www.frontendmentor.io/profile/briannelson95)
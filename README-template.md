# Frontend Mentor - Mortgage Repayment Calculator

This is my solution to the [Mortgage Repayment Calculator challenge](https://www.frontendmentor.io/challenges/mortgage-repayment-calculator-Galx1LXK73) on Frontend Mentor.

The project was built to practice React, SCSS, form handling, calculations, and responsive frontend development.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
  - [AI collaboration](#ai-collaboration)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- Enter mortgage information and calculate their monthly repayments and total repayment.
- See validation messages when required fields are incomplete or invalid.
- Choose between repayment and interest-only mortgage types.
- Complete the form using only their keyboard.
- View a responsive layout across different screen sizes.
- See hover and focus states for interactive elements.

### Screenshot

![Mortgage Repayment Calculator screenshot](./screenshot.jpg)

*Replace `screenshot.jpg` with the filename of your actual screenshot if it is different.*

### Links

- Solution URL: [Add your Frontend Mentor solution URL](https://www.frontendmentor.io/)
- Live Site URL: [Add your deployed project URL](https://your-live-site-url.com)
- GitHub Repository: [View source code](https://github.com/Selessawy01/mortgage-calculator)

## My process

### Built with

- Semantic HTML5
- React
- JavaScript (ES6+)
- SCSS / Sass
- CSS custom properties
- Flexbox
- CSS Grid
- CSS `clamp()` for fluid sizing
- CSS `:focus-visible` and `:has()` selectors
- React Hooks (`useState`)
- Vite
- Mobile-first workflow

### What I learned

This project helped me improve my understanding of React and how to organize form logic, manage state, and pass data between components.

**1. Managing form state in React**

I used `useState` to manage the mortgage inputs and validation errors. I also practiced passing callback functions between components to share calculated results.

**2. Form validation**

I implemented custom validation to check that the required fields contain valid values before performing the calculation. I also learned how to display error messages and apply error styles dynamically.

**3. Mortgage calculations**

I learned how to calculate monthly repayments using the mortgage repayment formula and how the calculation differs for repayment and interest-only mortgages.

For a repayment mortgage, the monthly payment is calculated using:

\[
M = P \frac{r(1+r)^n}{(1+r)^n-1}
\]

Where:

- `P` is the mortgage principal.
- `r` is the monthly interest rate.
- `n` is the total number of monthly payments.

I also handled the special case of a zero-interest mortgage to avoid division by zero.

**4. Component communication**

I separated the form and results into different React components. I used props and callback functions to pass calculated values from the form to the results section.

**5. Accessibility**

I practiced improving accessibility by using semantic HTML, labels, fieldsets, keyboard focus indicators, ARIA attributes, and screen reader testing with Windows Narrator.

**6. Responsive SCSS**

I improved my use of Flexbox and CSS Grid, responsive breakpoints, and `clamp()` to create a layout that adapts to different screen sizes.

### Continued development

I want to continue improving my skills in:

- React component architecture and reusable components.
- Managing and organizing state in larger React applications.
- Form validation and accessible error handling.
- Accessibility testing with different screen readers.
- Writing clean, maintainable SCSS.
- Improving responsive layouts and CSS architecture.

### Useful resources

- [React Documentation](https://react.dev/) - Helped me understand React components, state, and props.
- [MDN Web Docs](https://developer.mozilla.org/) - Useful reference for JavaScript, CSS, HTML, and accessibility.
- [Sass Documentation](https://sass-lang.com/documentation/) - Helped me work with SCSS and organize stylesheets.
- [Frontend Mentor](https://www.frontendmentor.io/) - Provided the design challenge and an opportunity to practice building a realistic project.

### AI collaboration

I used ChatGPT as a learning and debugging assistant throughout this project.

I mainly used it to:

- Understand React concepts such as state, props, and callback functions.
- Debug form validation and mortgage calculation logic.
- Review my SCSS structure and responsive layouts.
- Improve keyboard accessibility and screen reader support.
- Understand the reasoning behind code changes rather than simply copying solutions.

I wrote and implemented the project myself, using AI guidance to understand problems, explore solutions, and improve my code.

## Author

- GitHub - [@Selessawy01](https://github.com/Selessawy01)
- Frontend Mentor - [Add your Frontend Mentor profile](https://www.frontendmentor.io/)

## Acknowledgments

Thanks to Frontend Mentor for providing the challenge and design. Also, thanks to the learning resources and guidance that helped me work through the challenges and improve my understanding of React and frontend development.
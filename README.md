# Frontend Mentor - Social proof section solution

This is a solution to the [Social proof section challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/social-proof-section-6e0qTv_bA). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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
- [Author](#author)

## Overview

### The challenge

The challenge was to build a static HTML page to test my skills in Grid and Flexbox, and to make it responsive for both mobile and desktop (not for tablet). The user can't interact with it, as it's meant to showcase a testimonial section for viewing purposes.

### Screenshot

![Mobile design](/public/images/social-proof-section-mobile.png)

![Desktop design](/public/images/social-proof-section-desktop.png)

### Links

- Solution URL: [https://github.com/ronald-it/social-proof-section](https://github.com/ronald-it/social-proof-section)
- Live Site URL: [https://ronald-it.github.io/social-proof-section/](https://ronald-it.github.io/social-proof-section/)

## My process

### Built with

- Semantic HTML5 markup
- CSS (globals) and SCSS (modules and variables) for styling
- Flexbox
- CSS Grid
- Mobile-first workflow
- [Next.js](https://nextjs.org/) - React framework
- [Styled Components](https://styled-components.com/) - For FontLoader component

### What I learned

In this project, I chose to practice CSS Grid after completing the Grid Critters game. I used Grid for both the mobile and desktop designs, but the implementation was relatively straightforward. While I demonstrated that I can set up a simple grid in CSS, I plan to take on more complex challenges to further hone my Grid skills.

Regarding CSS, everything felt natural to me, and there wasn't much new to learn. However, I did learn how to correctly deploy this challenge on GitHub Pages. This involved creating a FontLoader component to handle the base path for the font declaration and configuring the base path in the Next.js configuration. Ensuring that images are displayed correctly on both localhost and GitHub Pages was another important aspect I addressed. This required setting the base path in a custom image component.

Additionally, this was the first time in a long while that I used standard CSS and SCSS instead of Tailwind. I refreshed my knowledge of SCSS, including concepts like BEM (Block Element Modifier), nesting, using & for BEM naming, mixins, breakpoints, and variables.

```css
/* 1. SCSS code for a responsive grid layout */
.main {
  &__grid {
    display: grid;
    grid: repeat(3, 1fr) / min;
    grid-row-gap: 3rem;
  }
}
```

```scss
/* 2. Example of SCSS nesting and BEM */
.main {
  padding: 5rem 1.5rem;

  &__content-wrapper {
    display: flex;
    justify-content: space-between;
  }

  &__title {
    color: $dark-purple;
    text-align: center;
  }

  &__description {
    color: $light-purple;
    text-align: center;
    line-height: 1.5;
  }
}
```

```scss
/* 3. Variables and mixins in SCSS */

// Colors
$dark-purple: hsl(300, 43%, 22%);
$pink: hsl(333, 80%, 67%);

// Breakpoints
$desktop: 1440px;

// Mixin for desktop-specific styles
@mixin for-desktop {
  @media (min-width: #{$desktop}) {
    @content;
  }
}
```

```js
// 4. Snippet from FontLoader component
useEffect(() => {
  const fontUrl = `${basePath}/fonts/LeagueSpartan-VariableFont_wght.ttf`;

  const style = document.createElement("style");
  style.textContent = `
    @font-face {
      font-family: 'League Spartan';
      src: url('${fontUrl}') format('truetype');
      font-weight: 400 500 700;
      font-style: normal;
      font-display: swap;
    }
  `;
  document.head.appendChild(style);

  return () => {
    document.head.removeChild(style);
  };
}, []);
```

```js
// 5. Setting base path in CustomImage
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

return <Image {...props} src={`${basePath}${src}`} alt={alt} />;
```

```js
// 6. Next.js configuration for correct base path on GitHub Pages
const nextConfig = {
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
  reactStrictMode: true,
  output: "export",
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: process.env.NODE_ENV === 'production' ? '/social-proof-section' : '',
  },
};

module.exports = nextConfig;
```

### Continued development

Advanced CSS Grid and Flexbox: While I have a good grasp of the basics, I want to explore more complex layouts and responsive design patterns using CSS Grid and Flexbox.

JavaScript for Interactivity: In this project, I used JavaScript primarily for configuration and to get the GitHub Pages deployment working. However, in future projects, I want to use JavaScript to add interactivity to the page itself, making it dynamic and responsive to user actions.

Tailwind CSS: For my next project, I plan to use Tailwind CSS to compare its utility-first approach with my experience using standard CSS and SCSS. This will help me understand the benefits and trade-offs of using utility-first CSS frameworks.

### Useful resources

- [Flexbox Zombies](https://mastery.games/flexboxzombies/) - This interactive game helped me understand Flexbox in a fun and engaging way. I really liked this learning method and will use similar resources going forward.
- [Grid Critters](https://gridcritters.com/) - This is an amazing game which helped me finally understand CSS Grid. I'd recommend it to anyone still learning this concept.

## Author

- Github - [ronald-it](https://github.com/ronald-it)
- Frontend Mentor - [ronald-it](https://www.frontendmentor.io/profile/ronald-it)
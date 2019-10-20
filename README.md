[![CircleCI](https://circleci.com/gh/qmixi/react-animated-bg.svg?style=svg)](https://circleci.com/gh/qmixi/react-animated-bg) [![Issues][issues-shield]][issues-url] [![npm](https://badgen.net/npm/dt/react-animated-bg)](https://www.npmjs.com/package/react-animated-bg) [![npm](https://badgen.net/npm/dm/react-animated-bg)](https://www.npmjs.com/package/react-animated-bg) [![MIT License][license-shield]][license-url]

<br />
<br />
<br />
<p align="center">
  <a href="https://github.com/qmixi/react-animated-bg">
    <img src="static/icon.png" alt="Logo" width="100" height="100">
  </a>

  <h2 align="center">React Animated Bg</h2>

  <p align="center">
    Strongly customizable React component helping you make animated background
    <br />
    <br />
    <a href="https://codesandbox.io/s/eloquent-cherry-udky9">View Demo</a>
    ·
    <a href="https://github.com/qmixi/react-animated-bg/issues">Report Bug</a>
    ·
    <a href="https://github.com/qmixi/react-animated-bg/issues">Request Feature</a>
  </p>
</p>
<br />

<!-- GETTING STARTED -->

## Getting Started

This component has been built to help you create customizable animated background. You can provide a list of colors, decide how long each color should be visible, set animation timing and its type. Thanks to simple and intuitive API you can create really amazing effects.

### Installation

With `npm`

```sh
npm install --save react-animated-bg
```

Or with `yarn`

```sh
yarn add react-animated-bg
```

<!-- USAGE EXAMPLES -->

## Usage

### Basic usage

The very basic usage is to just wrap your content in `AnimatedBg`. This component requires only one parameter - array of an `colors`. Colors can be passed in `hex`, `rgba` or any other system which is accepted by `background` CSS property.

```jsx
import React from "react";
import AnimatedBg from "react-animated-bg";

// by default delay = 0 and duration = 0.2s
const Wrapper = () => (
  <AnimatedBg colors={["red", "#ef4f03", "rgb(47, 53, 255)"]}>
    My element with animated BG
  </AnimatedBg>
);
```

### Set animation duration time and delay before the next animation starts

You can decide how long the duration of the animation will last. Furthermore, if you want the background to stay for some time before the next transition starts, you can set `delay` prop according to your needs. `duration` and `delay` take numeric value representing **seconds**.

```jsx
import React from "react";
import AnimatedBg from "react-animated-bg";

const Wrapper = () => (
  <AnimatedBg
    colors={["red", "salmon", "gold"]}
    duration={0.5}
    delay={4} // it will wait 4 seconds before next transition starts
    timingFunction="ease-out"
    className="section-styles"
  >
    <h2>Duration and Delay</h2>
    <p>
      Each color will be visible for 4 seconds and will change to another in
      500ms
    </p>
  </AnimatedBg>
);
```

### How the animation will behave?

Decide how the animation should behave. To make it happen all you have to do is set `timingFunction` property. By default, it's `linear`. but you can pass here any option from the list below.

> `ease`, `linear`, `ease-in`, `ease-out`, `ease-in-out`, `step-start`, `step-end`

```jsx
import React from "react";
import AnimatedBg from "react-animated-bg";

const Wrapper = () => (
  <AnimatedBg
    colors={["red", "salmon", "gold"]}
    duration={2}
    timingFunction="ease-out"
    className="section-styles"
  >
    <h2>ClassName and other props</h2>
  </AnimatedBg>
);
```

### Hoorah!! You can animate images too!

> ⚠️ Animating images doesn't work on **Firefox** since the browser doesn't support the transition for background-image. ⚠️

Because under the hood CSS `background` property is updating, the `colors` prop array can contain everything which is supported by CSS eg. `url('image.jpg)`. However eg. `linear-gradient` can't be animated this way. The example you can find in the [demo](https://codesandbox.io/s/eloquent-cherry-udky9)
> **Important:** Remember to wrap the images with the **url( )** formula.

```jsx
import React from "react";
import AnimatedBg from "react-animated-bg";

const Wrapper = () => {
  const imagesList = [
    'url("https://images.dog.ceo/breeds/labrador/n02099712_3503.jpg")',
    'url("https://images.dog.ceo/breeds/labrador/n02099712_5844.jpg")',
    'url("https://images.dog.ceo/breeds/labrador/n02099712_5343.jpg")',
    'url("https://images.dog.ceo/breeds/labrador/n02099712_7481.jpg")',
    'url("https://images.dog.ceo/breeds/labrador/n02099712_7414.jpg")'
  ];

  return (
    <AnimatedBg
      colors={imagesList}
      duration={2}
      delay={1}
      timingFunction="ease-out"
    >
      <div className="App">
        <h1>Animated images</h1>
        <h3>- duration: 2s</h3>
        <h3>- delay: 1s</h3>
        <h3>- transition type: ease-out</h3>
      </div>
    </AnimatedBg>
  );
};
```

### Choose the next background randomly

By default the background is changed according to the order given in the `colors` array. If you want you can change it to the random ordering by adding `randomMode` prop.

```jsx
import React from "react";
import AnimatedBg from "react-animated-bg";

const Wrapper = () => (
  <AnimatedBg
    colors={["pink", "green", "black"]}
    duration={5}
    delay={1}
    timingFunction="linear"
    randomMode
  >
    <h2>Random mode</h2>
    <p>Next background will be choosen randomly.</p>
  </AnimatedBg>
);
```

## This component takes following props

| Prop name      | Type                                                                                      | Required | Default value | Description                                                                                                         |
| -------------- | ----------------------------------------------------------------------------------------- | -------- |  -------- |  ------------------------------------------------------------------------------------------------------------------- |
| className      | string                                                                                    | false    | -    | The class name provided to the component. It takes CSS modules as well.                                             |
| colors         | array of colors/images                                                                           | true     | -    | Colors can be passed in a `hex`, `rgba` or any other system which is accepted by `background` CSS property.         |
| delay          | number (seconds)                                                                          | false    | **0**    |  It tells how long the current background should be displayed before it changes to the next one. |
| duration       | number (seconds)                                                                          | false    |  **0.2**    | It says how long the animation between one background and the other should last.              |
| timingFunction | string (`ease`, `linear`, `ease-in`, `ease-out`, `ease-in-out`, `step-start`, `step-end`) | false    | **linear**    | Defines how the transition between one background and another should behave.               |
| randomMode     | boolean                                                                         | false    | **false**    |  If you set it to true next color will be choosen randomly.                                  |

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->

## Contact

#### Author: [@qmixi](https://github.com/qmixi)

#### Project Link: [https://github.com/qmixi/react-animated-bg](https://github.com/qmixi/react-animated-bg)

#### Demo: [https://codesandbox.io/s/eloquent-cherry-udky9](https://codesandbox.io/s/eloquent-cherry-udky9)

[forks-shield]: https://img.shields.io/github/forks/qmixi/react-animated-bg.svg?style=flat-square
[forks-url]: https://github.com/qmixi/react-animated-bg/network/members
[issues-shield]: https://img.shields.io/github/issues/qmixi/react-animated-bg.svg?style=flat-square
[issues-url]: https://github.com/qmixi/react-animated-bg/issues
[license-shield]: https://img.shields.io/github/license/qmixi/react-animated-bg.svg?style=flat-square
[license-url]: https://github.com/qmixi/react-animated-bg/blob/master/LICENSE.txt

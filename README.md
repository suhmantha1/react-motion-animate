# react-motion-animate

> Animate react components as they scroll in and out of view

[![NPM](https://img.shields.io/npm/v/react-motion-animate.svg)](https://www.npmjs.com/package/react-motion-animate) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

![figure](https://raw.githubusercontent.com/suhmantha1/react-motion-animate/master/example.gif 'React motion scroll library example')

## demo

[See some animations in action](https://suhmantha1.github.io/react-motion-animate/)

## Install

```bash
npm install --save react-motion-animate
```

## Usage

```jsx
import React, { Component } from 'react'
import { MotionAnimate } from 'react-motion-animate'

class Example extends Component {
  render() {
    return (
      <MotionAnimate>
        <div>Component you want to animate</div>
      </MotionAnimate>
    )
  }
}
```

## Props

#### `<MotionAnimate>`

- `animation`: `fade` (default), `fadeInUp`, `scrollOpacity`, `scrollFadeIn`, `scrollFadeOut`, `scrollPosition`
- `variant`: custom animation definition (see built-in `animation` options above). See [framer docs](https://www.framer.com/api/motion/types/) for variant options. See example for `fadeInUp` variant:

```jsx
const fadeInUp = {
  hidden: {
    opacity: 0,
    y: 40
  },
  show: {
    opacity: 1,
    y: 0
  }
}
```

- `speed`: transition duration. Default: `0.3`
- `delay`: transition delay. Default: `0.2`
- `ease`: transition ease. Default `easeInOut`. See [framer docs](https://www.framer.com/api/animation/#tween.ease) for ease options
- `reset`: reset the transition after the component exits from view. Default: `false`
- `threshold`: amount of component that is visible in the viewport before the transition fires. Default: `0`. Accepts values from 0 to 1.0 (with 1.0 meaning 100% of component is visible)
- `scrollPositions`: trigger positions for scroll-based animations. Accepts array with percent values (0 - 1).
  - `scrollOpacity`. Accepts exactly 4 values. Default: `[0, 0.4, 0.6, 1]` ([start fade in, start being fully visible, end being fully visible, end fade out])
  - `scrollFadeIn`. Accepts exactly 2 values. Default: `[0, 0.4]`
  - `scrollFadeOut`. Accepts exactly 2 values. Default: `[0.7, 1]`
  - `scrollPosition`. Accepts exactly 2 values. Default: `[0, 1]`
- `xPos`, `yPos`: start and end positions for `scrollPosition` animation. Both accept array of exactly 2 values. Default: `[0, 0]`

## License

MIT © [Use All Five](https://github.com/useallfive)

Developers:
[Samantha Combs](https://github.com/suhmantha1)
[Ryan Gordon](https://github.com/supryan)

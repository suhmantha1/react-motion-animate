# react-motion-animate

> Animate react components as they scroll in and out of view

[![NPM](https://img.shields.io/npm/v/react-motion-animate.svg)](https://www.npmjs.com/package/react-motion-animate) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

![figure](https://raw.githubusercontent.com/suhmantha1/react-motion-animate/master/example.gif 'React motion scroll library example')

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

## Attributes

#### `<MotionAnimate>`

- `animation`: `fade` (default) or `fadeInUp` or `fadeInDown`
- `speed`: transition duration. Default: `0.3`
- `delay`: transition delay. Default: `0.2`
- `ease`: transition ease. Default `easeInOut`. See [framer docs](https://www.framer.com/api/animation/#tween.ease) for ease options
- `reset`: reset the transition after the component exits from view. Default: `false`
- `threshold`: amount of component that is visible in the viewport before the transition fires. Default: `0`. Accepts values from 0 to 1.0 (with 1.0 meaning 100% of component is visible)

## License

MIT © [Use All Five](https://github.com/useallfive)

Developers:
[Ryan Gordan](https://github.com/supryan)
[Samantha Combs](https://github.com/suhmantha1)

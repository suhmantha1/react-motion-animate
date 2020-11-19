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
- `reset`: reset the transition after the component exits from view. Default: `true`

## License

MIT © [Use All Five](https://github.com/useallfive)

Developers:
[Ryan Gordan](https://github.com/supryan)
[Samantha Combs](https://github.com/suhmantha1)

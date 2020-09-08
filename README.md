# React Sports Hooks

Get live sports scores in your React app for the MLB, NBA, and the NFL.

[![NPM](https://img.shields.io/npm/v/react-sports-hooks.svg)](https://www.npmjs.com/package/react-sports-hooks) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-sports-hooks
```

## Usage

```tsx
import React from 'react'

import { useScores } from 'react-sports-hooks'

const MyComponent = () => {
  const { scores } = useScores("mlb")

    return (
      ...
    )
}
```

## Options

You can pass in an options object as the second arg when you instantiate `useScores` that can take the following options:

- `updateIntervalSeconds` (number): How often the data is refreshed, default is 30 seconds.

### Example with Options

```tsx
import React from 'react'

import { useScores } from 'react-sports-hooks'

const MyComponent = () => {
  const { scores } = useScores("mlb", { updateIntervalSeconds: 3 })

    return (
      ...
    )
}
```

## License

MIT © [andrewrjohn](https://github.com/andrewrjohn)

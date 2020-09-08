# React Sports Hooks

> React hooks for live sports scores.

[![NPM](https://img.shields.io/npm/v/react-sports-hooks.svg)](https://www.npmjs.com/package/react-sports-hooks) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-sports-hooks
```

## Usage

```tsx
import React, { Component } from 'react'

import { useScores } from 'react-sports-hooks'

const MyComponent = () => {
  const { scores } = useScores("mlb")

    return (
      ...
    )
}
```

## License

MIT © [andrewrjohn](https://github.com/andrewrjohn)

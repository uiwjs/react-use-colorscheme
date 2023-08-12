React useColorScheme() Hook
===

[![Build & Deploy](https://github.com/uiwjs/react-use-colorscheme/actions/workflows/ci.yml/badge.svg)](https://github.com/uiwjs/react-use-colorscheme/actions/workflows/ci.yml)
[![Coverage Status](https://uiwjs.github.io/react-use-colorscheme/badges.svg)](https://uiwjs.github.io/react-use-colorscheme/coverage/lcov-report/)
[![NPM Version](https://img.shields.io/npm/v/@uiw/react-use-colorscheme.svg)](https://www.npmjs.com/package/@uiw/react-use-colorscheme)
[![react@^18](https://shields.io/badge/react-^18-green?style=flat&logo=react)](https://github.com/facebook/react/releases)

`useColorScheme()` is a tiny, zero-dependency, SSR hook for responding to devices color scheme changes.

## Quick Start

```bash
npm install @uiw/react-use-colorscheme
```

## Using

```jsx mdx:preview
import React from "react";
import { useColorScheme } from '@uiw/react-use-colorscheme';

export default function App() {
  const colorTheme = useColorScheme();
  return (
    <div>
      <h1 style={{ margin: 0 }}>useColorScheme</h1>
      <div>{colorScheme}</div>
    </div>
  );
}
```

## Contributors

As always, thanks to our amazing contributors!

<a href="https://github.com/uiwjs/react-use-colorscheme/graphs/contributors">
  <img src="https://uiwjs.github.io/react-use-colorscheme/CONTRIBUTORS.svg" />
</a>

Made with [contributors](https://github.com/jaywcjlove/github-action-contributors).

## License

Licensed under the MIT License.
# `react-md-renderer` [![NPM](https://img.shields.io/npm/v/react-md-renderer?style=for-the-badge)](https://www.npmjs.com/package/react-md-renderer)

> Simple batteries included rendering library for markdown files.

## Features

- :nail_care: **Stylized Defaults** \_Beautiful presentation of your content powered by [mui](https://www.npmjs.com/package/@material-ui/core)*
- :wrench: **Easily Customizable** _Exact same API as [markdown-to-jsx](https://www.npmjs.com/package/markdown-to-jsx)_
- :art: **Syntax Highlighting** - _Powered by [react-syntax-highlighter](https://www.npmjs.com/package/react-syntax-highlighter)_
- :book: **Semantic** _Meaningful html tags representing your content_

## Installation

#### With yarn

```sh
yarn add react-md-renderer
```

#### With NPM

```sh
npm install react-md-renderer
```

## Getting Started

```jsx
import { ReactMdRenderer } from 'react-md-renderer';

const MyComponent = () => {
  const options = {
    overrides: {
      img: {
        props: {
          style: {
            maxWidth: '100%',
            height: 'auto',
          },
          align: 'center',
        },
      },
    },
    wrapper: 'article',
    forceBlock: true,
  };

  return (
    <div>
      <ReactMdRenderer options={options}>
        {'# My Markdown Content'}
      </ReactMdRenderer>
    </div>
  );
};
```

## Docs

This component is essentially a custom config of `markdown-to-jsx`. It shares the same API so check out the `markdown-to-jsx` [docs](https://probablyup.com/markdown-to-jsx/) for options.

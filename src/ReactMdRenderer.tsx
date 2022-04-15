import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import ReactMarkdown, { MarkdownToJSX } from 'markdown-to-jsx';
import SyntaxHighlighter from 'react-syntax-highlighter';
import React from 'react';

const options = {
  overrides: {
    h1: {
      component: Typography,
      props: {
        gutterBottom: true,
        variant: 'h1',
      },
    },
    h2: {
      component: Typography,
      props: { gutterBottom: true, variant: 'h2' },
    },
    h3: {
      component: Typography,
      props: { gutterBottom: true, variant: 'h3' },
    },
    h4: {
      component: Typography,
      props: { gutterBottom: true, variant: 'h4' },
    },
    h5: {
      component: Typography,
      props: { gutterBottom: true, variant: 'h5' },
    },
    h6: {
      component: Typography,
      props: { gutterBottom: true, variant: 'h6' },
    },
    p: {
      component: Typography,
      props: { paragraph: true, variant: 'body1' },
    },
    a: { component: Link, props: { variant: 'body1' } },
    code: {
      component: SyntaxHighlighter,
      props: {
        customStyle: {
          display: 'inline',
          background: 'transparent',
          padding: '1.5px',
          color: '#474242',
        },
        wrapLongLines: true,
      },
    },
    img: {
      props: {
        style: {
          maxWidth: '100%',
          height: 'auto',
          pointerEvents: 'none',
          textAlign: 'center',
        },
        align: 'center',
      },
    },
  },
  forceBlock: true,
};

export const ReactMdRenderer = <P extends []>(md: string, ...props: P) => (
  <ReactMarkdown options={options as MarkdownToJSX.Options} {...props}>
    {md}
  </ReactMarkdown>
);

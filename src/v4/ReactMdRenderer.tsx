import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import ReactMarkdown, { MarkdownToJSX } from 'markdown-to-jsx';
import React from 'react';

const defaultOpts = {
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

type ReactMdRendererOpts = React.ComponentProps<typeof ReactMarkdown>;

/**
 * @name ReactMdRenderer
 * @description Render markdown string with stylized defaults. The default styles can be overridden with a custom options param
 * @param opts ReactMdRendererOpts
 * @returns JSX.Element
 */
export const ReactMdRenderer = (opts: ReactMdRendererOpts) => {
  const _opts = {
    ...opts,
    options: {
      ...opts.options,
      overrides: {
        ...defaultOpts.overrides,
        ...opts.options?.overrides,
      },
    } as MarkdownToJSX.Options,
  };

  return <ReactMarkdown {..._opts} />;
};

import defaultTheme from '@mdx-deck/themes';

export const colors = {
  purple: '#572d92',
  black: '#131515',
  white: '#FFF',
  grey: '#8D8D92',
  lilac: '#c9cae3',
  lightPurple: '#7d68af',
};

export const theme = {
  ...defaultTheme,
  font: '"Rubik", sans-serif',
  googleFont: 'https://fonts.googleapis.com/css?family=Rubik',
  colors: {
    text: colors.black,
    background: colors.lilac,
    link: colors.purple,
  },
  h1: {
    textAlign: 'left',
    color: colors.black,
  },
  h2: {
    textAlign: 'left',
    color: colors.purple,
    letterSpacing: '1px',
  },
  h3: {
    color: colors.purple,
    letterSpacing: '1px',
  },
  li: {
    fontSize: '1.5em',
    color: colors.purple,
  },
  a: {
    textDecoration: 'none',
  },
};

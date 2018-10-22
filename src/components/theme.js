// const breakpoints = {
//   /* tslint:disable:object-literal-sort-keys */
//   mobileS: 320,
//   mobileM: 375,
//   mobileL: 425,
//   tablet: 768,
//   laptop: 1024,
//   laptopL: 1440,
//   desktop: 2560,
//   /* tslint:enable:object-literal-sort-keys */
// };

// const createBreakpoint = (width: number) => `(min-width: ${width}px)`;

const theme = {
  font: {
    face: '"Lota Grotesque", Avenir, Arial, sans-serif',
    weights: {
      regular: 400,
      semiBold: 600,
    },
  },
  palette: {
    gray: {
        main: '#F9F9F9',
        20: '#CFCFCF',
        dark: '#585858',
        94: 'darken(#ffffff, 26%)',
    },
    blue: {
        main: '#0F69D0',
        dark: 'darken(#0F69D0, 5%)',
    }
  },
  sizes: {
    /* tslint:disable:object-literal-sort-keys */
    xxsmall: '0.5rem', // 8px
    xsmall: '0.75rem', // 12px
    small: '0.875rem', // 14px
    normal: '1rem', // 16px
    normedium: '1.25rem', // 20px
    medium: '1.5rem', // 24px
    large: '2rem', // 32px
    xlarge: '2.5rem', // 40px
    xxlarge: '4rem', // 64px
    xxxlarge: '5rem', // 80px
    /* tslint:enable:object-literal-sort-keys */
  },
  widths: {
    /* tslint:disable:object-literal-sort-keys */
    xxsmall: '25rem', // 400px  (4 column in design is 350)
    xsmall: '30rem', // 480px  (5 column in design is 445)
    small: '35rem', // 560px  (6 column in design is 540)
    medium: '40rem', // 640px  (7 column in design is 635)
    large: '45rem', // 720px  (8 column in design is 730)
    xlarge: '50rem', // 800px  (9 column in design is 825)
    /* tslint:enable:object-literal-sort-keys */
  },
};

export default theme;

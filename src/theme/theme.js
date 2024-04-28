const elements = {
  input: {
    border: {
      width: 2, // px
      radius: 9, // px
    },
  },
  inputRange: {
    thumb: {
      width: 15, // px
      height: 38, // px
    },
    track: {
      height: 10, // px
    },
  },
}

const lightTheme = {
  palette: {
    primary: '#fbed10',
    secondary: '#999999',
    tertiary: '#222',
    rgb: {
      primary: '251, 237, 16',
      shades: {
        secondary: {
          200: '238, 238, 238',
        },
      },
    },

    shades: {
      secondary: {
        100: '#FAFAFA',
        200: '#EEE',
      },
    },
  },

  elements,
}

export { lightTheme }

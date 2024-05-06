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
    settings: {
      min: 1,
      max: 12,
      defaultValue: 4,
    },
  },
}

const breakpoints = {
  xs: 320,
  s: 480,
  m: 640,
  l: 960,
  xl: 1200,
}

const lightThemeColors = {
  primary: '#fbed10',
  secondary: '#999',
  tertiary: '#222',
  basics: {
    white: '#fff',
  },
  shades: {
    gray: {
      100: '#fafafa',
      200: '#eee',
    },
  },

  filter: {
    iconCalendar: 'invert(12%) sepia(0%) saturate(1531%) hue-rotate(136deg) brightness(99%) contrast(96%)',
  },
  rgba: {
    boxShadow: {
      buttonChangeTheme: 'rgba(34, 34, 34, 0.3)',
    },
  },
}

const lightTheme = {
  palette: {
    logo: {
      icon: lightThemeColors.primary,
      title: lightThemeColors.tertiary,
    },

    bg: {
      primary: lightThemeColors.basics.white,
      secondary: lightThemeColors.shades.gray[100],
      gradient: {
        start: lightThemeColors.basics.white,
        end: lightThemeColors.shades.gray[100],
      },
    },

    label: {
      input: lightThemeColors.secondary,
      radio: lightThemeColors.tertiary,
      border: lightThemeColors.primary,

      hover: lightThemeColors.primary,
      active: lightThemeColors.primary,
    },

    input: {
      value: lightThemeColors.tertiary,
      border: lightThemeColors.shades.gray[200],

      focus: lightThemeColors.primary,
      span: lightThemeColors.secondary,

      checked: {
        radio: lightThemeColors.primary,
      },
      svg: {
        filter: lightThemeColors.filter.iconCalendar,
      },
    },

    inputRange: {
      thumb: {
        bg: lightThemeColors.basics.white,
      },
      gradient: {
        start: lightThemeColors.primary,
        end: lightThemeColors.shades.gray[200],
      },
      option: lightThemeColors.secondary,
    },

    inputDate: {
      iconCalendar: lightThemeColors.filter.iconCalendar,
    },

    list: {
      key: lightThemeColors.secondary,
    },

    histogram: {
      bg: {
        primary: lightThemeColors.basics.white,
        gradient: {
          start: lightThemeColors.basics.white,
          end: lightThemeColors.primary,
        },
      },
    },

    buttonSubmit: {
      text: {
        primary: lightThemeColors.primary,
        secondary: lightThemeColors.tertiary,
      },
      bg: {
        primary: lightThemeColors.primary,
        secondary: lightThemeColors.tertiary,
      },
      focus: {
        primary: lightThemeColors.tertiary,
        secondary: lightThemeColors.primary,
      },
    },

    buttonChangeTheme: {
      bg: {
        lightTheme: lightThemeColors.tertiary,
        darkTheme: lightThemeColors.primary,
      },
      thumb: {
        primary: lightThemeColors.shades.gray[100],
        boxShadow: lightThemeColors.rgba.boxShadow.buttonChangeTheme,
      },
      focus: lightThemeColors.primary,
    },

    output: {
      value: lightThemeColors.tertiary,
    },

    box: lightThemeColors.shades.gray[100],
  },

  elements,
  breakpoints,

  getParamsBackground,
  getParamsFocus,
  getParamsHistogramBackground,
  getParamsTrackBackground,
}

const darkThemeColors = {
  primary: '#4ecca3',
  secondary: '#fbfcff',
  tertiary: '#9aa2ad',

  basics: {
    white: '#fff',
  },

  shades: {
    gray: {
      100: '#fafafa',
      200: '#eee',
      600: '#393e46',
      800: '#232931',
    },
  },

  filter: {
    iconCalendar: 'invert(91%) sepia(0%) saturate(3634%) hue-rotate(200deg) brightness(91%) contrast(145%)',
  },

  rgba: {
    boxShadow: {
      buttonChangeTheme: 'rgba(251, 252, 255, 0.3)',
    },
  },
}

const darkTheme = {
  palette: {
    logo: {
      icon: darkThemeColors.primary,
      title: darkThemeColors.secondary,
    },

    bg: {
      primary: darkThemeColors.shades.gray[600],
      secondary: darkThemeColors.shades.gray[800],
      gradient: {
        start: darkThemeColors.shades.gray[600],
        end: darkThemeColors.shades.gray[800],
      },
    },

    label: {
      input: darkThemeColors.tertiary,
      radio: darkThemeColors.secondary,
      border: darkThemeColors.primary,
      hover: darkThemeColors.primary,
      active: darkThemeColors.primary,
    },

    input: {
      border: darkThemeColors.tertiary,
      value: darkThemeColors.secondary,
      focus: darkThemeColors.primary,
      span: darkThemeColors.tertiary,

      checked: {
        radio: darkThemeColors.primary,
      },

      svg: {
        filter: darkThemeColors.filter.iconCalendar,
      },
    },

    inputDate: {
      iconCalendar: darkThemeColors.filter.iconCalendar,
    },

    inputRange: {
      thumb: {
        bg: darkThemeColors.basics.white,
      },
      gradient: {
        start: darkThemeColors.primary,
        end: darkThemeColors.secondary,
      },
      option: darkThemeColors.tertiary,
    },

    buttonSubmit: {
      text: {
        primary: darkThemeColors.primary,
        secondary: darkThemeColors.shades.gray[200],
      },
      bg: {
        primary: darkThemeColors.primary,
        secondary: darkThemeColors.secondary,
      },
      focus: {
        primary: darkThemeColors.secondary,
        secondary: darkThemeColors.primary,
      },
    },

    buttonChangeTheme: {
      bg: {
        lightTheme: darkThemeColors.tertiary,
        darkTheme: darkThemeColors.secondary,
      },
      thumb: {
        primary: darkThemeColors.shades.gray[800],
        boxShadow: darkThemeColors.rgba.boxShadow.buttonChangeTheme,
      },

      focus: darkThemeColors.primary,
    },

    list: {
      key: darkThemeColors.tertiary,
    },

    histogram: {
      bg: {
        primary: darkThemeColors.secondary,
        gradient: {
          start: darkThemeColors.secondary,
          end: darkThemeColors.primary,
        },
      },
    },

    output: {
      value: darkThemeColors.secondary,
    },

    box: darkThemeColors.shades.gray[800],
  },

  elements,
  breakpoints,

  getParamsBackground,
  getParamsFocus,
  getParamsHistogramBackground,
  getParamsTrackBackground,
}

function getParamsFocus(elementType = 'input', inputColor) {
  const focusByType = this.palette[elementType].focus
  const paramsFocus = '5px solid'

  if (inputColor) {
    return paramsFocus.concat(focusByType[inputColor])
  } else {
    return paramsFocus.concat(focusByType)
  }
}

function getParamsBackground(xCoord) {
  return `linear-gradient(90deg, ${this.palette.bg.gradient.start} ${xCoord}px, ${this.palette.bg.gradient.end} 0)`
}

function getParamsHistogramBackground() {
  return `linear-gradient(0deg, ${this.palette.histogram.bg.gradient.start} 52.16%, ${this.palette.histogram.bg.gradient.end}  47.84%)`
}

function getParamsTrackBackground(xCoord) {
  return `linear-gradient(90deg, ${this.palette.inputRange.gradient.start} ${xCoord}%, ${this.palette.inputRange.gradient.end} 0)`
}

export { lightTheme, darkTheme }

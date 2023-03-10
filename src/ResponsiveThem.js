import React from 'react';
import {Dimensions, PixelRatio} from 'react-native';

const MAGIC_NUMBER = 375;
const WIDTH = Dimensions.get('window').width;

console.log(WIDTH);

export const constraintLayout = attributeSize => {
  return PixelRatio.roundToNearestPixel((attributeSize * WIDTH) / MAGIC_NUMBER);
};

const _theme = {
  fontSizes: {
    '2xs': 10,
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20,
    '2xl': 24,
    '3xl': 30,
    '4xl': 36,
    '5xl': 48,
    '6xl': 60,
    '7xl': 72,
    '8xl': 96,
    '9xl': 128,
  },
};

const customTheme = {
  space: {},
  sizes: {},
  fontSizes: {},
  fontConfig: {},
  fonts: {},
  config: {
    // Changing initialColorMode to 'dark'
    initialColorMode: 'dark',
  },
};

for (let i = 0; i <= 500; i++) {
  customTheme.space[i] = constraintLayout(i);
  customTheme.sizes[i] = constraintLayout(i);
}

for (key of Object.keys(_theme.fontSizes)) {
  customTheme.fontSizes[key] = constraintLayout(_theme.fontSizes[key]);
}

// console.log(theme);

export default customTheme;

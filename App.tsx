/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {extendTheme, NativeBaseProvider} from 'native-base';
import customTheme from './src/ResponsiveThem';
import MainScreen from './src/MainScreen';
import {MaskProvider} from './src/service/MaskContex';
function App(): JSX.Element {
  const theme = extendTheme(customTheme);

  return (
    <NativeBaseProvider theme={theme}>
      <MaskProvider>
        <MainScreen />
      </MaskProvider>
    </NativeBaseProvider>
  );
}

export default App;

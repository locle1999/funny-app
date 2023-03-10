import React from 'react';
import {Pressable, Box} from 'native-base';

export const CustomPressable = ({children, ...rest}) => {
  const {shadow = 0, onPress, isDisabled = false} = rest;
  return (
    <Pressable
      hitSlope={6}
      onPress={() => {
        if (isDisabled) {
          return;
        }

        onPress && onPress();
      }}>
      {({isPressed}) => {
        return (
          <Box
            shadow={isPressed && !isDisabled ? 4 : shadow}
            opacity={isDisabled ? 0.8 : 1}
            style={{
              transform: [
                {
                  scale: isPressed && !isDisabled ? 0.96 : 1,
                },
              ],
            }}
            {...rest}>
            {children}
          </Box>
        );
      }}
    </Pressable>
  );
};

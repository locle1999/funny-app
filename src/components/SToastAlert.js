import React from 'react';
import {VStack, HStack, Text, Alert, IconButton, CloseIcon} from 'native-base';

export const VARIANT_TOAST = {
  SOLID: 'solid',
  SUBTLE: 'subtle',
  LEFT_ACCENT: 'left-accent',
  TOP_ACCENT: 'top-accent',
  OUTLINE: 'outline',
};

export default SToastAlert = ({
  id,
  status,
  variant = VARIANT_TOAST.SOLID,
  title,
  description,
  isClosable,
}) => {
  return (
    <Alert
      opacity={0.9}
      maxWidth="97%"
      //  minHeight={94}
      alignSelf="center"
      flexDirection="row"
      status={status ? status : 'info'}
      variant={variant}>
      <VStack space={3} flexShrink={1} w="100%">
        <HStack
          flexShrink={1}
          px={6}
          alignItems="center"
          justifyContent="space-between">
          <HStack space={6} flexShrink={1} alignItems="center">
            <Alert.Icon size={18} />
            <Text
              fontSize="md"
              fontWeight="medium"
              flexShrink={1}
              color={
                variant === 'solid'
                  ? 'lightText'
                  : variant !== 'outline'
                  ? 'darkText'
                  : null
              }>
              {title}
            </Text>
          </HStack>
          {isClosable ? (
            <IconButton
              variant="unstyled"
              icon={<CloseIcon size="10" />}
              _icon={{
                color: variant === 'solid' ? 'lightText' : 'darkText',
              }}
              onPress={() => isClosable(id)}
            />
          ) : null}
        </HStack>
        <Text
          px="6"
          color={
            variant === 'solid'
              ? 'lightText'
              : variant !== 'outline'
              ? 'darkText'
              : null
          }>
          {description}
        </Text>
      </VStack>
    </Alert>
  );
};

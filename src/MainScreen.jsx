import {
  Box,
  Text,
  SafeArea,
  VStack,
  HStack,
  Image,
  Button,
  ScrollView,
} from 'native-base';
import {useState} from 'react';
import contents from '../data/funnycontent.json';
import images from './asset/images';
import {CustomPressable} from './components/CustomPressable';
import {VARIANT_TOAST} from './components/SToastAlert';
import {useMask} from './service/MaskContex';

export default function MainScreen() {
  const {showToastAlert} = useMask();
  const [joke, setJoke] = useState(contents[0]);
  const emptyArray = [];

  // check element
  function in_array(array, el) {
    for (var i = 0; i < array.length; i++) if (array[i] == el) return true;
    return false;
  }

  // random content
  function get_rand(array) {
    var rand = array[Math.floor(Math.random() * array.length)];
    if (!in_array(emptyArray, rand)) {
      emptyArray.push(rand);
      return rand;
    }
    return get_rand(array);
  }

  // vote not funny button
  const onPressVoteNotFunny = () => {
    setJoke(get_rand(contents));
    showToastAlert({
      placement: 'top',
      title: 'Sorry',
      variant: VARIANT_TOAST.LEFT_ACCENT,
      description: `So story is not funny`,
      status: 'infor',
    });
  };

  //vote funny button
  const onPressVoteFunny = () => {
    setJoke(get_rand(contents));
    showToastAlert({
      placement: 'top',
      title: 'Thanks you',
      variant: VARIANT_TOAST.LEFT_ACCENT,
      description: `Thank you for vote funny`,
      status: 'success',
    });
  };

  return (
    <Box w={'full'} h={'full'} bg="white" safeArea>
      {/* Header */}
      <HStack px={16} py={4} justifyContent={'space-between'}>
        <Image resizeMode="contain" alt="" h="70" w="70" source={images.logo} />
        <HStack alignItems={'center'}>
          <VStack mr={4}>
            <Text color={'dark.400'} fontSize={14}>
              Handicrafted by
            </Text>
            <Text
              fontWeight={400}
              textAlign="right"
              color={'dark.100'}
              fontSize={16}>
              Jim HLS
            </Text>
          </VStack>
          <Box
            alignItems={'center'}
            justifyContent="center"
            borderWidth={1}
            w={50}
            h={50}
            borderRadius={100}>
            <Image resizeMode="contain" w={25} h={26} source={images.account} />
          </Box>
        </HStack>
      </HStack>
      {/* Body */}
      <ScrollView>
        {/* Title */}
        <Box px={16} py={24} bg={'green.500'}>
          <Text textAlign={'center'} color={'white'} fontSize={25}>
            {joke.title}
          </Text>
        </Box>
        {/* content */}
        <VStack px={16} py={44} justifyContent={'space-around'}>
          <Text
            textAlign={'justify'}
            fontWeight={400}
            color={'dark.400'}
            fontSize={16}>
            {joke.content}
          </Text>
          <HStack mt={40} justifyContent={'space-around'}>
            <CustomPressable
              onPress={() => {
                onPressVoteFunny();
              }}>
              <Box bg="blue.400" p={8}>
                This is Funny!
              </Box>
            </CustomPressable>
            <CustomPressable
              onPress={() => {
                onPressVoteNotFunny();
              }}>
              <Box bg="green.500" p={8}>
                This is not Funny!
              </Box>
            </CustomPressable>
          </HStack>
        </VStack>
      </ScrollView>

      {/* Footer */}
      <Box w={'full'} h={1} bg={'dark.600'} />
      <Box px={16} py={8}>
        <VStack alignItems={'center'}>
          <Text textAlign={'center'} color={'dark.500'} fontSize={14}>
            This appis craeted as part of Hlsolutions pogram. The materials
            con-tained on this website are provided for greneral information
            only and do not constitute any from advice.HLS assumes no
            responsibility foe the accuracy of any particular statement and
            accepts no liability for any loss or damage which may arise from
            reliance on the information contained on this site.
          </Text>
          <Text mt={10} color={'dark.100'} fontWeight={400} fontSize={18}>
            Copyright 2021 HLS
          </Text>
        </VStack>
      </Box>
    </Box>
  );
}

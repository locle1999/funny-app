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

var index = 0;
export default function MainScreen() {
  const {showToastAlert} = useMask();
  const [joke, setJoke] = useState(contents[0]);
  const emptyArray = [];

  // vote not funny button
  const onPressVoteNotFunny = () => {
    if (index < contents.length) {
      showToastAlert({
        placement: 'top',
        title: 'Sorry',
        variant: VARIANT_TOAST.LEFT_ACCENT,
        description: `So story is not funny`,
        status: 'infor',
      });
      setJoke(contents[index++]);
    } else {
      showToastAlert({
        placement: 'top',
        title: 'Sorry',
        variant: VARIANT_TOAST.LEFT_ACCENT,
        description: "That's all the jokes for today! Come back another day!",
        status: 'infor',
      });
      setJoke(contents[contents.length - 1]);
    }
  };

  //vote funny button
  const onPressVoteFunny = () => {
    if (index < contents.length) {
      showToastAlert({
        placement: 'top',
        title: 'Thank you',
        variant: VARIANT_TOAST.LEFT_ACCENT,
        description: `Thank you for vote`,
        status: 'success',
      });
      setJoke(contents[index++]);
    } else {
      showToastAlert({
        placement: 'top',
        title: 'Sorry',
        variant: VARIANT_TOAST.LEFT_ACCENT,
        description: "That's all the jokes for today! Come back another day!",
        status: 'infor',
      });
      setJoke(contents[contents.length - 1]);
    }
  };

  return (
    <Box w={'full'} h={'full'} bg="white" safeArea>
      {/* Header */}
      <HStack px={16} justifyContent={'space-between'}>
        <Image resizeMode="contain" alt="" h="70" w="70" source={images.logo} />
        <HStack alignItems={'center'}>
          <VStack mr={4}>
            <Text color={'dark.400'} fontSize={12}>
              Handicrafted by
            </Text>
            <Text
              fontWeight={400}
              textAlign="right"
              color={'dark.100'}
              fontSize={13}>
              Jim HLS
            </Text>
          </VStack>

          <Image
            size={45}
            borderRadius={100}
            source={{
              uri: 'https://wallpaperaccess.com/full/317501.jpg',
            }}
            alt="Alternate Text"
          />
        </HStack>
      </HStack>
      {/* Body */}
      <ScrollView>
        {/* Title */}
        <Box px={30} py={48} bg={'green.500'}>
          <Text
            fontWeight={400}
            letterSpacing={'sm'}
            lineHeight="sm"
            textAlign={'center'}
            color={'white'}
            fontSize={22}>
            A joke a day keeps the doctor away
          </Text>
          <Text
            letterSpacing={'sm'}
            lineHeight="sm"
            fontWeight={500}
            mt={20}
            color={'white'}
            fontSize={13.5}>
            If you joke worong way, your theeth have to pay.(Serious)
          </Text>
        </Box>
        {/* content */}
        <VStack px={21} py={44} justifyContent={'space-around'}>
          <Text
            textAlign={'justify'}
            letterSpacing={'sm'}
            lineHeight="sm"
            fontWeight={500}
            color={'dark.400'}
            fontSize={16}>
            {joke.content}
          </Text>
          <HStack mt={80} justifyContent={'space-around'}>
            <Box />
            <CustomPressable
              onPress={() => {
                onPressVoteFunny();
              }}>
              <Box alignItems={'center'} w={120} bg="blue.500" p={6}>
                <Text fontWeight={500} fontSize={14}>
                  This is Funny!{' '}
                </Text>
              </Box>
            </CustomPressable>
            <CustomPressable
              onPress={() => {
                onPressVoteNotFunny();
              }}>
              <Box alignItems={'center'} w={120} bg="green.500" p={6}>
                <Text fontWeight={500} fontSize={14}>
                  This is not Funny{' '}
                </Text>
              </Box>
            </CustomPressable>
            <Box />
          </HStack>
        </VStack>
      </ScrollView>

      {/* Footer */}
      <Box w={'full'} h={1} bg={'dark.600'} />
      <Box px={10} py={8}>
        <VStack alignItems={'center'}>
          <Text
            letterSpacing={'sm'}
            textAlign={'center'}
            color={'dark.500'}
            fontWeight={600}
            fontSize={12.5}>
            This appis craeted as part of Hlsolutions pogram. The materials
            con-tained on this website are provided for greneral information
            only and do not constitute any from advice.HLS assumes no
            responsibility foe the accuracy of any particular statement and
            accepts no liability for any loss or damage which may arise from
            reliance on the information contained on this site.
          </Text>
          <Text mt={10} color={'dark.400'} fontWeight={400} fontSize={16}>
            Copyright 2021 HLS
          </Text>
        </VStack>
      </Box>
    </Box>
  );
}

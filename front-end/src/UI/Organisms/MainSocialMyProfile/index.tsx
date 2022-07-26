import React from 'react';
import { HStack, Text, Avatar } from '@chakra-ui/react';
import { FaMedal } from 'react-icons/fa';

function MyProfile() {
  return (
    <HStack bgColor="orange.300" h="130px" fontSize="3xl" justify="center">
      <Avatar
        name="UhmJoonShik"
        src="https://mblogthumb-phinf.pstatic.net/MjAyMDA2MTlfMTY5/MDAxNTkyNTAyNDM2ODcy.FVNsc1SOtS2sUfyaajXNhZpYzAKIFeUg_vCTqzHW4SIg.kQsV680NF1XfoVcDgPg64yF0RzHyRs0-raId3LTIIG4g.JPEG.wndyd75/hqdefault1.jpg?type=w2"
        size="xl"
      />
      <FaMedal />
      <Text>엄준식은살아있다</Text>
    </HStack>
  );
}

export default MyProfile;

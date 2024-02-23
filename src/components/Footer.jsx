import React from 'react';
import { Box, Text, useColorModeValue } from '@chakra-ui/react';
const Footer = () => {
  const textColor = useColorModeValue('black.400', 'gray.600');

  return (
    <Box as="footer" bg={useColorModeValue('green.200', 'gray.900')} py={4} position="sticky" bottom={0}>
      <Text color={textColor} textAlign="center">
        641413017@ArthitDev+ChatGPT For CIT5603
      </Text>
    </Box>
  );
};

export default Footer;

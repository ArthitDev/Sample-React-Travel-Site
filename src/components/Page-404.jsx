import React from 'react';
import { Box, Flex, Text, Button } from '@chakra-ui/react';

const Page404 = () => {
  const handleGoBack = () => {
    window.location.href = '/';
  };

  return (
    <Flex minHeight="100vh" alignItems="center" justifyContent="center">
      <Box textAlign="center">
        <Text fontSize="6xl" fontWeight="bold" mb={4}>404</Text>
        <Text fontSize="2xl" mb={8}>Page not found</Text>
        <Button colorScheme="teal" size="lg" onClick={handleGoBack}>กลับไปหน้าที่มีอยู่</Button>
      </Box>
    </Flex>
  );
};

export default Page404;

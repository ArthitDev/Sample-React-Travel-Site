import React, { useState } from "react";
import {
  Box,
  Flex,
  Text,
  VStack,
  Link,
  Icon,
  HStack,
  Grid,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  ChakraProvider,
  Image,
} from "@chakra-ui/react";
import { FaFacebook, FaGithub } from "react-icons/fa";
import ProfileImage from "../assets/Profile.jpg";
import QrFacebookImage from "../assets/Facebook-QR.jpg";
import QrGithub from "../assets/Github-QR.jpg";

const Contact = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
    setIsOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setIsOpen(false);
  };

  return (
    <ChakraProvider>
      <Flex
        minHeight="100vh"
        alignItems="center"
        justifyContent="center"
        mt="50"
      >
        <Box p={15} mt={-20}  height="90vh"> {/* ตรงนี้โว้ย */}
          <Flex direction="column" alignItems="center">
            <Image
              src={ProfileImage}
              alt="Profile"
              boxSize="150px"
              borderRadius="full"
              mt={5}
              mb={1}
            />
            <Text fontSize="xl" fontWeight="bold" mb={2}>
              Arthit LungYa
            </Text>
            <Text mb={2}>รหัสนักศึกษา : 641413017</Text>
            <Text mb={2}>สาขาวิชา : เทคโนโลยีสารสนเทศ</Text>
            <Text mb={2}>ที่อยู่ : แม่อาย , เชียงใหม่, ประเทศไทย</Text>
            <Text mb={4}>เบอร์โทร : 0979574687</Text>
            <VStack spacing={4} alignItems="center">
              <HStack>
                <Icon as={FaFacebook} boxSize={6} />
                <Link
                  href="https://www.facebook.com/MR.Arthit.Profile"
                  isExternal
                  color="blue.500"
                >
                  Facebook คลิกเลย !!
                </Link>
              </HStack>
              <HStack>
                <Icon as={FaGithub} boxSize={6} />
                <Link
                  href="https://github.com/ArthitDev"
                  isExternal
                  color="blue.500"
                >
                  Github คลิกเลย !!
                </Link>
              </HStack>
            </VStack>
            <Grid templateColumns="repeat(2, 1fr)" gap={4} mt={5}>
              <Box
                p={4}
                cursor="pointer"
                onClick={() => openModal(QrFacebookImage)}
                boxSize={
                  window.innerWidth >= 1280
                    ? "250px"
                    : window.innerWidth <= 600
                    ? "150px"
                    : "auto"
                }
              >
                <Text mb={2} fontSize="lg" fontWeight="bold" textAlign="center">
                  แสกนเพื่อไปยัง Facebook
                </Text>
                <Image
                  src={QrFacebookImage}
                  alt="QrFacebook"
                  boxSize={
                    window.innerWidth >= 1280
                      ? "auto"
                      : window.innerWidth <= 600
                      ? "auto"
                      : "auto"
                  }
                />
              </Box>
              <Box
                p={4}
                cursor="pointer"
                onClick={() => openModal(QrGithub)}
                boxSize={
                  window.innerWidth >= 1280
                    ? "250px"
                    : window.innerWidth <= 600
                    ? "150px"
                    : "auto"
                }
              >
                <Text mb={2} fontSize="lg" fontWeight="bold" textAlign="center">
                  แสกนเพื่อไปยัง Github
                </Text>
                <Image
                  src={QrGithub}
                  alt="QrGithub"
                  boxSize={
                    window.innerWidth >= 1280
                      ? "auto"
                      : window.innerWidth <= 600
                      ? "auto"
                      : "auto"
                  }
                  borderRadius="lg"
                />
              </Box>
            </Grid>
          </Flex>
        </Box>
        <Modal isOpen={isOpen} onClose={closeModal} size="2xl">
          <ModalOverlay />
          <ModalContent mt={54}>
            <ModalCloseButton />
            <ModalBody>
              <Flex justify="center">
                {selectedImage && (
                  <Box maxW="100%" maxH="100%">
                    <Image
                      mt="4"
                      ml="3"
                      src={selectedImage}
                      alt="SelectedImage"
                      objectFit="contain"
                      w="95%"
                      h="95%"
                      borderRadius="1%"
                    />
                  </Box>
                )}
              </Flex>
            </ModalBody>
          </ModalContent>
        </Modal>
      </Flex>
    </ChakraProvider>
  );
};

export default Contact;

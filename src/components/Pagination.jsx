import React from "react";
import { Box, Button, Link, useColorModeValue } from "@chakra-ui/react";

const Pagination = ({ currentPage, totalPages, handleNavigateToPage }) => {
  const buttonBackground = useColorModeValue("rgb(56,161,105)", "gray.900");
  const activeButtonBackground = "red"; // สีปุ่มเมื่ออยู่ในหน้าใดๆเป็นสีแดง
  const textColor = "white"; // สีของตัวอักษรเป็นสีขาว
  const hoverColor = "none"; // สีตอน hover

  const isMobile = window.innerWidth <= 600; // เช็คว่าอยู่ในรูปแบบ mobile หรือไม่

  const buttonVariants = {
    tap: {
      scale: 0.9,
      transition: {
        duration: 0.1,
      },
    },
  };

  const textShadow = "1px 1px 3px rgba(0, 0, 0, 0.3)"; // เพิ่มเงาให้ตัวหนังสือ

  return (
    <Box mt={4} textAlign="center">
      <Button
        as={Link}
        to="#"
        onClick={() => handleNavigateToPage(1)}
        disabled={currentPage === 1}
        mr={2}
        bg={buttonBackground}
        color={textColor}
        variants={buttonVariants}
        _hover={{ backgroundColor: hoverColor }} // ปรับสีตอน hover
        textShadow={textShadow} // เพิ่มเงาให้ตัวหนังสือ
      >
        หน้าแรก
      </Button>
      {Array.from({ length: totalPages }, (_, index) => (
        <Button
          key={index + 1}
          as={Link}
          to="#"
          mr={2}
          onClick={() => handleNavigateToPage(index + 1)}
          variant={currentPage === index + 1 ? "solid" : ""}
          bg={
            currentPage === index + 1
              ? activeButtonBackground
              : buttonBackground
          }
          color={textColor}
          variants={buttonVariants}
          _hover={{ backgroundColor: hoverColor }} // ปรับสีตอน hover
          textShadow={textShadow} // เพิ่มเงาให้ตัวหนังสือ
        >
          {index + 1}
        </Button>
      ))}
      <Button
        as={Link}
        to="#"
        onClick={() => handleNavigateToPage(totalPages)}
        disabled={currentPage === totalPages}
        ml={isMobile ? 10 : 2} // ปรับตำแหน่งของปุ่มตามขนาดหน้าจอ
        mt={isMobile ? 2 : 0} // ปรับตำแหน่งของปุ่มตามขนาดหน้าจอ
        bg={buttonBackground}
        color={textColor}
        variants={buttonVariants}
        _hover={{ backgroundColor: hoverColor }} // ปรับสีตอน hover
        textShadow={textShadow} // เพิ่มเงาให้ตัวหนังสือ
      >
        หน้าสุดท้าย
      </Button>
    </Box>
  );
};

export default Pagination;

import React, { useState } from "react";
import {
  Box,
  Flex,
  Link,
  Button,
  useColorModeValue,
  Stack,
  useColorMode,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon, HamburgerIcon } from "@chakra-ui/icons";
import { NavLink } from "react-router-dom";
import { FaMapMarkerAlt } from "react-icons/fa";

const Nav = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleColorModeChange = () => {
    toggleColorMode(); // เปลี่ยนสี
    // window.location.reload(); // รีเฟรชหน้าเว็บ
  };

  return (
    <Box
      bg={useColorModeValue("green.200", "gray.900")}
      px={4}
      position="sticky"
      top={0}
      zIndex={999}
    >
      <Flex h={20} alignItems="center" justifyContent="space-between">
        <Flex alignItems="center">
          <FaMapMarkerAlt
            style={{ marginRight: "0.5rem", fontSize: "1.5rem" }}
          />
          <Link as={NavLink} to="/" fontWeight="bold" fontSize="xl">
            สถานที่ท่องเที่ยว
          </Link>
        </Flex>

        <Flex alignItems="center">
          <Stack direction="row" spacing={7}>
            <IconButton
              aria-label="Open menu"
              icon={<HamburgerIcon />}
              variant="ghost"
              display={{ base: "flex", md: "none" }}
              onClick={handleDrawerToggle}
            />
            <Link
              as={NavLink}
              to="/"
              fontWeight="bold"
              mt={2}
              display={{ base: "none", md: "block" }}
            >
              หน้าแรก
            </Link>
            <Link
              as={NavLink}
              to="/tabledata"
              fontWeight="bold"
              mt={2}
              display={{ base: "none", md: "block" }}
            >
              รายชื่อสถานที่ท่องเที่ยว
            </Link>
            <Link
              as={NavLink}
              to="/contact"
              fontWeight="bold"
              mt={2}
              display={{ base: "none", md: "block" }}
            >
              ติดต่อเรา
            </Link>
            <Link
              as={NavLink}
              to="/auth"
              fontWeight="bold"
              mt={2}
              display={{ base: "none", md: "block" }}
            >
              เข้าสู่ระบบ
            </Link>
            <Button
              onClick={handleColorModeChange}
              display={{ base: "none", md: "block" }}
            >
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>
          </Stack>
        </Flex>
      </Flex>

      <Drawer
        placement="right"
        onClose={handleDrawerToggle}
        isOpen={isDrawerOpen}
      >
        <DrawerOverlay />
        <DrawerContent>
        <Button onClick={handleColorModeChange}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>
          <DrawerHeader textDecoration={"underline"}>เมนู</DrawerHeader>
          <DrawerBody>
            <Stack spacing={4}>
            <Link as={NavLink} to="/" fontWeight="bold">
                หน้าแรก
              </Link>
              <Link as={NavLink} to="tabledata" fontWeight="bold">
                รายชื่อสถานที่ท่องเที่ยว
              </Link>
              <Link as={NavLink} to="/contact" fontWeight="bold">
                ติดต่อเรา
              </Link>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Nav;

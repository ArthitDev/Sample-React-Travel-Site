import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { StarIcon } from "@chakra-ui/icons";
import {
  Box,
  Grid,
  GridItem,
  Text,
  ChakraProvider,
  Center,
  Button,
  Image,
} from "@chakra-ui/react";
import Pagination from "./Pagination";
import { getPlacesData } from "./API/api";
import SearchBox from "./SearchBox";
import "./Content.css";
import PlaceModal from "./PlaceModal";
import ScrollToTopButton from "./ScrollToTopButton";

const Content = () => {
  const [places, setPlaces] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPlaces, setFilteredPlaces] = useState([]);
  const pageSize = 9;
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const placesData = await getPlacesData();
        setPlaces(placesData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const filteredResults = places.filter((place) =>
      place.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPlaces(filteredResults);
  }, [searchTerm, places]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleNavigateToPage = (page) => {
    setCurrentPage(page);
  };

  const handleOpenModal = (place) => {
    setSelectedPlace(place);
  };

  const handleCloseModal = () => {
    setSelectedPlace(null);
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const totalPages = Math.ceil(filteredPlaces.length / pageSize);

  const paginatedPlaces = filteredPlaces.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  paginatedPlaces.sort((a, b) => b.score - a.score);

  return (
    <ChakraProvider>
      <Box p={4}>
        <SearchBox searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          }}
          mt={25}
          gap={20}
        >
          {filteredPlaces.length === 0 && searchTerm !== "" ? (
            <Text textAlign="center" fontSize="lg">
              ไม่พบสถานที่.....ลองใช้คำอื่น
            </Text>
          ) : (
            paginatedPlaces.map((place) => (
              <GridItem key={place.id} height="100%">
                <Center>
                  <motion.div
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Box
                      maxW="md"
                      borderWidth="1px"
                      borderRadius="lg"
                      overflow="hidden"
                      boxShadow="xl"
                      position="relative"
                      display="flex"
                      flexDirection="column"
                      justifyContent="space-between"
                    >
                      <Image
                        src={place.img}
                        alt={place.name}
                        height="190px"
                        objectFit="cover"
                      />
                      <Box p={4}>
                        <Text
                          fontSize={{ base: "xl", md: "xl", lg: "xl" }}
                          fontWeight="bold"
                          mb={2}
                          textAlign="center"
                          textDecor="underline"
                        >
                          {place.name}
                        </Text>
                        <Text
                          mb={2}
                          textAlign="center"
                          overflow="hidden"
                          textOverflow="ellipsis"
                          display="-webkit-box"
                          style={{
                            WebkitLineClamp: 3,
                            WebkitBoxOrient: "vertical",
                          }}
                        >
                          {place.descript}
                        </Text>
                        <Text
                          fontStyle="italic"
                          color="gray.500"
                          textAlign="center"
                        >
                          แหล่งท่องเที่ยวเชิง: {place.type}
                        </Text>
                        <Box mt={2} textAlign="center">
                          <Text>
                            ความนิยม:{" "}
                            {[...Array(5)].map((_, index) => (
                              <StarIcon
                                key={index}
                                color={
                                  index < place.score ? "gold" : "gray.300"
                                }
                                boxSize={4}
                                style={{ marginTop: "-5px" }} // เพิ่มส่วนที่ต้องการเพื่อปรับตำแหน่งไอคอน
                              />
                            ))}
                          </Text>
                          <Text color="gray.500" fontSize="sm">
                            ({place.score} จาก 5.0 คะแนน)
                          </Text>
                        </Box>
                        <Button
                          mt={2}
                          colorScheme="teal"
                          size="sm"
                          onClick={() => handleOpenModal(place)}
                        >
                          อ่านเพิ่มเติม
                        </Button>
                      </Box>
                    </Box>
                  </motion.div>
                </Center>
              </GridItem>
            ))
          )}
        </Grid>

        {showScrollToTop && (
          // ปุ่มขึ้นบน
          <ScrollToTopButton handleScrollToTop={handleScrollToTop} />
        )}
        {filteredPlaces.length > 0 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            handlePrevPage={handlePrevPage}
            handleNextPage={handleNextPage}
            handleNavigateToPage={handleNavigateToPage}
          />
        )}
        <PlaceModal selectedPlace={selectedPlace} onClose={handleCloseModal} />
      </Box>
    </ChakraProvider>
  );
};

export default Content;

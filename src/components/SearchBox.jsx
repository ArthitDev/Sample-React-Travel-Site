// SearchBox.js
import React from "react";
import { FaSearch } from "react-icons/fa";
import { Input, Box } from "@chakra-ui/react";

const SearchBox = ({ searchTerm, setSearchTerm }) => {
  return (
    <Box display="flex" justifyContent="center" mb={4} position="relative">
      <FaSearch
        style={{
          position: "absolute",
          right: window.innerWidth >= 1280 ? "39%" : window.innerWidth <= 600 ? "10%" : "28%",
          top: "28%",
          color: "#ccc",
          cursor: "pointer",
        }}
      />
      <Input
        type="text"
        placeholder="ค้นหาสถานที่. . . ."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          padding: "0.5rem",
          width: "100%",
          maxWidth: "400px",
          fontSize: "1rem",
          border: "1px solid #ccc",
          borderRadius: "5px",
          paddingLeft: "1rem",
        }}
      />
    </Box>
  );
};

export default SearchBox;

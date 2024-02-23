import React, { useEffect, useState } from "react";
import { ChakraProvider, extendTheme, Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
import { getPlacesData } from "./API/api";
import './TableData.css'

const theme = extendTheme({
  components: {
    Table: {
      baseStyle: {
        th: {
          borderBottomWidth: "1px",
        },
        td: {
          borderBottomWidth: "1px",
        },
      },
    },
  },
});

const TableData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const placesData = await getPlacesData();
      setData(placesData);
    };

    fetchData();
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>ลำดับ</Th>
            <Th>ชื่อ</Th>
            <Th>ประเภทแหล่งท่องเที่ยว</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((place) => (
            <Tr key={place.id}>
              <Td>{place.id}</Td>
              <Td>{place.name}</Td>
              <Td>{place.type}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </ChakraProvider>
  );
};

export default TableData;

import axios from "axios";
export const getPlacesData = async () => {
  try {
    const response = await axios.get(
      "http://student.crru.ac.th/641413017/CIT5603/apiPlace/"
    );
    return response.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

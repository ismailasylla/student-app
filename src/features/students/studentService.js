import axios from "axios";

const API_URL =
  "https://api.airtable.com/v0/app8ZbcPx7dkpOnP0/Classes/rectGHWsZVmkeRwGh?api_key=keyJJpV3i1bKbuBOR";

// Get user students
const getStudent = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL, config);

  return response.data;
};

const studentService = {
  getStudent,
};

export default studentService;

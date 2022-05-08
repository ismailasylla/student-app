import axios from "axios";

const API_URL =
  "https://api.airtable.com/v0/app8ZbcPx7dkpOnP0/Classes/rectGHWsZVmkeRwGh?api_key=keyJJpV3i1bKbuBOR";

// Login student
const login = async (studentData) => {
  const response = await axios.get(API_URL, studentData);
  // const response = await axios.get(API_URL + "login", studentData);

  if (response.data) {
    localStorage.setItem("student", JSON.stringify(response.data));
  }

  return response.data;
};

// Logout student
const logout = () => {
  localStorage.removeItem("student");
};

const authService = {
  logout,
  login,
};

export default authService;

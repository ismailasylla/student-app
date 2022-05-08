import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import studentService from "./studentService";

const initialState = {
  students: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Get student
export const getStudent = createAsyncThunk(
  "student/getAllRecords",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.student.token;
      return await studentService.getStudent(token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const studentSlice = createSlice({
  name: "student",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getStudent.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getStudent.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.students = action.payload;
      })
      .addCase(getStudent.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = studentSlice.actions;
export default studentSlice.reducer;

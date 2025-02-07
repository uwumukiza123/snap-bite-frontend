import { signInUser, signUpUser } from "../actions/authAction";
import { createSlice } from "@reduxjs/toolkit";

type UsersState = {
  token: string | null;
  user: any[];
  loading: boolean;
  error: string | null;
};

const initialState: UsersState = {
  token: typeof window !== "undefined" ? localStorage.getItem("token") : null,
  user: [],
  loading: false,
  error: null,
};

const usersSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signInUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signInUser.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.data;

        if (action.payload.data) {
          localStorage.setItem("token", action.payload.data);
        }
      })
      .addCase(signInUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message as string;
      })
      .addCase(signUpUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signUpUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(signUpUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message as string;
      });
  },
});

export default usersSlice.reducer;

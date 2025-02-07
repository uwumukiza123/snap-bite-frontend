import { createAsyncThunk } from "@reduxjs/toolkit";

type UserCredentials = {
  username?: string;
  email: string;
  password: string;
  confirmPassword?: string;
};

const url = import.meta.env.VITE_API_URL;

export const signInUser = createAsyncThunk(
  "user/signInUser",
  async ({ email, password }: UserCredentials, { rejectWithValue }) => {
    try {
      const response = await fetch(`${url}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(errorMessage || "failed to sign in");
      }

      const data = await response.json();
      return { data: data };
    } catch (err: any) {
      return rejectWithValue(err.message || "An error occurred");
    }
  }
);

export const signUpUser = createAsyncThunk(
  "user/signUpUser",
  async ({ username, email, password, confirmPassword }: UserCredentials) => {
    try {
      const response = await fetch(`${url}/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password, confirmPassword }),
      });

      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(errorMessage || "failed to sign up");
      }
      if (password !== confirmPassword) {
        throw new Error("Passwords do not match");
      }

      const data = await response.json();
      return data;
    } catch (err: any) {
      throw new Error(err.message || "An error occurred");
    }
  }
);

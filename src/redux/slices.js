import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { setAuthToken } from "../api";
import { loginUser, myProfile } from "../api/functions";

export const loginAdmin = createAsyncThunk(
  "auth/login",
  async ({ email, password }, thunkAPI) => {
    try {
      const response = await loginUser({ email, password });
      localStorage.setItem("token", response.data?.token);
      setAuthToken();
      return response.data;
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

export const loadProfile = createAsyncThunk(
  "auth/profile",
  async (token, thunkAPI) => {
    try {
      const response = await myProfile(token);
      setAuthToken(token);
      return response.data?.user;
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

export const redirectActions = createSlice({
  name: "redirect",
  initialState: { redirecturl: "/", redirect: false },
  reducers: {
    changeURL: (state, action) => {
      state.redirecturl = action.payload;
    },
    redirectTo: (state, action) => {
      state.redirect = true;
    },
    disableRedirect: (state, action) => {
      state.redirect = false;
    },
  },
});

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false,
    loading: false,
    user: null,
    error: null,
  },
  reducers: {
    logout: (state, action) => {
      state.error = null;
      state.isAuthenticated = false;
      state.loading = false;
      state.user = null;
    },
  },
  extraReducers: {
    [loginAdmin.fulfilled]: (state, action) => {
      state.isAuthenticated = true;
      state.loading = false;
      state.error = null;
    },
    [loginAdmin.pending]: (state, action) => {
      state.loading = true;
    },
    [loginAdmin.rejected]: (state, action) => {
      state.isAuthenticated = false;
      state.error = action.payload;
      state.loading = false;
      state.user = null;
    },
    [loadProfile.pending]: (state, action) => {
      state.isAuthenticated = false;
      state.loading = true;
      state.error = null;
    },
    [loadProfile.rejected]: (state, action) => {
      state.isAuthenticated = false;
      state.loading = false;
      state.error = action.payload;
      state.user = null;
    },
    [loadProfile.fulfilled]: (state, action) => {
      state.isAuthenticated = true;
      state.loading = false;
      state.error = null;
      state.user = action.payload;
    },
  },
});

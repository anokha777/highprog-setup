/* eslint-disable no-use-before-define */
import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

interface UsersPost {
  email: string;
  gender: string;
  isTeacher: boolean;
  languagesSpoken: string[];
  name: string;
  salaryRange: number[];
  skills: string[];
  states: string[];
}

export interface UserCreateState {
  isLoading: boolean;
  isSuccess: boolean;
  showNotification: boolean;
  message: string;
  data: UsersPost | undefined;
}

const initialState: UserCreateState = {
  isLoading: false,
  isSuccess: true,
  showNotification: false,
  message: '',
  data: {
    email: '',
    name: '',
    states: [],
    languagesSpoken: [],
    gender: '',
    skills: [],
    salaryRange: [0, 2000],
    isTeacher: true,
  },
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state, action) => {
        return {
          ...state,
          isLoading: true,
          isSuccess: false,
          showNotification: false,
          message: '',
          data: action.payload,
        };
      })
      .addCase(createUser.rejected, (state, action) => {
        // state = {
        //   isLoading: false,
        //   isSuccess: false,
        //   showNotification: true,
        //   message: action?.error?.message || 'Error in user save.',
        //   data: undefined,
        // };
        // return state;
        return {
          ...state,
          isLoading: false,
          isSuccess: false,
          showNotification: true,
          message: action?.error?.message || 'Error in user save.',
          data: undefined,
        };
      })
      .addCase(
        createUser.fulfilled,
        (state, action: PayloadAction<UsersPost>) => {
          return {
            ...state,
            isLoading: false,
            isSuccess: true,
            showNotification: true,
            message: 'User created successfully.',
            data: action.payload,
          };
          // state = {
          //   isLoading: false,
          //   isSuccess: true,
          //   showNotification: true,
          //   message: 'User created successfully.',
          //   data: action.payload,
          // };
          // return state;
          // return Object.assign(state.data, action.payload);
        }
      );
  },
});

export const createUser = createAsyncThunk(
  'users/createUser',
  async (payload: UsersPost) => {
    // await new Promise((resolve) => setTimeout(resolve, 2000));
    const res = await axios.post(
      'https://jsonplaceholder.typicode.com/posts',
      payload
    );
    return res.data;
  }
);

export default usersSlice.reducer;

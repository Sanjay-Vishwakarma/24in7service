// // src/redux/authSlice.js
// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axiosInstance from '../api/axiosInstance';
// import { API_ENDPOINTS } from '../api/endpoints';

// export const loginAdmin = createAsyncThunk(
//     'auth/loginAdmin',
//     async ({ username, password }, { rejectWithValue }) => {
//         try {
//             const response = await axiosInstance.post(API_ENDPOINTS.ADMIN_LOGIN, {
//                 username,
//                 password
//             });
//             return response.data;
//         } catch (error) {
//             return rejectWithValue(error.response?.data || error.message);
//         }
//     }
// );

// const authSlice = createSlice({
//     name: 'auth',
//     initialState: {
//         user: null,
//         token: null,
//         loading: false,
//         error: null
//     },
//     reducers: {
//         logout: (state) => {
//             state.user = null;
//             state.token = null;
//         }
//     },
//     extraReducers: (builder) => {
//         builder
//             .addCase(loginAdmin.pending, (state) => {
//                 state.loading = true;
//                 state.error = null;
//             })
//             .addCase(loginAdmin.fulfilled, (state, action) => {
//                 state.loading = false;
//                 state.user = action.payload.user;
//                 state.token = action.payload.token;
//             })
//             .addCase(loginAdmin.rejected, (state, action) => {
//                 state.loading = false;
//                 state.error = action.payload;
//             });
//     }
// });

// export const { logout } = authSlice.actions;
// export default authSlice.reducer;
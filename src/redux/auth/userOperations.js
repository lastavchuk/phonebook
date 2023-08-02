import { createAsyncThunk } from '@reduxjs/toolkit';
import {
    currentUser,
    loginUser,
    logOutUser,
    registerUser,
    setToken,
} from 'services/api';

export const registerUserThunk = createAsyncThunk(
    'user/registerUser',
    async userData => await registerUser(userData)
);
export const loginUserThunk = createAsyncThunk(
    'user/loginUser',
    async userData => await loginUser(userData)
);
export const logOutUserThunk = createAsyncThunk(
    'user/logOutUser',
    async () => await logOutUser()
);
export const refreshUserThunk = createAsyncThunk(
    'user/refreshUser',
    async (_, thunkAPI) => {
        const { user } = thunkAPI.getState();
        if (!!user.token) {
            setToken(user.token);
            return await currentUser();
        }
        return thunkAPI.rejectWithValue();
    }
);

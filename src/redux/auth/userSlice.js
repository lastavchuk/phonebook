import { createSlice } from '@reduxjs/toolkit';
import {
    loginUserThunk,
    logOutUserThunk,
    refreshUserThunk,
    registerUserThunk,
} from './userOperations';

function handlePending(state) {
    state.isLoading = true;
    state.error = null;
}
function handleRejected(state, { error }) {
    state.isLoading = false;
    state.error = error.message;
}

const userSlice = createSlice({
    name: 'user',
    initialState: {
        isLoading: false,
        error: null,
        userData: null,
        token: null,
    },
    extraReducers: builder => {
        builder
            .addCase(loginUserThunk.fulfilled, (state, action) => {
                state.isLoading = false;
                state.userData = action.payload.user;
                state.token = action.payload.token;
            })
            .addCase(registerUserThunk.fulfilled, (state, action) => {
                state.isLoading = false;
                state.userData = action.payload.user;
                state.token = action.payload.token;
            })
            .addCase(logOutUserThunk.fulfilled, (state, action) => {
                state.isLoading = false;
                state.userData = null;
                state.token = null;
            })
            .addCase(refreshUserThunk.fulfilled, (state, action) => {
                state.isLoading = false;
                state.userData = action.payload;
            })
            .addMatcher(
                action => action.type.endsWith('/pending'),
                handlePending
            )
            .addMatcher(
                action => action.type.endsWith('/rejected'),
                handleRejected
            );
    },
});

export const userReducer = userSlice.reducer;

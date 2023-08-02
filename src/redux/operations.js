import { createAsyncThunk } from '@reduxjs/toolkit';
import {
    addContact,
    currentUser,
    deleteContact,
    fetchAllContacts,
    loginUser,
    logOutUser,
    registerUser,
    setToken,
} from 'services/api';

//----- user -----
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

//----- contacts -----
export const getAllContactThunk = createAsyncThunk(
    'contacts/fetchAll',
    async () => await fetchAllContacts()
);

export const addContactThunk = createAsyncThunk(
    'contacts/addContact',
    async contact => await addContact(contact)
);

export const deleteContactThunk = createAsyncThunk(
    'contacts/deleteContact',
    async id => await deleteContact(id)
);

// export const getAllContactThunk = createAsyncThunk(
//     'contacts/fetchAll',
//     async (_, thunkAPI) => {
//         try {
//             return await fetchAllContacts();
//         } catch (error) {
//             console.log('error :>> ', error);
//             return thunkAPI.rejectWithValue(error.message);
//         }
//     }
// );

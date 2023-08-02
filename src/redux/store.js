import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './auth/userSlice';
import { filterReducer } from './contacts/filterSlice';
import { contactsReducer } from './contacts/contactsSlice';

import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const userPersistConfig = {
    key: 'user',
    storage,
    whitelist: ['token'],
};

export const store = configureStore({
    reducer: {
        user: persistReducer(userPersistConfig, userReducer),
        contacts: contactsReducer,
        filter: filterReducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                ],
            },
        }),
});

export const persistor = persistStore(store);

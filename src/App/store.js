import { configureStore } from '@reduxjs/toolkit';
// import reduxLogger from 'redux-logger';
import sidebarSlice from '../features/dashBoard/sidebar/sidebarSlice';
import modalSlice from '../features/modal/modalSlice';

// const logger = reduxLogger.createLogger();

const store = configureStore({
    reducer: {
        sidebar: sidebarSlice,
        modal: modalSlice

    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
});

export default store;


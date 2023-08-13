import { configureStore } from '@reduxjs/toolkit';
// import reduxLogger from 'redux-logger';
import sidebarSlice from '../features/dashBoard/sidebar/sidebarSlice';

// const logger = reduxLogger.createLogger();

const store = configureStore({
    reducer: {
        sidebar: sidebarSlice

    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
});

export default store;


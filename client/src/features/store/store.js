import { configureStore } from '@reduxjs/toolkit';
import isPlayingReducer from './playerReducer';

export default configureStore({
    reducer: {
        Player: isPlayingReducer,
    },
});

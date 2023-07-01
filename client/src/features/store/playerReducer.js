import { createSlice } from '@reduxjs/toolkit';

export const isPlayingSlice = createSlice({
    name: 'Player',
    initialState: {
        playing: false,
        time: 0,
    },
    reducers: {
        togglePlaying: (state) => {
            state.playing = !state.playing;
        },
        toggletime: (state, action) => {
            state.time = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { togglePlaying, toggletime } = isPlayingSlice.actions;

export default isPlayingSlice.reducer;

import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    weather: null,
    isLoading: true,
    error: null
};

export const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        getWeatherStart: (state) => {
            state.isLoading = true;
        },
        getWeatherSuccess: (state, action) => {
            console.log("here")
            state.weather = action.payload;
            state.isLoading = false;
            state.error = null;
        },
        getWeatherFailure: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        toggleLoading: (state) => {
            state.isLoading = !state.isLoading;
        }
    }
});

export const {getWeatherStart, getWeatherSuccess, getWeatherFailure, toggleLoading} = weatherSlice.actions;
export const selectWeather = state => state.weather;

export default weatherSlice.reducer;
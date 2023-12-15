import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    backgroundImage: 0,
    quote: {
        quote: 'May the force be with you',
        author: 'Star Wars'
    }
}

export const styleSlice = createSlice({
    name: 'style',
    initialState,
    reducers: {
        changeBackground: (state) => {
            state.backgroundImage = (state.backgroundImage + 1) % 10;
        },
        changeQuote: (state, action) => {
            state.quote = action.payload;
        }
    }
});

export const {changeBackground, changeQuote} = styleSlice.actions;
export const selectBackground = state => state.style.backgroundImage;
export const selectQuote = state => state.style.quote;

export default styleSlice.reducer;

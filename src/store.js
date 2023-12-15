import {configureStore} from '@reduxjs/toolkit';
import todoReducer from './features/todo/todoSlice';
import weatherReducer from './features/weather/weatherSlice';
import styleReducer from './features/style/styleSlice';



export const store = configureStore({
    reducer: {
        todo: todoReducer,
        weather: weatherReducer,
        style: styleReducer
    }
});
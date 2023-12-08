import { createSlice } from "@reduxjs/toolkit";
import { getAdvertsThunk } from "./thunk";

const initialState = {
    adverts: {
        items: [],
        isLoading: false,
        error: null
    },
    filter: ""
}

const handlePanding = (state) => {
    state.adverts.isLoading = true;
    state.adverts.error = null;
}
const handleFulfilledGet = (state,{ payload }) => {
    state.adverts.isLoading = false;
    state.adverts.items = payload; 
}
const handleRejected = (state,{ payload }) => {
    state.adverts.isLoading = false;
    state.adverts.error = payload
}

const advertsSlice = createSlice({
    name: 'adverts',
    initialState,
    reducers:{
        filterAdvert:(state, action) =>{
        state.filter = action.payload;
    },
},
    extraReducers:
    (builder) => {
        builder.addCase(getAdvertsThunk.pending, handlePanding)
        .addCase(getAdvertsThunk.fulfilled, handleFulfilledGet)
        .addCase(getAdvertsThunk.rejected, handleRejected)
    }
})

export const advertsReducer = advertsSlice.reducer;
export const {filterAdvert} = advertsSlice.actions;
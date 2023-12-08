import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchGetAdvert } from "services/api";

export const getAdvertsThunk = createAsyncThunk('adverts/get',
async(_, thunkApi) => {
    try {
        const adverts = await fetchGetAdvert();
        return adverts;
    }
    catch(error) {
        return thunkApi.rejectWithValue(error.message);
    }
}
)
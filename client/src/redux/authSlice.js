import axios from "axios";
import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";

export const userLogin = createAsyncThunk(
    "api/auth/login",
    async(payload,{rejectWithValue}) => {
        try{
            const response = await axios.post("api/auth/login",payload);
            return response.data;
        }
        catch(error)
        {
            if(!error?.response)
            {
                throw error;
            }
            return rejectWithValue(error?.response.data);
        }
    }
);
export const userRegisteration = createAsyncThunk(
    "api/auth/register",
    async(payload,{rejectWithValue}) => {
        try{
            const response = await axios.post("api/auth/register",payload);
            return response.data;
        }
        catch(error)
        {
            if(!error?.response)
            {
                throw error;
            }
            return rejectWithValue(error?.response.data);
        }
    }
);

const token = localStorage.getItem("token");
const user = JSON.parse(localStorage.getItem("user"));
const role = localStorage.getItem("role");

const authSlice = createSlice({
    name : "auth",
    initialState : {
        user : user || null,
        token : token || null,
        isLoading : false,
        role : role
    },
    reducers : {

    }
});

export default authSlice.reducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export interface AppData{
    price_from : string
    price_to : string
}

const initialState : AppData =  {
    price_from : "",
    price_to : ""

}

export const AppSlice = createSlice({
    name : "appSlice",
    initialState,
    reducers: {
        refreshApp: (state) =>{
            state.price_from = ""
            state.price_to = ""
        },
        savePriceFrom: (state, actioin : PayloadAction<string>)=> {
            state.price_from = actioin.payload
        },
        savePriceTo: (state, action: PayloadAction<string>) =>{
            state.price_to = (action.payload)
        }
    }
});

export const {
    refreshApp,
    savePriceFrom,
    savePriceTo,
} = AppSlice.actions;
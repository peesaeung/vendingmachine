import {createSlice} from "@reduxjs/toolkit";

export const moneySlice = createSlice({
    name: 'credit',
    initialState: {
        money: 0
    },
    reducers: {
        addMoney: (state, action) => {
            state.money += action.payload;
        },
    }
});
export const moneyValue = (state: { credit: { money: any; }; }) => state.credit.money;
export const {addMoney} = moneySlice.actions;
export default moneySlice.reducer;

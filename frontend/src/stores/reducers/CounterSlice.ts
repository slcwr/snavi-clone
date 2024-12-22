import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface ICounterState {
    value: number;
}

const initialState: ICounterState = {
    value: 0,
};

const countersSlice = createSlice({
    name: "counters",
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        setValue: (state, action: PayloadAction<number>) => {
            state.value = action.payload;
        },
    },
});

export const { increment, decrement, setValue } = countersSlice.actions;
export const counterReducer = countersSlice.reducer;

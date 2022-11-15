import { createSlice } from "@reduxjs/toolkit";
import tuits from '../data/tuits.json';
import {findTuitsThunk, deleteTuitThunk, createTuitThunk} from "../../services/tuits-thunks.js";

const initialState = {
    tuits: [],
    loading: false
}

const currentUser = {
    "userName": "NASA",
    "handle": "@nasa",
    "userImage": "/images/nasa3.png",
};

const templateTuit = {
    ...currentUser,
    "time": "2h",
    "liked": false,
    "comments": 0,
    "retuits": 0,
    "likes": 0,
}


const tuitsSlice = createSlice(

    {
    name: 'tuits',
    initialState,
    extraReducers: {
        [findTuitsThunk.pending]:
            (state) => {
                state.loading = true
                state.tuits = []
            },
        [findTuitsThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.tuits = payload
            },
        [findTuitsThunk.rejected]:
            (state) => {
                state.loading = false
            }
    },
    [deleteTuitThunk.fulfilled] :
        (state, { payload }) => {
            state.loading = false
            state.tuits = state.tuits
                .filter(t => t._id !== payload)
        },
    [createTuitThunk.fulfilled]:
        (state, { payload }) => {
            state.loading = false
            state.tuits.push(payload)
        },
    [updateTuitThunk.fulfilled]:
        (state, { payload }) => {
            state.loading = false
            const tuitNdx = state.tuits
                .findIndex((t) => t._id === payload._id)
            state.tuits[tuitNdx] = {
                ...state.tuits[tuitNdx],
                ...payload
            }
        }
    });

export const {createTuit, deleteTuit} = tuitsSlice.actions;
export default tuitsSlice.reducer;
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface CharacterState {
  ch: number;
  characters: {};
  loading: boolean;
}

export const fetchCharacters = createAsyncThunk("characters/fetchCharacters", async () => {
  return await axios
  .get("http://rickandmortyapi.com/api/character?page=1")
  .then((response) =>  response.data);
});

const initialState = {
  ch: 0,
  characters: {},
  loading: true,
} as CharacterState;

const charactersSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    increment(state) {
      state.ch++;
    },
    decrement(state) {
      state.ch--;
    },
    incrementByAmount(state, action) {
      state.ch += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCharacters.fulfilled, (state, action) => {
      state.characters = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchCharacters.pending, (state) => {
      state.loading = true;
    });
  },
});

export const { increment, decrement, incrementByAmount } = charactersSlice.actions;
export default charactersSlice.reducer;

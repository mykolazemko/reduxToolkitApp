import axios from 'axios';
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { ICharacterState } from '../Interfaces/ICharacterState';

const initialState: ICharacterState = {
  loading: false,
  character: {},
  characters: [],
  characterID: 1,
  searchedCharacterName: "",
  error: "",
  page: 18
}

export const getPaginationSlice = createAsyncThunk(
  "pagination/getPagination",
  async (data: string | void) => {
    return await axios
    //@ts-ignore
      .get(data)
      .then(response => {
        const characters = response
        return characters
      })
  }
)

export const getCharacterInfoSlice = createAsyncThunk(
  "character/getCharacter",
  async (data: string | void) => {
    return await axios
    //@ts-ignore
      .get(data)
      .then(response => {
        const characters = response
        return characters
      })
  }
)

export const getFilteredCharactersSlice = createAsyncThunk(
  "character/filterCharacter",
  async (data: string | void) => {
    return await axios
    //@ts-ignore
      .get(data)
      .then(response => {
        const characters = response
        return characters
      })
  }
)

const characterSlice = createSlice({
  name: 'character',
  initialState,
  reducers: {
    setCharacterID: (state, action) => {
      state.characterID = action.payload
    },
    searchCharacterByName: (state, action) => {
      state.searchedCharacterName = action.payload
    }
    // charactersSuccess: (state, action) => {
    //   state.loading = false;
    //   state.characters += action.payload;
    //   state.error = "";
    // },
    // charactersFailure: (state, action) => {
    //   state.loading = false;
    //   state.characters = [];
    //   state.error = action.payload;
    // },
  },
  extraReducers: (builder) => {
    // getPaginationSlice
    builder.addCase(getPaginationSlice.pending, (state) => {
      state.loading = true
    })
    builder.addCase(getPaginationSlice.fulfilled, (state, action) => {
      if (action.payload.status === 200) {
        state.loading = false;
        state.characters = action.payload.data;
        state.error = "";
      }
    })
    builder.addCase(getPaginationSlice.rejected, (state, action: any) => {
      state.loading = false;
      state.characters = [];
      state.error = action.payload.data
    })
    // getCharacterInfoSlice
    builder.addCase(getCharacterInfoSlice.pending, (state) => {
      state.loading = true
    })
    builder.addCase(getCharacterInfoSlice.fulfilled, (state, action) => {
      if (action.payload.status === 200) {
        state.loading = false;
        state.character = action.payload.data;
        state.error = "";
      }
    })
    builder.addCase(getCharacterInfoSlice.rejected, (state, action: any) => {
      state.loading = false;
      state.character = {};
      state.error = action.payload.data
    })
    // getFilteredCharactersSlice
    builder.addCase(getFilteredCharactersSlice.pending, (state) => {
      state.loading = true
    })
    builder.addCase(getFilteredCharactersSlice.fulfilled, (state, action) => {
      if (action.payload.status === 200) {
        state.loading = false;
        state.characters = action.payload.data;
        state.error = "";
      }
    })
    builder.addCase(getFilteredCharactersSlice.rejected, (state, action: any) => {
      state.loading = false;
      state.characters = [];
      state.error = action.payload.data
    })

  }
})

export default  characterSlice.reducer
export const { setCharacterID, searchCharacterByName } = characterSlice.actions
//export default {pagination: characterSlice.reducer, character:getCharacterInfoSlice.reducer}

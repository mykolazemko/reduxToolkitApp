import axios from "axios"
const FETCH_CHARACTERS_REQUEST = 'FETCH_CHARACTERS_REQUEST'
const FETCH_CHARACTERS_SUCCESS = 'FETCH_CHARACTERS_SUCCESS'
const FETCH_CHARACTERS_FAILURE = 'FETCH_CHARACTERS_FAILURE'

export const fetchCharacters = () => {
  return (dispatch) => {
    dispatch(fetchCharactersRequest())
    axios
      .get('https://rickandmortyapi.com/api/character?page=3')
      .then(response => {
        const characters = response.data
        const info = response.data.info
        dispatch(fetchCharactersSuccess(characters))
      })
      .catch(error => {
        dispatch(fetchCharactersFailure(error.message))
      })
  }
}

export const fetchCharactersRequest = () => {
  return {
      type: FETCH_CHARACTERS_REQUEST
  }
}

export const fetchCharactersSuccess = characters => {
  return {
      type: FETCH_CHARACTERS_SUCCESS,
      payload: characters
  }
}

export const fetchCharactersFailure = error => {
  return {
      type: FETCH_CHARACTERS_FAILURE,
      payload: error
  }
}
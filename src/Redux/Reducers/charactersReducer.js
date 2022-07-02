import {
  FETCH_CHARACTERS_REQUEST,
  FETCH_CHARACTERS_SUCCESS,
  FETCH_CHARACTERS_FAILURE
} from '../Actions/charactersAction'

const initialState = {
  loading: false,
  charactets: [],
  error: ""
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CHARACTERS_REQUEST:
      return {
        ...state,
        loading: true
      }
    case FETCH_CHARACTERS_SUCCESS:
      return {
        loading: false,
        charactets: action.payload,
        error: ""
      }
    case FETCH_CHARACTERS_FAILURE:
      return {
        loading: false,
        charactets: [],
        error: action.payload
      }
    // case ADD_TO_FAVORITE:
    //     return {
    //         ...state,
    //         todos: [...state.todos, action.payload]
    //         //todos: [...state.todos, { id: state.length + 1}, action.payload]
    //     }
    default: return state
  }
}

export default reducer;
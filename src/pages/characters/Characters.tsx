import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount, fetchCharacters } from "../../slices/charactersSlice";
import { AppDispatch, RootState } from "../../store/store";

const Characters = () => {
  const dispatch = useDispatch<AppDispatch>();
  const loading = useSelector<RootState>(state => state.characters.loading)
  const ch = useSelector<RootState>(state => state.characters.ch)
  const character = useSelector<RootState>(state => state.characters.characters)

  const [characters, setCharacters] = useState<any>([])
  
useEffect(() => {
  dispatch(fetchCharacters())
  setCharacters(character)
}, [])
console.log(characters.results)
  
  return (
    <div>
      <h1>Characters</h1>
      <span>{`${ch}`}</span>
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
      <button onClick={() => dispatch(incrementByAmount(3))}>incrementByAmount</button>
    </div>
  );
};

export default Characters;

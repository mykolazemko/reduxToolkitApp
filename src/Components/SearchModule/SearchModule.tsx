import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchCharacterByName } from "../../Redux/CharacterSlice";

export const SearchModule = () => {
  const [character, setCharacter] = useState("");

  const dispatch = useDispatch();
  const handleSubmit = (e: any) => {
    dispatch(searchCharacterByName(character))
    e.preventDefault();
  }
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input placeholder="Enter Character Name" value={character} onChange={(e) => setCharacter(e.target.value)}></input>
        <input type="submit" value="Search" />
      </form>
    </div>
  );
};

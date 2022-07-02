import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAvatar, getCharacter } from '../../API/getURL'
import { RootState } from '../../Redux/store';
import { getCharacterInfoSlice } from "../../Redux/CharacterSlice";
import style from "./CharacterInfo.module.scss";
import { CharacterInfoLayout } from './CharacterInfoLayout';

export const CharacterInfo = () => {
  const characterID = useSelector((state: RootState) => state.character.characterID);
  const characterInfo = useSelector((state: RootState) => state.character.character);
  const dispatch = useDispatch();
  const [character, setCharacter] = useState<any>({})
  const characterAvatar = getAvatar(characterID.toString())

  useEffect(() => {
    dispatch(getCharacterInfoSlice(getCharacter(characterID.toString())) as any)
    // redirect to "/characters"and show filtered results
  }, [characterID])

  useEffect(()=> {
    setCharacter(characterInfo)
  }, [characterInfo])
  
  return (
    <CharacterInfoLayout characterAvatar={characterAvatar} character={character} />
  )
}

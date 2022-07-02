import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFilteredCharactersSlice, getPaginationSlice, setCharacterID } from "../../Redux/CharacterSlice";
import { RootState } from "../../Redux/store";
import { getPagination, searchCharacter } from "../../API/getURL";
import { Link } from "react-router-dom";
import { CharacterCard } from "../../Components/CharacterCard/CharacterCard";
import { ICharacter } from "../../Interfaces/ICharacter";
import { Pagination } from "../../Components/Pagination/Pagination";
import style from "./Characters.module.scss";

export const Characters = () => {
  const [res, setRes] = useState<any>({});
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState<any>({});
  const [pages, setPages] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [paginationCount, setPagination] = useState<number[]>([]);
  const [preVAndNextLink, setPreVAndNextLink] = useState("");
  const [prevAndNextPage, setPrevAndNextPage] = useState({
    prevPage: "",
    nextPage: "",
  });

  const userDataCharacters: any = useSelector((state: RootState) => state.character.characters);
  const userDataError = useSelector((state: RootState) => state.character.error);
  const userDataLoading = useSelector((state: RootState) => state.character.loading);
  const searchedCharacterName = useSelector((state: RootState) => state.character.searchedCharacterName);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPaginationSlice(preVAndNextLink != "" ? preVAndNextLink : getPagination(currentPage.toString())) as any);
  }, [currentPage, preVAndNextLink]);

  useEffect(() => {
    dispatch(getFilteredCharactersSlice(searchCharacter(searchedCharacterName)) as any)
  }, [searchedCharacterName])
  console.log(searchedCharacterName)
  
  useEffect(() => {
    if (userDataCharacters.info && userDataCharacters.info !== undefined) {
      setCharacters(userDataCharacters.results);
      setInfo(userDataCharacters.info);
      setPages(userDataCharacters.info.pages);
      setPrevAndNextPage({ prevPage: userDataCharacters.info.prev, nextPage: userDataCharacters.info.next });
    }
  }, [userDataCharacters]);

  const setPaginationElement = (): any => {
    if (info !== undefined) {
      for (let i = 1; i <= pages; i++) {
        setPagination((paginationCount) => [...paginationCount, i]);
      }
    }
  };

  useEffect(() => {
    setPaginationElement();
  }, [pages]);

  return (
    <div className={style.container}>
      {userDataLoading ? (
        <div>loading...</div>
      ) : (
        characters.map((char: ICharacter) => {
          return (
            <Link to={"characterinfo"} key={char.id} onClick={() => dispatch(setCharacterID(char.id))}>
              <CharacterCard char={char} />
            </Link>
          );
        })
      )}

      <Pagination
        paginationCount={paginationCount}
        prevAndNextPage={prevAndNextPage}
        currentPage={currentPage}
        setPreVAndNextLink={setPreVAndNextLink}
        setCurrentPage={setCurrentPage}
      />
        
    </div>
  );
};

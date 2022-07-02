import style from "./CharacterInfo.module.scss";

export const CharacterInfoLayout = ({ characterAvatar, character }: any) => {

	//console.log(character.location.name)
  return (
    <div className={style.container}>
      <div className={style.avatar}>
        <img src={characterAvatar} alt={characterAvatar}/>
      </div>

      <div className={style.fullinfo}>
        <h1>{character.name}</h1>
					<p><b>name:</b> {character.name}</p>
					<p><b>id:</b> {character.id}</p>
					{/* <p><b>origin:</b> {character.origin.name}</p> */}
					<p><b>status:</b> {character.status}</p>
					<p><b>species:</b> {character.species}</p>
					<p><b>gender:</b> {character.gender}</p>
					{/* <p><b>location:</b> {character.location.name}</p> */}
					<p><b>created:</b> {character.created}</p>
      </div>
    </div>
  );
};

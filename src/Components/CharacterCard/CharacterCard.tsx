import style from "./CharacterCard.module.scss";
import { StatusLabel } from "../StatusLabel/StatusLabel";

export const CharacterCard = ({ char }: any) => {
  return (
      <div className={style.characterCard}>
        <img src={char.image} alt={char.name} />
        <div>
          <span className={style.infoLine}>{`${char.name} `}</span>
          <span className={style.infoLine}>
            <StatusLabel status={char.status} />
            {`${char.status} - ${char.species} `}
          </span>
        </div>
      </div>
  );
};

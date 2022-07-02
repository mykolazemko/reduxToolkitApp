import style from './StatusLabel.module.scss';

interface Props {
  status: string;
}

export const StatusLabel = ({ status }: Props) => {
  return (
    <span>
      {(() => {
        switch (status) {
          case "Alive":
            return <span className={`${style.alive} ${style.label}`}></span>;
          case "Dead":
            return <span className={`${style.dead} ${style.label}`}></span>;
          case "unknown":
            return <span className={`${style.unknown} ${style.label}`}></span>;
        }
      })()}
    </span>
  );
};

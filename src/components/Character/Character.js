import css from "./character.module.css";
import { Link } from "react-router-dom";

const Character = ({ character }) => {
  const { name, image, id, status, gender } = character;

  return (
    <Link to={`/character/${id}`}>
      <div className={css.character}>
        <div className={css.characterInner}>
          <div className={css.imgBlock}>
            <img
              src={image}
              alt={`logo`}
              style={{ maxWidth: "100px", minWidth: "50px" }}
            />
          </div>
          <div className={css.infoBlock}>
            <div className={css.title}>
              <h2>{name}</h2>
            </div>
            <div className={css.statusInfo}>{status}</div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export { Character };

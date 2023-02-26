import css from "./episdoe.module.css";
import { Link } from "react-router-dom";

const Episode = ({ episode }) => {
  return (
    <Link to={`/episode/${episode.id}`}>
      <div className={css.episodeWrapper}>
        <div>
          <h4>{episode.name}</h4>
        </div>
        <div className={css.episode}>{episode.episode}</div>
        <div className={css.airDate}>
          <div className={css.airDateStatus}>Air date:</div> {episode.air_date}
        </div>
      </div>
    </Link>
  );
};

export { Episode };

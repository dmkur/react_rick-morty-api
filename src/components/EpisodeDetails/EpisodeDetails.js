import css from "./episodeDetails.module.css";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { episodeActions } from "../../redux";

import { EpisodeCharacters } from "../EpisodeCharacters/EpisodeCharacters";

const EpisodeDetails = () => {
  const { episode, isLoading } = useSelector((state) => state.episodeReducer);
  const dispatch = useDispatch();
  const { episodeId } = useParams();
  const { characters } = episode;

  useEffect(() => {
    dispatch(episodeActions.episodeById({ id: episodeId }));
  }, []);

  const idsArray = [];

  if (!isLoading) {
    return <h1>Loading...</h1>;
  } else {
    for (const i of characters) {
      idsArray.push(i.split("/").pop());
    }
  }

  return (
    <div>
      <div className={css.episodeDetailsInfo}>
        <div className={css.title}>{episode.name}</div>
        <div>{episode.episode}</div>
        <div>Air date: {episode.air_date}</div>
      </div>
      <div>
        <h3>Characters in episode:</h3>

        {episode && <EpisodeCharacters arrayIds={idsArray} id={episodeId} />}
      </div>
    </div>
  );
};

export { EpisodeDetails };

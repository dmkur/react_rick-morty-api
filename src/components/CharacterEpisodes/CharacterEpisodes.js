import css from "./characterEpisodes.module.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { characterActions } from "../../redux";
import { Episode } from "../Episode/Episode";

const CharacterEpisodes = ({ ids, id }) => {
  const { characterEpisodes } = useSelector((state) => state.characterReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(characterActions.characterEpisodes({ ids }));
  }, [id]);

  return (
    <div className={css.characterEpisodes}>
      {characterEpisodes.map((episode) => (
        <Episode episode={episode} key={episode.id} />
      ))}
    </div>
  );
};

export { CharacterEpisodes };

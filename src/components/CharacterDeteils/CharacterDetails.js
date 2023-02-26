import css from "./characterDetails.module.css";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { characterActions } from "../../redux";
import { CharacterEpisodes } from "../CharacterEpisodes/CharacterEpisodes";

const CharacterDetails = () => {
  const { character, isLoading } = useSelector(
    (state) => state.characterReducer
  );
  const {
    name,
    image,
    status,
    gender,
    species,
    location,
    origin,
    episode
  } = character;
  // console.log(character);

  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(characterActions.characterById({ id }));
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  const arrayIds = [];
  // if (character) {
  for (const e in episode) {
    const ids = episode[e].split("/").pop();
    arrayIds.push(ids);
  }
  // }

  return (
    <div>
      <div className={css.characterDeteils}>
        <div className={css.imgBlock}>
          <img src={image} alt={"logo"} />
        </div>
        <div className={css.characterDeteilsInfo}>
          <h3>{name}</h3>
          <div className={css.status}>
            {species} - {gender} - {status}
          </div>
          <div className={css.origin}>
            <div className={css.orignTitle}>Orign:</div> {origin.name}
          </div>
          <div className={css.location}>
            <div className={css.locationTitle}>Location:</div>{" "}
            {location && character.location.name}
          </div>
        </div>
      </div>
      <div className={css.characterDetails}>
        <h2 className={css.characterDetailsTitle}>Episodes with hero:</h2>
        <CharacterEpisodes ids={arrayIds} id={character.id} />
      </div>
    </div>
  );
};

export { CharacterDetails };

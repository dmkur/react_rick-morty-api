import css from "./episodeFindForm.module.css";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { episodeActions } from "../../redux";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const EpisodeFindForm = () => {
  const { queryParams } = useSelector((state) => state.episodeReducer);
  const { register, handleSubmit, reset, setValue } = useForm();
  const dispatch = useDispatch();
  const [query, setQuery] = useSearchParams();
  // console.log(query.get("name"));
  // console.log(query.get("episode"));

  useEffect(() => {
    if (queryParams) {
      setValue("name", queryParams.name);
      setValue("episode", queryParams.episode);
    }
  }, [query]);

  const submit = (obj) => {
    for (const key in obj) {
      if (obj[key] === "") delete obj[key];
    }
    setQuery(obj);
    dispatch(episodeActions.setQuery(obj));
  };

  const res =  () => {
    setQuery(query.delete("name", "episode"));

    dispatch(episodeActions.setQuery());
    reset();
  };

  return (
    <div className={css.formWrapper}>
      <form onChange={handleSubmit(submit)}>
        <div>
          Name:
          <input
            placeholder={"Anatomy Park"}
            type={"text"}
            {...register("name")}
          />
        </div>
        <div className={css.secondInput}>
          Episode:
          <input
            placeholder={"S01E01"}
            type={"text"}
            {...register("episode")}
          />
        </div>
      </form>
      <button onClick={() => res()}>Reset</button>
    </div>
  );
};

export { EpisodeFindForm };

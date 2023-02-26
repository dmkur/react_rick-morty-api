import css from "./characterFindForm.module.css";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { genderArray, statusArray } from "../../constants";
import { characterActions } from "../../redux";
import { useEffect } from "react";

const CharacterFindForm = () => {
  const { queryParams } = useSelector((state) => state.characterReducer);
  const { register, handleSubmit, reset, setValue } = useForm();
  const dispatch = useDispatch();
  const [query, setQuery] = useSearchParams();

  // console.log(queryParams, "000000000000000");
  useEffect(() => {
    if (queryParams) {
      setValue("status", queryParams.status);
      setValue("name", queryParams.name);
      setValue("gender", queryParams.gender);
    }
  }, [query]);

  const submit = (obj) => {
    for (const key in obj) {
      if (obj[key] === "none" || obj[key] === "") delete obj[key];
    }
    setQuery(obj);
    dispatch(characterActions.setQuery(obj));
  };

  const res = () => {
    reset();
    setQuery("");
    dispatch(characterActions.setQuery());
  };

  return (
    <div className={css.formWrapper}>
      <form onChange={handleSubmit(submit)}>
        <div>
          <input
            type={"text"}
            placeholder={"Name of hero"}
            {...register("name")}
          />
        </div>
        <div>
          Status:{" "}
          <select {...register("status")}>
            {statusArray.map((v, index) => (
              <option key={index}>{v}</option>
            ))}
          </select>
        </div>
        <div>
          Gender:{" "}
          <select {...register("gender")}>
            {genderArray.map((v, index) => (
              <option key={index}>{v}</option>
            ))}
          </select>
        </div>
      </form>
      <div>
        <button onClick={() => res()}>Reset fields</button>
      </div>
    </div>
  );
};

export { CharacterFindForm };

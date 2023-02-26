import css from "./header.module.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className={css.headerWrapper}>
        <button onClick={() => navigate("/character")}>Characters</button>

        <button onClick={() => navigate("/episode")}>Episodes</button>
      </div>
    </div>
  );
};

export { Header };

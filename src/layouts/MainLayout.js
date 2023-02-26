import css from "./mainLayout.module.css";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { Header } from "../components";

const MainLayout = () => {
  const { error } = useSelector((state) => state.characterReducer);
  return (
    <div className={css.mainLayoutWrapper}>
      <Header />
      {error && JSON.stringify(error)}

      <Outlet />
    </div>
  );
};

export { MainLayout };

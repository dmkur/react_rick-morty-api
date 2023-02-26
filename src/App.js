import css from "./app.module.css";
import { Navigate, Route, Routes } from "react-router-dom";
import { MainLayout } from "./layouts";
import {
  CharactersPage,
  CharacterDetailsPage,
  EpisodesPage,
  EpisodeDetailsPage
} from "./pages";

const App = () => {
  return (
    <div className={css.appWrapper}>
      <Routes>
        <Route path={""} element={<MainLayout />}>
          <Route index element={<Navigate to={"/character"} />} />
          <Route path={"character"} element={<CharactersPage />} />
          <Route path={"character/:id"} element={<CharacterDetailsPage />} />
          <Route path={"episode"} element={<EpisodesPage />} />
          <Route path={"episode/:episodeId"} element={<EpisodeDetailsPage />} />
        </Route>
      </Routes>
    </div>
  );
};

export { App };

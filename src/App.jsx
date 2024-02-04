import { Provider } from "mobx-react";
import store from "./stores/reposStore";
import { Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "./components/Layout";
import { MainPage } from "./pages/MainPage";
import { DetailsPage } from "./pages/DetailsPage";
import { NotFoundPage } from "./components/NotFoundPage";

function App() {
  return (
    <Provider {...store}>
      <>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<MainPage />} />
            <Route path="details/:id" element={<DetailsPage />} />
            <Route path="404" element={<NotFoundPage />} />
            <Route path="*" element={<Navigate replace to="404" />} />
          </Route>
        </Routes>
      </>
    </Provider>
  );
}

export default App;

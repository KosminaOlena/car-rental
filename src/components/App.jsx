import { Route, Routes, Navigate } from "react-router-dom";
import { lazy } from "react";

import Layout from "./Layout/Layout";

const HomePage = lazy(() => import('pages/Home/Home'));
const CatalogPage = lazy(() => import('pages/Catalog/Catalog'));
const FavoritesPage = lazy(() => import('pages/Favorites/Favorites'))

const App = () => {
  return(
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="catalog" element={<CatalogPage />} />
          <Route path="favorites" element={<FavoritesPage/>} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>

    </div>
  )
}

export default App;

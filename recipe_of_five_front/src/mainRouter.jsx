import { createBrowserRouter } from "react-router-dom";
import React, { createContext } from "react";

import MainPage from "./routes/main/mainPage";
import RecipeDescrip from "./routes/detail/RecipeDescrip";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <MainPage />,
    },
    {
        path: "/detail/:id",
        element: <RecipeDescrip />,
    },
]);

export default Router;

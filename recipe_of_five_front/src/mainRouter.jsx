import { createBrowserRouter } from "react-router-dom";
import React, { createContext } from "react";

import MainPage from "./routes/main/mainPage";
import DetailPage from "./routes/detail/detailPage";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <MainPage />,
    },
    {
        path: ":id",
        element: <DetailPage />,
    },
]);

export default Router;

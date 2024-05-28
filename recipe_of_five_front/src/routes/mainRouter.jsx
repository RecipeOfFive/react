import { BrowserRouter, Routes, createBrowserRouter } from "react-router-dom";
import React from "react";
import MainPage from "~/routes/MainPage";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<mainPage />}>
                    <Route path=":Id" element={<detailPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

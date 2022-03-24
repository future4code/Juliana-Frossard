import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from '../pages/MainPage/MainPage';


const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={MainPage} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </BrowserRouter>
    );
};
export default Router;
import React from "react";
import { BrowserRouter, Routes, Route,Redirect } from "react-router-dom";
import MainPage from '../pages/MainPage/MainPage';
import ErrorPage from '../pages/ErrorPage/ErrorPage'


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
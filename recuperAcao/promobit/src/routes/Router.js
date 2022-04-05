import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from '../components/Header/Header'
import MainPage from '../pages/MainPage/MainPage';
import DetailPage from '../pages/DetailPage/DetailPage'
import ErrorPage from '../pages/ErrorPage/ErrorPage'

function Router() {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<MainPage/>} />
                <Route path="/movie-detail/:id" element={<DetailPage/>} />
                <Route path="*" element={<ErrorPage/>} />
            </Routes>
        </BrowserRouter>
    )
}
export default Router;
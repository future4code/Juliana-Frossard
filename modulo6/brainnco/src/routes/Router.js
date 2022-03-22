import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DiaDeSorte from '../pages/DiaDeSorte/DiaDeSorte';
import Lotofacil from '../pages/Lotofacil/Lotofacil';
import Lotomania from '../pages/Lotomania/Lotomania';
import MegaSena from '../pages/MegaSena/MegaSena';
import Quina from '../pages/Quina/Quina';
import Timemania from '../pages/Timemania/Timemania';
import ErrorPage from '../pages/ErrorPage/ErrorPage;'

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/diaDeSorte" element={DiaDeSorte} />
                <Route path="/lotofacil" element={Lotofacil} />
                <Route path="/lotomania" element={Lotomania} />
                <Route path="/megaSena" element={MegaSena} />
                <Route path="/quina" element={Quina} />
                <Route path="/timemania" element={Timemania} />
                <Route path="*" element={<ErrorPage/>} />
            </Routes>
        </BrowserRouter>
    );
};
export default Router;
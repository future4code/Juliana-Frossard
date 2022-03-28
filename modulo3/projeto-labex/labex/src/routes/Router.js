import React from 'react'
import { Routes, Route, BrowserRouter} from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage'
import ListTripsPage from '../pages/ListTripsPage/ListTripsPage'
import ListTripsPageClose from '../pages/ListTripsPage/ListTripsPageClose'
import AplicationFormPage from '../pages/ApplicationFormPage/ApplicationFormPage'
import LoginPage from '../pages/LoginPage/LoginPage'
import CreateTripPage from '../pages/CreateTripPage/CreateTripPage'
import TripDetailPage from '../pages/TripDetailsPage/TripDetailsPage'
import ErrorPage from '../pages/ErrorPage/ErrorPage'
import Header from '../components/Header/Header'




const Router = () => {
    return (
        <BrowserRouter>
        <Header/>
            <Routes>
                          <Route path="/" element={<HomePage />} />
                <Route path="/trips/list" element={<ListTripsPage />} />
                <Route path="/trips/application" element={<AplicationFormPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/admin/trips/list" element={<ListTripsPageClose/>} />
                <Route path="/admin/trips/create" element={<CreateTripPage />} />
                <Route path="/admin/trips/:id" element={<TripDetailPage />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;
import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './Components/Home/Home';
import AdmPage from './Components/Admin/AdmPage';
import CreateTrip from './Components/Admin/CreateTrip';
import Login from './Components/Admin/Login';
import TripDetails from './Components/Admin/TripDetails';
import ListTrips from './Components/ListTrips/AppForm/ListTrips';
import AplicationForm from './Components/ListTrips/AppForm/ApplicationForm'


import Error from './Components/Error/Error';





export default function () {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/trips/list" element={<ListTrips />} />
        <Route path="/trips/application" element={<AplicationForm />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin/trips/list" element={<AdmPage/>} />
        <Route path="/admin/trips/create" element={<CreateTrip />} />
        <Route path="/admin/trips/:id" element={<TripDetails />} />
        <Route path="/error" element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}
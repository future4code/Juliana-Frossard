import React from 'react';
import { URL_BASE } from '../../../URL'
import { useRequestData } from '../../../Hooks/Hooks'
import { useNavigate } from "react-router";

export default function ListTrips() {
    const navigate = useNavigate()

    const trips = useRequestData(`${URL_BASE}/trips`)
    console.log(trips)

    const goToCreateTrip = () => {
        navigate("/admin/trips/create")
    };
    const goToHome = () => {
        navigate("/")
    };
    
    return (
        <div>

            <h2>Lista de Viagens</h2>
            

            <div>
                <button onClick={goToHome}>Voltar</button>
                <button onClick={goToCreateTrip}>Inscrever-se</button>
            </div>
        </div>
    )
}
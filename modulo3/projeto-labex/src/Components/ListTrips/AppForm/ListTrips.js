import React from 'react';
import { URL_BASE } from '../../URL';
import {useRequestData} from '../../../Hooks/Hooks'

export default function ListTrips () {
    const trips = useRequestData(`${URL_BASE}/trips`)
    console.log(trips)

    
    return (
        <div>
            
           <h2>Lista de Viagens</h2>
           
           <div>
               <button>Voltar</button>
               <button>Inscrever-se</button>
           </div>
        </div>
    )
}
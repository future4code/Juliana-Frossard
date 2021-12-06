import React, { useEffect, useState } from "react";
import axios from "axios";

export default function PokeCard() {
    const [pokemon, setPokemon] = useState({})
    const [name, setName] = useState("")


    useEffect(() => {
        pegaPokemon()
    }, [pokemon])

    const pegaPokemon = (pokeName) => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
            .then((response) => {
                setPokemon(response.data.results)
                setName(response.data.name);
            }).catch((err) => {
                console.log(err.response.data.results)
            })
    }

    

    return (
        <div>
            <p>{name}</p>
            {/* <p>{pokemons.weight} Kg</p>
            {pokemons.types && <p>{pokemons.types[0].type.name}</p>}
            {pokemons.sprites && (
                <img src={pokemons.sprites.front_default} alt={pokemons.name} />
            )} */}

        </div>
    )
}

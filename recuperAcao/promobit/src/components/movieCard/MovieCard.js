import React from 'react';
import Cards from './Cards'
import {ContainerMovieCard} from './styled'
function MovieCard() {
    return (
        <ContainerMovieCard>
            <Cards/>
            <Cards/>
            <Cards/>
            <Cards/>
            <Cards/>
            <Cards/>
        </ContainerMovieCard>
    );
}

export default MovieCard;
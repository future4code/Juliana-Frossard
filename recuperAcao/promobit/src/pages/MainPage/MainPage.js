import React from 'react';
import FilterCard from '../../components/FilterCard/FilterCard'
import MovieCard from '../../components/movieCard/MovieCard';

function MainPage() {
    return (
        <div>
            <FilterCard />
            <MovieCard/>
        </div>
    )
};

export default MainPage;
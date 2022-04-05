import React from 'react';
import FilterCard from '../../components/FilterCard/FilterCard'
import MovieCard from '../../components/MovieCard/MovieCard';
import useRequestData from '../../hooks/useRequestData'
import { BASE_URL } from '../../constants/urls'
import { api_key } from '../../constants/urls'
import { useNavigate } from 'react-router-dom';
import { goToDetailPage } from '../../routes/coordinator';

function MainPage() {
    const navigate = useNavigate()
    const movies = useRequestData([], `${BASE_URL}/movie/popular${api_key}`)
    console.log(movies)

    const onClickCard = (id) => {
        goToDetailPage(navigate, id)
    }
    const movie = movies.map((item) => {
        return (
            <MovieCard
                key={item.id}
                title={item.title}
                poster_path={item.poster_path}
                release_date={item.release_date}
                onClick={() => onClickCard(item.id)}
            />
        )
    })
    return (
        <div>
            <FilterCard />
            {movie}
        </div>
    )
};

export default MainPage;
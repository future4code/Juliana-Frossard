import React from 'react';
import FilterCard from '../../components/FilterCard/FilterCard'
import MovieCard from '../../components/MovieCard/MovieCard';
import useRequestData from '../../hooks/useRequestData'
import useRequest from '../../hooks/useRequest'
import useRequests from '../../hooks/useRequests'
import { BASE_URL } from '../../constants/urls'
import { api_key } from '../../constants/urls'
import { useNavigate } from 'react-router-dom';
import { goToDetailPage } from '../../routes/coordinator';

function MainPage() {
    const navigate = useNavigate()
    const movies = useRequestData([], `${BASE_URL}/movie/popular${api_key}`)
    
    const genres = useRequests({}, `${BASE_URL}/genre/movie/list${api_key}`)
    console.log(genres)
    
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
    // const genre = genres.map((item) => {
    //     return(
    //         <FilterCard 
    //         key={item.id}
    //         id_genre={item.id}
    //         name_genre={item.name}/>
    //     )
    // })
    return (
        <div>
            <FilterCard />
            {movie}
        </div>
    )
};

export default MainPage;
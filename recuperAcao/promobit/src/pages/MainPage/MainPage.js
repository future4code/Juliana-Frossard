import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../../constants/urls'
import { api_key } from '../../constants/urls'
import FilterCard from '../../components/FilterCard/FilterCard'
import MovieCard from '../../components/MovieCard/MovieCard';
import Loading from '../../components/Loading/Loading'
import useRequestData from '../../hooks/useRequestData'
import useRequestsGenres from '../../hooks/useRequestsGenres'
import { goToDetailPage } from '../../routes/coordinator';
import { ListContainer } from './styled'

function MainPage() {
    const navigate = useNavigate()
    const [query, setQuery] = useState("");

    const movies = useRequestData([], `${BASE_URL}/movie/popular${api_key}}`)
    const genres = useRequestsGenres([], `${BASE_URL}/genre/movie/list${api_key}`)
    console.log('movies', movies)
    console.log('genres', genres)

    const onClickCard = (id) => {
        goToDetailPage(navigate, id)
    }
    const upDateQuery = (event) => {
        setQuery(event.target.value)
    }
    const movie = movies
        .filter((item) => {
            return item.title.toLowerCase().includes(query.toLowerCase())
        })
        .map((item) => {
            return (
                <ListContainer>
                    <MovieCard
                        key={item.id}
                        title={item.title}
                        poster_path={item.poster_path}
                        release_date={item.release_date}
                        onClick={() => onClickCard(item.id)}
                    />
                </ListContainer>
            )
        })

    return (
        <div>
            <ListContainer>
                <FilterCard
                    genres={genres}
                    upDateQuery={upDateQuery}
                    query={query}
                />
            </ListContainer>
            <ListContainer>
                {movie}
            </ListContainer>


        </div>
    )
};

export default MainPage;
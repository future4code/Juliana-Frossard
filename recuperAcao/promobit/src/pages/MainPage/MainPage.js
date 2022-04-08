import React from 'react';
import FilterCard from '../../components/FilterCard/FilterCard'
import MovieCard from '../../components/MovieCard/MovieCard';
import useRequestData from '../../hooks/useRequestData'
import useRequestsGenres from '../../hooks/useRequestsGenres'
import { BASE_URL } from '../../constants/urls'
import { api_key } from '../../constants/urls'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { goToDetailPage } from '../../routes/coordinator';
import {ListContainer} from './styled'


function MainPage() {
    const navigate = useNavigate()
    const [page, setPage] = useState(1)
    const movies = useRequestData([], `${BASE_URL}/movie/popular${api_key}`)
    
    const genres = useRequestsGenres({}, `${BASE_URL}/genre/movie/list${api_key}`)
    console.log(genres)
    
    const onClickCard = (id) => {
        goToDetailPage(navigate, id)
    }
    const changePageNext = (number) => {
        setPage(page + number)
        window.scrollTo(0,0)
    }

    const changePageBack = (number) => {
        if(page >= 2){
            setPage(page - number)
        }
        window.scrollTo(0,0)
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
            <ListContainer>
            {movie}
            </ListContainer>
            
            <div>
            <button onClick={(() => {changePageBack(1)})}>Voltar</button>
            <button onClick={(() => {changePageNext(1)})}>Próximo</button>
            </div>
        </div>
    )
};

export default MainPage;
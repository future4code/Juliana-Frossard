import React from 'react';
import DetailCard from '../../components/DetailCard/DetailCard';
import Typography from '@mui/material/Typography';
import { MovieCastDetailPage, ListContainer } from './styled'
import TrailerCard from '../../components/DetailCard/TrailerCard';
import { useParams } from 'react-router-dom'
import useRequest from '../../hooks/useRequest'
import useRequestCast from '../../hooks/useRequestCast'
import { api_key, BASE_URL } from '../../constants/urls';
import MovieCard from '../../components/MovieCard/MovieCard';

function DetailPage() {
    const params = useParams()
    const movie = useRequest({}, `${BASE_URL}/movie/${params.id}${api_key}`)
    console.log(movie)
    const casts = useRequestCast([],`${BASE_URL}/movie/${params.id}/credits${api_key}` )
    console.log(casts)
    const cast = casts.map((item) => {
        return(
            <MovieCard 
            key={item.cast_id}
            release_date={item.character}
            title={item.name}
            poster_path={item.profile_path}
            known_for_department={item.known_for_department}
            />
        )
    })
return (
        <div>
            <DetailCard
                title={movie.title}
                overview={movie.overview}
                genres={movie.genres}
                adult={movie.adult}
                release_date={movie.release_date}
                vote_average={movie.vote_average}
                poster_path={movie.poster_path}
                homepage={movie.homepage}
                runtime={movie.runtime}
            />
            <MovieCastDetailPage>
                <Typography variant="h5" component="div">
                    Elenco original:
                </Typography>
                <ListContainer>
                {cast}
                </ListContainer>
                
                <TrailerCard 
                poster_path={movie.poster_path}
                />
            </MovieCastDetailPage>
            
        </div>
    )
};

export default DetailPage;
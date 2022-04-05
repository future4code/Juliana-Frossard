import React from 'react';
import DetailCard from '../../components/DetailCard/DetailCard';
import MoviesCastCard from '../../components/DetailCard/MoviesCastCard';
import Typography from '@mui/material/Typography';
import { MovieCastDetailPage } from './styled'
import TrailerCard from '../../components/DetailCard/TrailerCard';
import { useParams } from 'react-router-dom'
import useRequest from '../../hooks/useRequest'
import { api_key, BASE_URL } from '../../constants/urls';

function DetailPage() {
    const params = useParams()
    const movie = useRequest({}, `${BASE_URL}/movie/${params.id}${api_key}`)
    console.log(movie)

    return (
        <div>
            <DetailCard
                title={movie.title}
                overview={movie.overview}
                genres={movie.genres}
                release_date={movie.release_date}
                vote_average={movie.vote_average}
                poster_path={movie.poster_path}
                homepage={movie.homepage}
            />
            <MovieCastDetailPage>
                <Typography variant="h5" component="div">
                    Elenco original:
                </Typography>
                <MoviesCastCard />
                <TrailerCard 
                poster_path={movie.poster_path}
                />
            </MovieCastDetailPage>
        </div>
    )
};

export default DetailPage;
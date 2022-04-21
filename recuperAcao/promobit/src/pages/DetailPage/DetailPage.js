import React from 'react';
import {useNavigate, useParams } from 'react-router-dom';
import { Button} from '@mui/material';
import Typography from '@mui/material/Typography';
import { api_key, BASE_URL } from '../../constants/urls';
import useRequest from '../../hooks/useRequest';
import useRequestCast from '../../hooks/useRequestCast';
import useRequestData from '../../hooks/useRequestData';
import CastCard from '../../components/CastCard/CastCard';
import { goBack } from '../../routes/coordinator';
import DetailCard from '../../components/DetailCard/DetailCard';
import TrailerCard from '../../components/DetailCard/TrailerCard';
import { goToDetailPage } from '../../routes/coordinator';
import { MovieCastDetailPage, ListContainer } from './styled';

function DetailPage() {
    const params = useParams()
    const navigate = useNavigate()

    const movie = useRequest({}, `${BASE_URL}/movie/${params.id}${api_key}`)
    const casts = useRequestCast([], `${BASE_URL}/movie/${params.id}/credits${api_key}`)
    const recommendations = useRequestData([], `${BASE_URL}/movie/${params.id}/recommendations${api_key}`)
    const similarMovie = useRequestData([], `${BASE_URL}/movie/${params.id}/similar${api_key}`)

    const onClickCard = (id) => {
        goToDetailPage(navigate, id)
    }

    const cast = casts.map((item) => {
        return (
            <CastCard
                key={item.cast_id}
                data={item.character}
                name={item.name}
                profile_path={item.profile_path}
                known_for_department={item.known_for_department}
            />
        )
    });

    const recommendation = recommendations.map((item) => {
        return (
            <CastCard
                key={item.id}
                data={item.release_date}
                name={item.title}
                profile_path={item.poster_path}
                onClick={() => onClickCard(item.id)}
            />
        )
    });
    const similar = similarMovie.map((item) => {
        return (
            <CastCard
                key={item.id}
                data={item.release_date}
                name={item.title}
                profile_path={item.poster_path}
                onClick={() => onClickCard(item.id)}
            />
        )
    });


    return (
        <div>
            <DetailCard
                key={movie.title}
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
                <Typography
                    gutterBottom
                    variant="h5"
                    component="div">
                    Trailer
                </Typography>
                <TrailerCard
                    params={params} />
                )
                <Typography
                    gutterBottom
                    variant="h5"
                    component="div">
                    Títulos Similares:
                </Typography>
                <ListContainer>
                    {similar}
                </ListContainer>
                <Typography
                    gutterBottom
                    variant="h5"
                    component="div">
                    Títulos mais procurados:
                </Typography>
                <ListContainer>
                    {recommendation}
                </ListContainer>
                <Button
             variant="contained"
             size="small"
              focusVisible
             gutterBottom
             onClick={() => goBack(navigate)}>Voltar</Button>
            </MovieCastDetailPage>
            
        </div>
    )
};

export default DetailPage;
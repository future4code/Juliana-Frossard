import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import {ContainerRating} from './styled'


function RatingCard(props) {

    const rate = () => {
        const vote_average = props.vote_average
        return (vote_average * 5) / 10

    }

    return (
        <ContainerRating>
            <Rating
                readOnly='true'
                name="hover-feedback"
                value={rate()}
                precision={0.2}
            />
        </ContainerRating>
    )
};
export default RatingCard;
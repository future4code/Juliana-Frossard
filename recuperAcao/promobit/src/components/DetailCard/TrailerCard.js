import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Tabs from '@material-ui/core/Tabs';

function TrailerCard() {
    return (
     
            <CardMedia
                component='img'
                sx={{ width: 600, height: 450 }}
                image="https://tm.ibxk.com.br/2020/01/30/30021141299110.jpg?ims=1120x420"
                alt="trailer"
            />


    )
};

export default TrailerCard;
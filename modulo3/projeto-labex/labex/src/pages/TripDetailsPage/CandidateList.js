import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CandidateCard from '../../components/CandidateCard/CandidateCard';



export const CandidateList = () => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography s
          variant='h5'
          gutterBottom
          align='start'
          color="primary">
          Lista de candidatos
        </Typography>
        <CandidateCard />

      </CardContent>

    </Card >
  );
}
export default CandidateList;
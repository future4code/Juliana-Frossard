import { Typography } from '@mui/material';
import React from 'react'
import { ScreenContainer } from '../../Global/GlobalStyled';

const ErrorPage = () => {
  return (
        <ScreenContainer>
      <Typography
        variant='h3'
        gutterBottom
        align='center'
        color="secondary">
        OPS! Ocorreu um erro.
      </Typography>
      <iframe src="https://giphy.com/embed/HtaGVNHVnTNuw" width="500" height="300" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
      </ScreenContainer>
   
  )
}

export default ErrorPage;
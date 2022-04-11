import React, { useState } from 'react';
import { Box } from '@mui/system';
import Typography from '@mui/material/Typography';
import { ContainerFilterCard, ContainerButton, 
    ButtonStyled, ContainerInput, Input } from './styled'

function FilterCard(props) {
    const [query, setQuery] = useState("");

    const genres = props.genres
        
    const genre = genres.map((item) => {
        return (
            <ButtonStyled
                key={item.id}
                variant="outlined"
                size="small"
                color='tertiary'
                focusVisible
            >{item.name}
            </ButtonStyled>
        )
    })


    return (
        <ContainerFilterCard
            sx={{
                bgcolor: 'primary.main'
            }}>
            <Box sx={{
                width: 781,
                height: 112,
                bgcolor: 'primary.main'
            }}>
                <Typography
                    variant="h3"
                    gutterBottom
                    color='text.secondary'
                    component="div"

                >
                    Milhões de filmes, séries e pessoas para descobrir. Explore já.
                </Typography>
            </Box>
                      
            <Typography
                gutterBottom
                color='text.secondary'
                variant='h6'
            >Filtre por:
            </Typography>
            <ContainerInput>
            <Input
            placeholder='Pesquisa'
            value={props.query}
            onChange={props.upDateQuery}
            />
            </ContainerInput>

            <ContainerButton>
                {genre}
            </ContainerButton>





        </ContainerFilterCard>
    )
};
export default FilterCard;
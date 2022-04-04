import React from 'react';
import { Box } from '@mui/system';
import Typography from '@mui/material/Typography';
import FilterButton from './FilterButton';
import { ContainerFilterCard } from './styled'

function FilterCard() {
    return (
        <Box
            sx={{
                height: 350,
                bgcolor: 'primary.main'
            }}>
            <ContainerFilterCard>
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
                    color='text.secondary'
                >Filtre por:
                </Typography>
                <FilterButton />
                
                
            </ContainerFilterCard>

        </Box>
    )
};
export default FilterCard;
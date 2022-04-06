import React from 'react';
import { Box } from '@mui/system';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { ContainerFilterCard } from './styled'

function FilterCard(props) {
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
                <Stack spacing={2} direction="row">
                    <Button variant="contained" color='tertiary'>botao</Button>
                </Stack>


            </ContainerFilterCard>

        </Box>
    )
};
export default FilterCard;
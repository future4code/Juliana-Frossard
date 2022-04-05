import React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

function FilterButton() {
    return (
        <Stack spacing={2} direction="row">
            <Button variant="contained" color='tertiary'>Outlined</Button>
            <Button variant="contained" color='tertiary'>Outlined</Button>
            <Button variant="contained" color='tertiary'>Outlined</Button>
            <Button variant="contained" color='tertiary'>Outlined</Button>
            <Button variant="contained" color='tertiary'>Outlined</Button>
            <Button variant="contained" color='tertiary'>Outlined</Button>
            <Button variant="contained" color='tertiary'>Outlined</Button>
      
        </Stack>
    )
};

export default FilterButton;
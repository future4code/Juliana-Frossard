import React from "react"
import List from '@mui/material/List';
import CheckIcon from '@mui/icons-material/Check';
import DoNotDisturbIcon from '@mui/icons-material/DoNotDisturb';
import { ListItemSecondaryAction } from '@mui/material';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { CardActionArea } from '@mui/material';




export const CandidateCard = () => {
    return (
        <CardActionArea>
            <List dense={true}>
            <Typography variant="h5" component="div">
                Candidato
            </Typography>
            <ListItemSecondaryAction>
                <IconButton edge="end">
                    <CheckIcon />
                </IconButton>
                <IconButton edge="end">
                    <DoNotDisturbIcon />
                </IconButton>
                      
            </ListItemSecondaryAction>
        </List>
        </CardActionArea>
        
    )
}

export default CandidateCard;


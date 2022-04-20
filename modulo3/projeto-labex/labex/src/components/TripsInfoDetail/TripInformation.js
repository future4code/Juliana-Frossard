import React from "react";
import Typography from '@mui/material/Typography';

export const TripInformation = (props) => {
    return (
        <div>
            <Typography color="text.secondary">
                <strong>{props.infoTitle}:</strong>{props.info}
            </Typography>
        </div>

    )
}

export default TripInformation;
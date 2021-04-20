import React from 'react';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';

const ReservationDetailsForm = () => {
    return (
        <div>
            <Paper>
                <Box p={3}>
                <h1> Reservation Details </h1>
                <Typography>
                    Date
                </Typography>
                <Typography>
                    Time
                </Typography>
                <Typography>
                    Number of People
                </Typography>
                </Box>
                
            </Paper>
        </div>
    )
}

export default ReservationDetailsForm;
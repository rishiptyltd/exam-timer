import React from 'react';
import { Alert, Container, Fab, Typography, Card, CardHeader, CardActions, CardContent, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField, FormGroup, FormControlLabel, Switch } from '@mui/material';
import AddIcon from '@mui/icons-material/AddOutlined';
import InfoIcon from '@mui/icons-material/InfoOutlined';
import PowerIcon from '@mui/icons-material/PowerSettingsNewOutlined';

const card1 = (
    <React.Fragment>
        <CardHeader title='Physics AP4' />
        <CardContent>
            <Typography variant='overline'>Time Remaining</Typography>
            <Typography variant='h2'>02:10:00</Typography>
            <Alert severity="error">This exam is about to commence.</Alert>
        </CardContent>
        <CardActions>
            <Button size="small">Pause</Button>
        </CardActions>
    </React.Fragment>
);

const card4 = (
    <React.Fragment>
        <CardHeader title='Physics AP4' />
        <CardContent>
            <Typography variant='overline'>Time Remaining</Typography>
            <Typography variant='h2'>02:09:10</Typography>
            <Alert severity="warning">Reading time is in progress.</Alert>
        </CardContent>
        <CardActions>
            <Button size="small">Pause</Button>
        </CardActions>
    </React.Fragment>
);


const card2 = (
    <React.Fragment>
        <CardHeader title='Physics AP4' />
        <CardContent>
            <Typography variant='overline'>Time Remaining</Typography>
            <Typography variant='h2'>00:11:22</Typography>
            <Alert severity="warning">Writing time is in progress.</Alert>
        </CardContent>
        <CardActions>
            <Button size="small">Pause</Button>
        </CardActions>
    </React.Fragment>
);

const card3 = (
    <React.Fragment>
        <CardHeader title='Physics AP4' />
        <CardContent>
            <Typography variant='overline'>Time Remaining</Typography>
            <Typography variant='h2'>00:00:00</Typography>
            <Alert severity="success">This exam has finished.</Alert>
        </CardContent>
        <CardActions>
            <Button size="small">Pause</Button>
        </CardActions>
    </React.Fragment>
);

export default function Home()
{
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () =>
    {
        setOpen(true);
    };

    const handleClose = () =>
    {
        setOpen(false);
    };

    return (
        <div>
            <Container>
                <Typography variant='overline'>

                </Typography>
                <Card variant='outlined'>{card1}</Card>
                <Card variant='outlined'>{card4}</Card>
                <Card variant='outlined'>{card2}</Card>
                <Card variant='outlined'>{card3}</Card>
                <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>Add New Timer</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            To add a new timer, put in the reading time and writing time below. If the test doesn't have reading time, click the switch to disable it.
                        </DialogContentText>
                        <form>
                            <FormGroup>
                                <FormControlLabel control={<Switch defaultChecked />} label="Reading Time" labelPlacement='start' />
                                <TextField
                                    autoFocus
                                    margin="dense"
                                    id="readingTime"
                                    label="Amount of Reading Time"
                                    type="text"
                                    fullWidth
                                    variant="standard"
                                    placeholder='hh:mm:ss'
                                />
                            </FormGroup>
                            <TextField
                                autoFocus
                                margin="dense"
                                id="writingTime"
                                label="Amount of Writing Time"
                                type="text"
                                fullWidth
                                variant="standard"
                                placeholder='hh:mm:ss'
                            />
                            <TextField
                                autoFocus
                                margin="dense"
                                id="totalTime"
                                label="Total Time"
                                type="text"
                                fullWidth
                                variant="standard"
                                placeholder='hh:mm:ss'
                                disabled
                                defaultValue={1}
                            />
                        </form>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button onClick={handleClose} type='submit'>Finish</Button>
                    </DialogActions>
                </Dialog>
                {/* <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>Start All Timers</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Are you sure you would like to start all timers?
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button onClick={handleClose} type='submit'>Continue</Button>
                    </DialogActions>
                </Dialog> */}
            </Container>
            <div sx={{ bottom: 0, right: 0 }}>
                <Fab color="warning" aria-label="help" variant='extended' onClick={handleClickOpen}>
                    <InfoIcon sx={{ mr: 0.5 }} fontSize='small' />
                    Help
                </Fab>
                <Fab color="error" aria-label="add" variant='extended' onClick={handleClickOpen}>
                    <PowerIcon sx={{ mr: 0.5 }} fontSize='small' />
                    Start All Timers
                </Fab>
                <Fab color="success" aria-label="add" variant='extended' onClick={handleClickOpen}>
                    <AddIcon sx={{ mr: 0.5 }} fontSize='small' />
                    Add New Timer
                </Fab>
            </div>
        </div>
    )
}

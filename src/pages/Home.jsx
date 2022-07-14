import React from 'react';
import { Container, Fab, Dialog } from '@mui/material';
import AddIcon from '@mui/icons-material/AddOutlined';
import InfoIcon from '@mui/icons-material/InfoOutlined';
import NewTimer from './components/NewTimer'

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
        <Container>
            <div>
                <Fab color="warning" aria-label="add" variant='extended' onClick={handleClickOpen}>
                    <InfoIcon sx={{ mr: 0.5 }} fontSize='small' />
                    Help
                </Fab>
                <Fab color="success" aria-label="add" variant='extended' onClick={handleClickOpen}>
                    <AddIcon sx={{ mr: 0.5 }} fontSize='small' />
                    Add New Timer
                </Fab>
            </div>
            <Dialog open={open} onClose={handleClose}>
                <NewTimer />
            </Dialog>
        </Container>
    )
}

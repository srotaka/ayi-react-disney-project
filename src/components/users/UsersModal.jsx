import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

export default function UsersModal({firstname, lastname, email, username, phone, city,street, number}) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

  return (
    <div>
     <Button onClick={handleOpen} id='modal-button'>More Info</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2" className='capitalize-text'>
            <strong>{firstname} {lastname}</strong>
            </Typography>
            <Divider />
            <Typography sx={{ mt: 2 }}>
             <strong> Email:</strong> {email}              
            </Typography>

            <Typography sx={{ mt: 2 }}>
            <strong>Username: </strong>{username}
            </Typography>

            <Typography sx={{ mt: 2 }}>
            <strong>Phone: </strong>{phone}
            </Typography>

            <Typography className='capitalize-text' sx={{ mt: 2 }}>
            <strong>Address: </strong>{street} {number}
            </Typography>

            <Typography className='capitalize-text' sx={{ mt: 2 }}>
            <strong>City: </strong>{city}
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import UsersModal from './UsersModal';


const UsersCards = ({ id, firstname, lastname, email, username, phone, city, street, number, }) => {
    
  return (
    <>
      <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        <CardMedia
          component="img"
          image="https://i.pinimg.com/originals/bf/bd/17/bfbd17961cd2a0f68c90902249c0c3c6.jpg"
          alt={firstname}
        />

        <CardContent sx={{ flexGrow: 1 }}>
          <Typography variant="h5" component="h2" className='capitalize-text'>
            {firstname} {lastname}
          </Typography>
        </CardContent>
        <CardActions>
          <UsersModal firstname={firstname} lastname={lastname}
            email={email} username={username} phone={phone} city={city}
            street={street} number={number} />
          {/* <Button size="small">Edit</Button> */}
        </CardActions>
      </Card>
    </>
  )
}

export default UsersCards
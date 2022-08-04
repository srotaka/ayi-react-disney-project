import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CharacterModal from './CharacterModal';


const CharacterCards = ({ name, image, films, shortFilms }) => {

  return (
    <>
      <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        <CardMedia
          component="img"          
          image={image}
          alt={name}
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
           
        </CardContent>
         <CharacterModal  name={name} films={films} shortFilms= {shortFilms} />       
      </Card>
    </>
  )
}

export default CharacterCards
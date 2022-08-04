import React, { useEffect } from 'react'
import { getCharacters } from '../../redux/actions/characters';
import { useDispatch, useSelector } from 'react-redux';
import CharacterCards from './CharacterCards';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

const CharacterFetchData = () => {
  const dispatch = useDispatch();
  const characters = useSelector((state) => state.characters);
  
  useEffect(() => {
    dispatch(getCharacters());
  }, [dispatch]);

  console.log(characters);
  
  return (
    <section className='characters-page'>
     <h1 className='page-title'><strong> Disney Characters</strong></h1>
      <Container sx={{ py: 1 }} maxWidth="xl">
        <Grid container spacing={3}>
          {characters.map((char, index) => (
            <Grid key={index} item xs={12} sm={6} md={3}>
            <CharacterCards name={char.name} image={char.imageUrl} films={char.films} shortFilms= {char.shortFilms} key={char._id} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  )
}


export default CharacterFetchData
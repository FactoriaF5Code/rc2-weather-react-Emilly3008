import { Box, Container, TextField, Typography, LoadingButtom } from '@mui/material';
import { useState } from 'react';

export default function App() {

  const [city, setCity] = useState('');
  const onSubmit = e => {
    e.preventDefault();
    console.log("submit");
  }

  return (
    <Container
      maxWidht='xs'
      sx={{ marginTop: 2 }}
    >
      <Typography
        variant='h3'
        component='h1'
        aling='center'
        gutterBottom
      >
        Weather App
      </Typography>
      <Box
        sx={{ display: 'grid', gap: 2 }}
        component='form'
        autoComplete='off'
        onSubmit={onSubmit}
      >
        <TextField
          id='city'
          label='ciudad'
          variant='outlined'
          size='small'
          required
          fullWidth
          value={city}
          onChange={(e) => setCity(e.target.value)}
      />

      <LoadingButtom
        type='submit'
        variant='contained'
        loading={false}
        loadingIndicator='Cargando...'
      >
      </LoadingButtom>
    </Box>
    </Container >
  );
}
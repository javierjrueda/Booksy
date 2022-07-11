import {useState} from 'react';
import {Box, TextField, Typography, Grid} from '@mui/material';
import RoundedButton from 'components/ui/Button';
import {layout} from 'theme/layout';

export default function LoginView(formValues, handleFormSubmit, handleInputChange) {
  const [form, setForm] = useState({
    email: 'javier.artkine@gmail.com',
    password: 'hola1234'
  });

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await fetch('https://librarify.latteandfront.es/api/login_check', {
        method: 'POST',
        body: JSON.stringify({
          username: form.email,
          password: form.password
        })
      });
      if (response.ok) {
        console.log('Login hecho!');
        console.log(form, response.ok);
      } else {
        console.log('Email o contraseña incorrectos');
        console.log(form, response.ok);
      }
    } catch (error) {
      console.log('Algo ha salido mal');
    }
  }

  const handleChange = (event) => {
    const {name, value} = event.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  return (
    <Box
      sx={{
        p: 5,
        minWidth: '400px',
        maxWidth: '400px',
        mt: `calc(((100vh - ${layout.menuHeight})/2) - 155px)`,
        ml: `calc(50% - 240px)`
      }}
      backgroundColor={'primary.opacity'}
      borderRadius={5}
    >
      <Typography variant="h5" align={'center'} sx={{mb: 4}}>
        Sign in on Booksy
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2} alignItems="center" justify="center" direction="column">
          <Grid item>
            <TextField
              sx={{minWidth: 250}}
              id="email"
              name="email"
              label="Email"
              defaultValue={form.email}
              onChange={handleChange}
            />
          </Grid>
          <Grid item>
            <TextField
              sx={{minWidth: 250}}
              id="password"
              name="password"
              label="Password"
              type="password"
              defaultValue={form.password}
              onChange={handleChange}
            />
          </Grid>
          <Grid item>
            <RoundedButton variant="contained" type="submit" size="large">
              Sign in
            </RoundedButton>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
}

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {LOGIN, BOOKS, CATEGORIES} from 'config/router/paths';

export default function HeaderView() {
  return (
    <Box>
      <AppBar position="fixed" elevation={0}>
        <Toolbar>
          <Typography variant="h5" component="div" sx={{flexGrow: 1}}>
            📚 Booksy
          </Typography>
          <Button color="inherit" href={BOOKS}>
            Books
          </Button>
          <Button color="inherit" href={CATEGORIES}>
            Categories
          </Button>
          <Button sx={{ml: 1}} color="inherit" variant="outlined" href={LOGIN}>
            Sign in
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

import {ThemeProvider} from '@mui/material';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from 'components/Header';
import PublicRoute from 'components/router/PublicRoute';
import {appTheme} from 'theme/theme';
import Login from 'views/Login';

export default function App() {
  return (
    <div>
      <ThemeProvider theme={appTheme}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<PublicRoute />}>
              <Route index element={<Login />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

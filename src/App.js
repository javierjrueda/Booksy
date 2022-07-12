import { ThemeProvider } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "components/Header";
import PublicRoute from "components/router/PublicRoute";
import { AuthContextProvider } from "contexts/AuthContext";
import PrivateRoute from "components/router/PrivateRoute";
import { appTheme } from "theme/theme";
import Login from "views/Login";
import Library from "components/Library";
import { PRIVATE } from "config/routes/paths";

export default function App() {
  return (
    <div>
      <AuthContextProvider>
        <ThemeProvider theme={appTheme}>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" element={<PublicRoute />}>
                <Route index element={<Login />} />
              </Route>
              <Route path={PRIVATE} element={<PrivateRoute />}>
                <Route index element={<Library />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </AuthContextProvider>
    </div>
  );
}

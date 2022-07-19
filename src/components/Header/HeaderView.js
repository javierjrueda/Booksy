import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { BOOKS, CATEGORIES } from "config/routes/paths";
import { useAuthContext } from "contexts/AuthContext";
import LoginButton from "components/ui/LoginButton";
import { useEffect } from "react";

export default function HeaderView() {
  const { logout } = useAuthContext();
  const { login } = useAuthContext();
  const { isAuthenticated } = useAuthContext();

  let callback = "";
  let text = "Log in";

  // useEffect(() => {
  //   if (isAuthenticated === true) {
  //     callback = logout();
  //     text = "Log out";
  //   } else {
  //     callback = login();
  //     text = "Log in";
  //   }
  // }, [isAuthenticated]);

  return (
    <Box>
      <AppBar position="fixed" elevation={0}>
        <Toolbar>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            📚 Booksy
          </Typography>
          <Button color="inherit" href={BOOKS}>
            Books
          </Button>
          <Button color="inherit" href={CATEGORIES}>
            Categories
          </Button>
          <LoginButton text={text} />
        </Toolbar>
      </AppBar>
    </Box>
  );
}

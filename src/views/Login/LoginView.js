import { useState } from "react";
import { Box, TextField, Typography, Grid } from "@mui/material";
import RoundedButton from "components/ui/RoundedButton";
import { layout } from "theme/layout";
import { useAuthContext } from "contexts/AuthContext";
import apiClient from "utils/apiClient";

export default function LoginView(
  formValues,
  handleFormSubmit,
  handleInputChange
) {
  const { login } = useAuthContext();

  const [form, setForm] = useState({
    username: "javier.artkine@gmail.com",
    password: "hola1234",
  });

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await apiClient.post("login_check", form);
      if (response.ok) {
        login();
      } else {
        console.log("Email o contraseña incorrectos");
        console.log(form, response.ok);
      }
    } catch (error) {
      console.log("Algo ha salido mal");
    }
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  return (
    <Box
      sx={{
        p: 5,
        minWidth: "400px",
        maxWidth: "400px",
        mt: `calc(((100vh - ${layout.menuHeight})/2) - 155px)`,
        ml: `calc(50% - 240px)`,
      }}
      backgroundColor={"primary.opacity"}
      borderRadius={5}
    >
      <Typography variant="h5" align={"center"} sx={{ mb: 4 }}>
        Sign in on Booksy
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid
          container
          spacing={2}
          alignItems="center"
          justify="center"
          direction="column"
        >
          <Grid item>
            <TextField
              sx={{ minWidth: 250 }}
              id="username"
              name="username"
              label="Email"
              defaultValue={form.username}
              onChange={handleChange}
            />
          </Grid>
          <Grid item>
            <TextField
              sx={{ minWidth: 250 }}
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

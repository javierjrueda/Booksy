import { Button } from "@mui/material";

export default function LoginButton({ text, callback }) {
  return (
    <Button
      sx={{ ml: 1 }}
      color="inherit"
      variant="outlined"
      onClick={callback}
    >
      {text}
    </Button>
  );
}

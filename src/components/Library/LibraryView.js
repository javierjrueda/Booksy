import { Typography } from "@mui/material";
import { useAuthContext } from "contexts/AuthContext";

export default function LibraryView() {
  const { isAuthenticated } = useAuthContext();
  return (
    <Typography variant="h4" color={"primary"} mt={10}>
      👋🏼 Hi @user, welcome to your Library – {isAuthenticated}
    </Typography>
  );
}

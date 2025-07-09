import { Box, Link } from "@mui/material";
import { NavLink } from "react-router";

export default function AuthNav() {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
      <Link component={NavLink} to="/register" sx={{ color: "white" }}>
        Register
      </Link>
      <Link component={NavLink} to="/login" sx={{ color: "white" }}>
        Login
      </Link>
    </Box>
  );
}

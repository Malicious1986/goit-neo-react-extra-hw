import { Box, Link } from "@mui/material";
import { useSelector } from "react-redux";
import { NavLink } from "react-router";

import { selectIsLoggedIn } from "../../redux/auth/selectors";

export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <Box sx={{ flexGrow: 1, display: "flex", gap: 2 }}>
      <Link component={NavLink} to="/" sx={{ color: "white" }}>
        {({ isActive }) => (
          <span style={{ fontWeight: isActive ? "bold" : "normal" }}>Home</span>
        )}
      </Link>
      {isLoggedIn ? (
        <Link component={NavLink} to="/contacts" sx={{ color: "white" }}>
          {({ isActive }) => (
            <span style={{ fontWeight: isActive ? "bold" : "normal" }}>
              Contacts
            </span>
          )}
        </Link>
      ) : null}
    </Box>
  );
}

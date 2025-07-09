import { Box, Typography } from "@mui/material";
import Button from '@mui/material/Button';
import { useSelector, useDispatch } from "react-redux";

import { logout } from "../../redux/auth/operations";
import { selectUser } from "../../redux/auth/selectors";

export default function UserMenu() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    user && (
      <Box sx={{display: "flex", alignItems: 'center', gap: 2}}>
        <Typography component="p">{user.name}</Typography>
        <Button variant="contained" onClick={() => dispatch(logout())}>LogOut</Button>
      </Box>
    )
  );
}

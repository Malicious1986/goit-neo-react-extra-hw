
import { Container } from "@mui/material";

import AppBar from "../AppBar/AppBar";

export default function Layout({children}) {
  return (
    <>
      <AppBar />
      <Container>
        {children}
      </Container>
    </>
  );
}

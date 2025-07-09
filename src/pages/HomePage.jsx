import { Box, Typography, Button, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          minHeight: "calc(100vh - 64px)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          gap: 4,
        }}
      >
        <Typography variant="h3" component="h1" gutterBottom>
          Welcome to Contacts App
        </Typography>

        <Typography variant="body1" color="text.secondary">
          Store and manage your personal contacts.
        </Typography>

        <Button
          variant="contained"
          size="large"
          onClick={() => navigate("/contacts")}
        >
          Get Started
        </Button>
      </Box>
    </Container>
  );
}

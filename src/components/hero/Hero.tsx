import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

import Background from "./Background";

const Hero = () => {
  return (
    <Stack
      component="article"
      alignItems="center"
      sx={{
        width: "100%",
        position: "relative",
        textAlign: "center",
        pb: "250px",
        mb: 20,
      }}
    >
      <Background />
      <Container
        sx={{
          maxWidth: { sm: "85%", lg: "800px" },
          mb: 8,
          mt: 25,
        }}
      >
        <Typography variant="h1" color="primary.contrastText">
          The best products start with Figma
        </Typography>
        <Typography variant="h4" color="primary.contrastText" mt={2}>
          Most calendars are designed for teams.{" "}
          <Typography variant="inherit" display={{ xs: "none", sm: "inline" }}>
            Slate is designed for freelancers
          </Typography>
        </Typography>
      </Container>
      <Button sx={{ px: 8 }}>Try For Free</Button>
    </Stack>
  );
};

export default Hero;

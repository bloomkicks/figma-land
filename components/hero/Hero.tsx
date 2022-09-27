import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Background from "./Background";
import Stack from "@mui/material/Stack";

const Hero = () => {
  return (
    <Stack
      component="article"
      alignItems="center"
      sx={{
        width: "100%",
        position: "relative",
        textAlign: "center",
        pb: '300px',
        mb: 11
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
        <Typography variant="h1" color="darkBg.text">
          The best products start with Figma
        </Typography>
        <Typography variant="h4" color="darkBg.text" mt={2}>
          Most calendars are designed for teams.
          <Typography
            variant="inherit"
            display={{ xs: "none", sm: "inline" }}
          >
            {" "}
            Slate is designed for freelancers
          </Typography>
        </Typography>
      </Container>
      <Button sx={{ px: 8 }}>Try For Free</Button>
    </Stack>
  );
};

export default Hero;

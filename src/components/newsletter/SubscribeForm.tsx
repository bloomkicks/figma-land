import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

const SubscribeForm = ({ isDesktop }: { isDesktop?: boolean }) => {
  function subscribeHandler(e: any) {
    e.preventDefault();
  }

  return (
    <Box
      maxWidth="90%"
      width={{ xs: 400, md: 500 }}
      minWidth="320px"
      display={{
        xs: isDesktop ? "none" : "block",
        md: isDesktop ? "block" : "none",
      }}
      mt={{ xs: 0, md: 8.5 }}
    >
      <Typography variant="h3">Subscribe to our Newsletter</Typography>
      <Typography variant="body1" mb={4.3}>
        Available exclusivery on Figmaland
      </Typography>
      <Stack
        component="form"
        onSubmit={subscribeHandler}
        spacing={1}
        direction={{ xs: "column", md: "row" }}
        sx={{
          width: "100%",
          alignItems: { xs: "stretch", md: "flex-start" },
          flexWrap: "no-wrap",
        }}
      >
        <TextField label="Your Email" sx={{ mb: 1.5, width: "100%" }} />
        <Button type="submit" sx={{ px: 5 }}>
          Subscribe
        </Button>
      </Stack>
    </Box>
  );
};

export default SubscribeForm;

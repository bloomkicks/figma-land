import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormGroup from "@mui/material/FormGroup";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const SubscribeForm = ({
  isDesktop,
}: {
  isDesktop?: boolean;
}) => {
  function subscribeHandler(e: any) {
    e.preventDefault();
  }

  return (
    <Box
      maxWidth="90%"
      width="350px"
      mx="auto"
      display={{
        xs: isDesktop ? "none" : "block",
        md: isDesktop ? "block" : "none",
      }}
      mt={{ xs: 0, md: 8.5 }}
    >
      <Typography variant="h3" mb={1.2}>
        Subscribe to our Newsletter
      </Typography>
      <Typography variant="body1" mb={4.3}>
        Available exclusivery on Figmaland
      </Typography>
      <Box
        component="form"
        sx={{ width: "100%" }}
        onSubmit={subscribeHandler}
      >
        <TextField
          label="Your Email"
          fullWidth
          sx={{ mb: 1.5 }}
        />
        <Button fullWidth type="submit">
          Subscribe
        </Button>
      </Box>
    </Box>
  );
};

export default SubscribeForm;

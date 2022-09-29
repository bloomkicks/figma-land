import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormGroup from "@mui/material/FormGroup";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const SubscribeForm = () => {
  function subscribeHandler(e: any) {
    e.preventDefault();
  }

  return (
    <Box maxWidth="100%" width="350px" textAlign="center" mx="auto">
      <Typography variant="h3" mb={1.2}>
        Subscribe to our Newsletter
      </Typography>
      <Typography variant="body1" mb={4.3}>
        Available exclusivery on Figmaland
      </Typography>
      <FormGroup sx={{ width: "100%" }} onSubmit={subscribeHandler}>
        <TextField label="Your Email" fullWidth sx={{ mb: 1.5 }} />
        <Button fullWidth type="submit">
          Subscribe
        </Button>
      </FormGroup>
    </Box>
  );
};

export default SubscribeForm;

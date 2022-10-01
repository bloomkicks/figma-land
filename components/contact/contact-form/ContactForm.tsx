import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";

const ContactForm = () => {
  return (
    <Card
      sx={{
        bgcolor: "primary.contrastText",
        borderRadius: "15px",
        width: "90%",
        mx: "auto",
        px: 2,
        pt: 5.5,
        mt: 7,
        boxShadow: ` 
          rgba(0, 0, 0, 0.4) 0px 1px 2px -1px, 
          rgba(0, 0, 0, 0.28) 0px 0px 2px 0.5px, 
          rgba(0, 0, 0, 0.26) 0px 0px 3.7px 0.5px
        `,
      }}
    >
      <Typography variant="h3" textAlign="center" mb={5.5}>
        Contact Us
      </Typography>
      <Stack
        component="form"
        spacing={5}
        alignItems="stretch"
        sx={{ maxWidth: "90%", mx: "auto" }}
      >
        <TextField label="Your Name" />
        <TextField label="Your Email" />
        <TextField
          label="Your Message"
          InputProps={{
            inputComponent: "textarea",
            inputProps: {
              rows: 4,
            },
          }}
          sx={{
            "& .MuiInputBase-input": {
              height: "6em",
            },
            "& .MuiOutlinedInput-notchedOutline": {
              borderRadius: "3px",
              height: "110%",
            },
          }}
        />
        <Button
          type="submit"
          sx={{
            alignSelf: "flex-start",
            px: 6,
            my: (theme) => theme.spacing(6) + "!important",
          }}
        >
          Send
        </Button>
      </Stack>
    </Card>
  );
};

export default ContactForm;

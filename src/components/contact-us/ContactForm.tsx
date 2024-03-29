import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";

const ContactForm = () => {
  function submitHandler(e: any) {
    e.preventDefault();
  }

  return (
    <Card
      sx={{
        bgcolor: "primary.contrastText",
        border: "1px solid #DDDDDD",
        borderRadius: "15px",
        width: { sm: "90%" },
        minWidth: "340px",
        maxWidth: "500px",
        mx: { xs: "auto", lg: 0 },
        pt: 6.5,
        mb: { md: 10, lg: 0 },
        px: { xs: 4, md: "50px" },
        boxShadow: ` 
          rgba(0, 0, 0, 0.2) 0px 0px 2px -1px, 
          rgba(0, 0, 0, 0.14) 0px 1px 4px 0px, 
          rgba(0, 0, 0, 0.13) 1px 1px 5.7px 1px
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
        onSubmit={submitHandler}
        sx={{
          minWidth: { md: "310px" },
          mx: "auto",
        }}
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
            "& .MuiFormLabel-root": {
              left: 12,
            },
            "& .MuiInputBase-input": {
              height: "6em",
              px: 2,
              mx: 1,
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

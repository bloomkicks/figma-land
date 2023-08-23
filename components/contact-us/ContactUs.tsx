import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

import Map from "./Map";
import ContactForm from "./ContactForm";
import BlueSocials from "./BlueSocials";
import ContactEntryList from "./ContactEntryList";

const ContactUs = () => {
  return (
    <Box
      component="article"
      py={18.5}
      px={{ sm: 3 }}
      textAlign="center"
    >
      <Typography variant="h2" mb={2.5}>
        Contact Us
      </Typography>
      <Typography variant="h4" maxWidth="85%" mx="auto" mb={9}>
        Most calendars are designed for teams.
        <Typography
          variant="inherit"
          display={{ xs: "none", md: "block" }}
        >
          Slate is designed for freelancers
        </Typography>
      </Typography>
      <Stack
        direction={{
          xs: "column",
          md: "column-reverse",
          lg: "row-reverse",
        }}
        justifyContent="center"
      >
        <Stack
          direction={{ xs: "column", lg: "column-reverse" }}
          alignItems={{ xs: "center", lg: "flex-start" }}
          pl={{ lg: 8 }}
          mb={{ xs: 10, md: 0 }}
          spacing={9}
        >
          <BlueSocials />
          <Map />
          <ContactEntryList />
        </Stack>
        <ContactForm />
      </Stack>
    </Box>
  );
};

export default ContactUs;

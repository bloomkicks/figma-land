import ContactForm from "./contact-form/ContactForm";
import SocialNets from "./SocialNets";
import ContactList from "./contact-list/ContactList";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const Contact = () => {
  return (
    <Box component="article" py={18.5} textAlign="center">
      <Typography variant="h2" mb={2.5}>
        Contact Us
      </Typography>
      <Typography variant="h4" maxWidth="85%" mx="auto">
        Most calendars are designed for teams.
      </Typography>
      <SocialNets />
      <ContactList />
      <ContactForm />
    </Box>
  );
};

export default Contact;

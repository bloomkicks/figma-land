import AuthorList from "./author-list/AuthorList";
import Contacts from "./Contacts";
import SocialNets from "../header/SocialNets";
import Stack from "@mui/material/Stack";

const Footer = () => {
  return (
    <Stack
      component="footer"
      textAlign="center"
      alignItems="center"
      sx={{
        bgcolor: "background.paper",
        color: "primary.contrastText",
        py: 12,
      }}
    >
      <AuthorList />
      <Contacts />
      <SocialNets sx={{ display: "block", mx: "auto", mt: 4 }} />
    </Stack>
  );
};

export default Footer;

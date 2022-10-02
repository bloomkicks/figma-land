import AuthorList from "./author-list/AuthorList";
import Contacts from "./Contacts";
import SocialNets from "../header/SocialNets";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

const Footer = () => {
  return (
    <Stack
      component="footer"
      direction={{ xs: "column", md: "row" }}
      justifyContent={{ md: "center" }}
      alignItems={{ xs: "center", md: "flex-start" }}
      flexWrap="wrap"
      spacing={10}
      sx={{
        bgcolor: "background.paper",
        color: "primary.contrastText",
        textAlign: "center",
        py: 12,
        px: 5,
      }}
    >
      <AuthorList />
      <Box component="section" ml={{ lg: "125px !important" }}>
        <Contacts />
        <SocialNets
          sx={{
            display: "block",
            mx: { xs: "auto", md: 0 },
            width: "fit-content",
            mt: 5,
          }}
        />
      </Box>
    </Stack>
  );
};

export default Footer;

import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

import AuthorColumnLists from "./AuthorColumnList";
import WhiteSocials from "../header/WhiteSocials";
import Contacts from "./Contacts";

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
      <AuthorColumnLists />
      <Box component="section" ml={{ lg: "125px !important" }}>
        <Contacts />
        <WhiteSocials
          sx={{
            display: "flex",
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

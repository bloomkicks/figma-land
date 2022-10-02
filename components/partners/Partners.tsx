import Button from "@mui/material/Button";
import PartnerList from "./partner-list/PartnerList";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const Partners = () => {
  return (
    <Box
      component="article"
      textAlign="center"
      mb={22}
      pb={{ xs: 0, lg: 10 }}
      maxWidth="85%"
      mx="auto"
    >
      <Typography variant="h2" mb={2.2}>
        Partners
      </Typography>
      <Typography variant="h4" mb={8.5} mx="auto">
        Most calendars are designed for teams.
      </Typography>
      <PartnerList />
      <Button sx={{ px: 8, mt: 8.5 }}>Try For Free</Button>
    </Box>
  );
};

export default Partners;

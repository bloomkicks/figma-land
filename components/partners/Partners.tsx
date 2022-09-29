import PartnerList from "./partner-list/PartnerList";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const Partners = () => {
  return (
    <Box textAlign="center">
      <Typography variant="h2" mb={2.2}>
        Partners
      </Typography>
      <Typography variant="h4" mb={8.5} maxWidth="85%" mx="auto">
        Most calendars are designed for teams.
      </Typography>
      <PartnerList />
    </Box>
  );
};

export default Partners;

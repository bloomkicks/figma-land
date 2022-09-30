import OptionList from "./option-list/OptionList";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const Pricing = () => {
  return (
    <Box
      textAlign="center"
      width="100%"
      py={13}
      bgcolor="background.paper"
    >
      <Typography variant="h2">Pricing</Typography>
      <Typography variant="h4">
        Most calendars are designed for teams.
      </Typography>
      <OptionList />
    </Box>
  );
};

export default Pricing;

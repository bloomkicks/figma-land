import OptionList from "./option-list/OptionList";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const Pricing = () => {
  return (
    <Box
      component="article"
      textAlign="center"
      width="100%"
      py={{ xs: 13, md: 16 }}
      bgcolor="background.paper"
    >
      <Typography
        variant="h2"
        color="primary.contrastText"
        mb={2}
      >
        Pricing
      </Typography>
      <Typography
        variant="h4"
        color="primary.contrastText"
        maxWidth="85%"
        mx="auto"
        mb={12}
      >
        Most calendars are designed for teams.
      </Typography>
      <OptionList />
    </Box>
  );
};

export default Pricing;

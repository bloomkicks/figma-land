import FeatureList from "./feature-list/FeatureList";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

const Features = () => {
  return (
    <Stack
      textAlign="center"
      alignItems="center"
      sx={{ px: "10%" }}
    >
      <Typography variant="h2" mb={2.7}>
        Features
      </Typography>
      <Typography variant="h4" mb={8.7}>
        Most calendars are designed for teams.
      </Typography>
      <FeatureList />
    </Stack>
  );
};

export default Features;

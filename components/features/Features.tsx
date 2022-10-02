import Video from "./Video";
import Image from "next/image";
import FeatureList from "./feature-list/FeatureList";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

const Features = () => {
  return (
    <Stack
      component="article"
      textAlign="center"
      alignItems="center"
      sx={{ mb: 22 }}
    >
      <Typography variant="h2" mb={2.2} maxWidth="85%">
        Features
      </Typography>
      <Typography
        variant="h4"
        maxWidth="85%"
        mb={{ xs: 0, md: 8.5 }}
      >
        Most calendars are designed for teams.
      </Typography>
      <Video mobile />
      <FeatureList />
      <Video />
    </Stack>
  );
};

export default Features;

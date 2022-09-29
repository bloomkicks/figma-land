import Video from "./Video";
import Image from "next/image";
import FeatureList from "./feature-list/FeatureList";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

const Features = () => {
  return (
    <Stack textAlign="center" alignItems="center" sx={{ mb: 20 }}>
      <Typography variant="h2" mb={2.2} maxWidth="85%">
        Features
      </Typography>
      <Typography variant="h4" maxWidth="85%">
        Most calendars are designed for teams.
      </Typography>
      <Video />
      <FeatureList />
    </Stack>
  );
};

export default Features;

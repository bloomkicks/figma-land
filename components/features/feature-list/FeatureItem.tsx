import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const FeatureItem = ({
  feature,
  description,
  logoSrc,
}: {
  feature: string;
  description: string;
  logoSrc: string;
}) => {
  return (
    <Box textAlign="center">
      <img src={logoSrc} alt="" />
      <Typography variant="h3" my={1.8}>
        {feature}
      </Typography>
      <Typography variant="body1">{description}</Typography>
    </Box>
  );
};

export default FeatureItem;

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const Feature = ({
  feature,
  description,
  logoSrc,
}: {
  feature: string;
  description: string;
  logoSrc: string;
}) => {
  return (
    <Box textAlign="center" maxWidth="235px">
      <img src={logoSrc} alt="" />
      <Typography variant="h3" my={1.8}>
        {feature}
      </Typography>
      <Typography variant="body1">{description}</Typography>
    </Box>
  );
};

export default Feature;

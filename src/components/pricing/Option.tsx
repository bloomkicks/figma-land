import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";

import Price from "./Price";

const Option = ({
  name,
  description,
  price,
  features,
  isMain,
}: {
  name: string;
  description: string;
  price: string;
  features: string[];
  isMain?: boolean;
}) => {
  return (
    <Card
      sx={{
        bgcolor: isMain ? "primary.main" : "darkBg.text",
        color: isMain ? "primary.contrastText" : "background.paper",
        py: { xs: 5, md: isMain ? 10 : 5 },
        px: { xs: 5, md: 7 },
        textAlign: "center",
        borderRadius: "15px",
        minWidth: "320px",
        width: { xs: "80%", md: "auto" },
        maxWidth: { xs: "450px", md: "auto" },
      }}
    >
      <Typography variant="h3" textTransform="uppercase" sx={{ mb: 1 }}>
        {name}
      </Typography>
      <Typography variant="h5" sx={{ maxWidth: "60%", mx: "auto" }}>
        {description}
      </Typography>
      <Price price={price} />
      {features.map((feature, i) => (
        <Typography variant="h5" mb={4} key={feature + i}>
          {feature}
        </Typography>
      ))}
      <Button
        sx={{
          px: 6,
          mt: 5,
          bgcolor: isMain ? "primary.contrastText" : "primary.main",
          color: isMain ? "primary.main" : "primary.contrastText",
          "&:hover": isMain
            ? {
                bgcolor: "#dfdfdf",
              }
            : {},
        }}
      >
        Order Now
      </Button>
    </Card>
  );
};

export default Option;

import Price from "./Price";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";

const OptionItem = ({
  name,
  description,
  price,
  features,
}: {
  name: string;
  description: string;
  price: string;
  features: string[];
}) => {
  return (
    <Card
      sx={{
        bgcolor: "darkBg.text",
        color: "background.paper",
        py: 5,
        px: 5,
        textAlign: "center",
        borderRadius: "15px",
      }}
    >
      <Typography
        variant="h3"
        textTransform="uppercase"
        sx={{ mb: 1 }}
      >
        {name}
      </Typography>
      <Typography
        variant="h5"
        sx={{ maxWidth: "60%", mx: "auto" }}
      >
        {description}
      </Typography>
      <Price price={price} />
      {features.map((feature) => (
        <Typography variant="h5" mb={4}>
          {feature}
        </Typography>
      ))}
      <Button sx={{ px: 6, mt: 5 }}>Order Now</Button>
    </Card>
  );
};

export default OptionItem;

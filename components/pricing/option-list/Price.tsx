import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

const Price = ({ price }: { price: string }) => {
  return (
    <Box mx="auto">
      <Typography
        component="h4"
        variant="h1"
        sx={{
          verticalAlign: "middle",
          display: "inline-block",
          my: 5,
          fontWeight: "bold",
        }}
      >
        {price}
      </Typography>
      <Stack
        alignItems="flex-start"
        justifyContent="center"
        sx={{
          display: "inline-flex",
          verticalAlign: "middle",
          ml: 1,
          my: 5,
        }}
      >
        <Typography component="h4" variant="h3">
          $
        </Typography>
        <Typography component="h4" variant="h5">
          Per Month
        </Typography>
      </Stack>
    </Box>
  );
};

export default Price;

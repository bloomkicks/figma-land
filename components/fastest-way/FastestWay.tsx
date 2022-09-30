import Image from "next/image";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const FastestWay = () => {
  return (
    <Box
      textAlign="center"
      maxWidth="85%"
      sx={{ mb: 12, mx: "auto" }}
    >
      <Typography variant="h2" mb={2.2}>
        Fastest way to organize
      </Typography>
      <Typography variant="h4">
        Most calendars are designed for teams.
      </Typography>
      <Button sx={{ px: 5, my: 8.5 }}>Try For Free</Button>
      <Box
        maxWidth="100%"
        width="620px"
        height="auto"
        position="relative"
      >
        <Image
          src="/images/general/laptop.png"
          width={379}
          height={212}
          layout="responsive"
        />
      </Box>
    </Box>
  );
};

export default FastestWay;

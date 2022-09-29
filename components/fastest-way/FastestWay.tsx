import Image from "next/image";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

const FastestWay = () => {
  return (
    <Stack alignItems="center" textAlign="center" sx={{ mb: 20 }}>
      <Typography variant="h2" mb={2.2} sx={{ maxWidth: "85%" }}>
        Fastest way to organize
      </Typography>
      <Typography variant="h4" sx={{ maxWidth: "85%" }}>
        Most calendars are designed for teams.
      </Typography>
      <Button sx={{ px: 5, my: 8.5 }}>Try For Free</Button>
      <Box maxWidth="90%" width="620px" height="auto" position="relative">
        <Image
          src="/images/general/laptop.png"
          width={379}
          height={212}
          layout="responsive"
        />
      </Box>
    </Stack>
  );
};

export default FastestWay;

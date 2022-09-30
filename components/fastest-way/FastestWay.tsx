import Image from "next/image";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

const FastestWay = () => {
  return (
    <Stack
      textAlign="center"
      width="85%"
      maxWidth="1366px"
      sx={{ mb: 12, mx: "auto" }}
      direction="row"
      alignItems="flex-start"
      justifyContent="center"
      flexWrap="wrap"
    >
      <Box
        textAlign={{ xs: "center", lg: "left" }}
        minWidth={{ md: "530px" }}
        flexBasis={{ md: "50%", lg: "45%" }}
        flexShrink="1"
      >
        <Typography variant="h2" mb={2.2}>
          Fastest way to organize
        </Typography>
        <Typography variant="h4" mb="auto">
          Most calendars are designed for teams.{" "}
          <Typography
            variant="inherit"
            display={{ xs: "none", md: "block" }}
          >
            Slate is designed for freelancers
          </Typography>
        </Typography>
        <Button sx={{ px: 5, mt: { xs: 8.5, md: 12 } }}>
          Try For Free
        </Button>
      </Box>
      <Box
        maxWidth="620px"
        flexBasis={{ xs: "100%", md: "70%", lg: "43%" }}
        minWidth={{ md: "450px" }}
        height="auto"
        position="relative"
        flexShrink="5"
        ml={{ md: 5 }}
        mt={{ xs: 8.5, lg: 0 }}
      >
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

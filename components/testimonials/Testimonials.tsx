import Button from "@mui/material/Button";
import Persona from "./Persona";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const Testimonials = () => {
  return (
    <Box maxWidth="75%" mx="auto" textAlign="center" pb={12}>
      <Typography variant="h2" mb={12}>
        Testimonials
      </Typography>
      <Box maxWidth="50%" mx="auto">
        <Image
          src="/images/testimonials/IBM.png"
          width={126.5}
          height={50.5}
          layout="responsive"
        />
      </Box>
      <Typography
        variant="h3"
        lineHeight="18px"
        fontSize="14px"
        my={8.5}
      >
        Most calendars are designed for teams. Slate is designed
        for freelancers who want a simple way to plan their
        schedule.
      </Typography>
      <Persona />
      <Button sx={{ mt: 12, px: 5 }}>
        <Typography variant="h3">More Testimonials</Typography>
      </Button>
    </Box>
  );
};

export default Testimonials;

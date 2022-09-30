import Typography from "@mui/material/Typography";
import Image from "next/image";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

const Persona = () => {
  return (
    <Stack direction="row" justifyContent="center">
      <Box height="45px" width="45px" position="relative">
        <Image
          src="/images/testimonials/profile-pic.png"
          width={42}
          height={42}
          objectFit="contain"
          objectPosition="center"
          layout="fill"
        />
      </Box>
      <Box display="inline-block" ml={1.5} my="auto">
        <Typography
          variant="h3"
          sx={{ fontSize: "10.14px", lineHeight: "12px" }}
        >
          Organize across
        </Typography>
        <Typography variant="body1" sx={{ fontSize: "12.7px" }}>
          Ui designer
        </Typography>
      </Box>
    </Stack>
  );
};

export default Persona;

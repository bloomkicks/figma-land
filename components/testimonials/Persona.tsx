import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Image from "next/image";

const Persona = () => {
  return (
    <Stack direction="row" justifyContent="center">
      <Box
        height="45px"
        width="45px"
        position="relative"
        borderRadius="50%"
        border="1px solid"
        borderColor="black"
      >
        <Image
          src="./images/testimonials/profile-pic.png"
          alt="Image not found"
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
          display={{ xs: "block", sm: "none" }}
          sx={{ fontSize: "11.5px", lineHeight: "12px" }}
        >
          Organize across
        </Typography>
        <Typography
          variant="h5"
          display={{ xs: "none", sm: "block" }}
        >
          Organize across
        </Typography>
        <Typography variant="body1" sx={{ fontSize: "13.5px" }}>
          Ui designer
        </Typography>
      </Box>
    </Stack>
  );
};

export default Persona;

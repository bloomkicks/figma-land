import Box from "@mui/material/Box";
import Image from "next/image";

const Map = () => {
  return (
    <Box
      display={{ xs: "none", md: "block" }}
      mx="auto !important"
    >
      <Image
        src="/images/contact-us/map.png"
        alt="Image not found"
        width={516}
        height={323.2}
      />
    </Box>
  );
};

export default Map;

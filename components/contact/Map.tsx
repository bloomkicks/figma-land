import Image from "next/image";
import Box from "@mui/material/Box";

const Map = () => {
  return (
    <Box
      display={{ xs: "none", md: "block" }}
      mx="auto !important"
    >
      <Image
        src="/images/contact-us/map.png"
        width={516}
        height={323.2}
      />
    </Box>
  );
};

export default Map;

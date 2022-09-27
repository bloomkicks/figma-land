import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/material/Box";
import Image from "next/image";
import React from "react";

const Background = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      position="absolute"
      top="0px"
      right="0.5px"
      width="100%"
      zIndex={-1}
      height={{ xs: "850px", sm: "930px" }}
    >
      {isMobile ? (
        <Image
          src="/images/general/hero-mobile-background.png"
          width={1777}
          height={1042}
          layout="fill"
          objectFit="cover"
          objectPosition="bottom"
          alt=""
        />
      ) : (
        <Image
          src="/images/general/hero-background.png"
          width={1777}
          height={1042}
          layout="fill"
          objectFit="cover"
          objectPosition="bottom"
          alt=""
        />
      )}
    </Box>
  );
};

export default Background;

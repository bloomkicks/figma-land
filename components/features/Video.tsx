import useMediaQuery from "@mui/material/useMediaQuery";
import useTheme from "@mui/material/styles/useTheme";
import Box from "@mui/material/Box";
import Image from "next/image";
import React from "react";

const Video = ({ mobile }: { mobile?: boolean }) => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Box
      maxWidth={{ xs: "90%", md: "70%" }}
      width={{ xs: 620, lg: 1175 }}
      position="relative"
      my={8.5}
      display={{
        xs: mobile ? "block" : "none",
        md: mobile ? "none" : "block",
      }}
    >
      <Image
        loading="eager"
        src={
          isDesktop
            ? "/images/features/video-picture-desktop.png"
            : "/images/features/video-picture-mobile.png"
        }
        width={386}
        height={230}
        layout="responsive"
      />
      <Box
        position="absolute"
        left="50%"
        top="50%"
        width={{ xs: 61.5, md: 130 }}
        height={{ xs: 61.5, md: 130 }}
        sx={{ transform: "translate(-50%, -50%)" }}
      >
        <Image
          src="/images/features/video-picture-play.png"
          alt=""
          layout="fill"
        />
      </Box>
    </Box>
  );
};

export default Video;

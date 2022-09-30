import Box from "@mui/material/Box";
import Image from "next/image";
import React from "react";

const Video = ({ mobile }: { mobile?: boolean }) => {
  return (
    <Box
      maxWidth="90%"
      width="620px"
      position="relative"
      my={8.5}
      display={{
        xs: mobile ? "block" : "none",
        md: mobile ? "none" : "block",
      }}
    >
      <Image
        src="/images/features/video-picture-screen.png"
        width={386}
        height={230}
        layout="responsive"
      />
      <Box
        position="absolute"
        left="50%"
        top="50%"
        width={61.5}
        height={61.5}
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

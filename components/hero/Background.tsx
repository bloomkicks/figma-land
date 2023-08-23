import Box from "@mui/material/Box";

const Background = () => {
  return (
    <Box
      position="absolute"
      top="0px"
      right="0.5px"
      width="100%"
      zIndex={-1}
      height={{ xs: "850px", xl: "880px" }}
      maxHeight="100vh"
    >
      <Box
        component="img"
        src="/images/general/hero-background.png"
        sizes="(min-width: 640px) 640w, 1777w"
        srcSet="/images/general/hero-background.png 1777w, /images/general/hero-mobile-background.png 640w"
        width={1777}
        height={1042}
        sx={{
          objectFit: "cover",
          objectPosition: "bottom",
          width: "100%",
          height: "100%",
        }}
        alt=""
      />
    </Box>
  );
};

export default Background;

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Image from "next/image";
import Link from "next/link";

let logos = ["twitter", "facebook", "instagram"];
const WhiteSocials = ({
  isMobile,
  sx,
}: {
  isMobile?: boolean;
  sx?: object;
}) => {
  return (
    <Stack
      component="nav"
      direction="row"
      alignItems="center"
      spacing={3}
      sx={{
        display: {
          xs: isMobile ? "flex" : "none",
          md: isMobile ? "none" : "flex",
        },
        ...sx,
      }}
    >
      {logos.map((logo) => (
        <Link href="#" passHref key={logo}>
          <Box
            component="a"
            height="40px"
            width="auto"
            position="relative"
            left={logo === "twitter" ? "3.5px" : 0}
            top={logo === "twitter" ? "3px" : 0}
            sx={{
              transition: "opacity 100ms ease-out",
              "&:hover": { opacity: 0.8 },
            }}
          >
            <Image
              src={`/images/light-social-nets/${logo}.png`}
              alt={logo}
              width={40}
              height={logo === "twitter" ? 33.3 : 39.5}
            />
          </Box>
        </Link>
      ))}
    </Stack>
  );
};

export default WhiteSocials;

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import NextLink from "next/link";

const NavLink = ({ href, name }: { href: string; name: string }) => {
  return (
    <NextLink href={href} passHref>
      <Typography
        component="a"
        variant="h6"
        color="darkBg.text"
        position="relative"
        display="inline-block"
        maxWidth="50%"
        textAlign="center"
        sx={{
          px: 1,
          py: 0.5,
          "&:hover > .underline": {
            width: "100%",
          },
          textDecoration: "none",
        }}
      >
        {name}
        <Box
          className="underline"
          position="absolute"
          top="99%"
          left="0"
          width="0"
          sx={{
            transition: "width 0.3s ease-out",
            bgcolor: "darkBg.text",
          }}
          height="3px"
        ></Box>
      </Typography>
    </NextLink>
  );
};

export default NavLink;

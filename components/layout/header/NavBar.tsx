import SocialNets from "./SocialNets";
import Stack from "@mui/material/Stack";
import NavLink from "./NavLink";

let links = ["home", "product", "pricing", "about", "contact"];

const NavBar = ({ isActive }: { isActive?: boolean }) => {
  return (
    <Stack
      component="nav"
      direction={{ xs: "column", md: "row" }}
      spacing={{ xs: "28px", md: "21px" }}
      sx={{
        mr: 10,
        width: { xs: "100%", md: "auto" },
        height: { xs: "100%", md: "auto" },
        bgcolor: { xs: "background.paper", md: "transparent" },
        position: { xs: "fixed", md: "static" },
        left: 0,
        top: 0,
        alignItems: "center",
        justifyContent: { xs: "center", md: "flex-start" },
        transition: "transform 0.4s ease-in-out",
        transform: {
          xs: isActive ? "translateX(0)" : "translateX(100%)",
          md: "translateX(0)",
        },
      }}
    >
      {links.map((link) => (
        <NavLink
          href={`/${link}`}
          name={
            link[0].toUpperCase() +
            link.split("").slice(1).join("")
          }
        />
      ))}
      <SocialNets
        isMobile={true}
        sx={{
          mt: (theme: any) => theme.spacing(8) + " !important",
          position: "relative",
          top: "40px",
        }}
      />
    </Stack>
  );
};

export default NavBar;

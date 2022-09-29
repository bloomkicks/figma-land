import MobileContainer from "./nav-container/MobileContainer";
import DesktopContainer from "./nav-container/DesktopContainer";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import SocialNets from "./SocialNets";
import NavLink from "./NavLink";

let links = ["home", "product", "pricing", "about", "contact"];

const NavBar = ({ open }: { open: boolean }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const Container = isMobile ? MobileContainer : DesktopContainer;

  return (
    <Container open={open}>
      {links.map((link) => (
        <NavLink
          href={`/${link}`}
          name={link[0].toUpperCase() + link.split("").slice(1).join("")}
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
    </Container>
  );
};

export default NavBar;

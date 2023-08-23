import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import NavLink from "./NavLink";

import MobileContainer from "./nav-container/MobileContainer";
import DesktopContainer from "./nav-container/DesktopContainer";
import WhiteSocials from "./WhiteSocials";

let links = ["home", "product", "pricing", "about", "contact"];

const NavBar = ({ open }: { open: boolean }) => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  const Container = isDesktop ? DesktopContainer : MobileContainer;

  return (
    <Container open={open}>
      {links.map((link) => (
        <NavLink
          key={link}
          href={`#`}
          name={
            link[0].toUpperCase() + link.split("").slice(1).join("")
          }
        />
      ))}
      <WhiteSocials
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

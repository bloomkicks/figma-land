import NavBar from "./NavBar";
import SocialNets from "./SocialNets";
import Link from "next/link";
import Box from "@mui/material/Box";
import Image from "next/image";
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import { useState } from "react";

const Header = () => {
  const [isActive, setIsActive] = useState<boolean>(false);

  function menuClickHandler() {
    setIsActive((prev) => !prev);
  }

  return (
    <AppBar
      sx={{
        alignItems: "center",
        bgcolor: "transparent",
        boxShadow: "none",
        position: "absolute",
        top: 28,
      }}
    >
      <Toolbar
        sx={{
          px: { xs: 5, md: 4 },
          width: "100%",
          maxWidth: "1180px",
          bgcolor: "transparent",
          justifyContent: { xs: "space-between", md: "center" },
        }}
      >
        <NavBar isActive={isActive} />
        <Link href="/main" passHref>
          <Box
            component="a"
            position="relative"
            right={{ xs: 0, md: "30px" }}
          >
            <Image
              src="/logos/light-logo.png"
              width={186}
              height={58}
            />
          </Box>
        </Link>
        <SocialNets isMobile={false} />
        <Box
          component="button"
          position="relative"
          top="2.5px"
          onClick={menuClickHandler}
          display={{ xs: "block", md: "none" }}
          sx={{
            bgcolor: "transparent",
            borderColor: "transparent",
          }}
        >
          <Image
            src="/images/general/ham-menu.png"
            width={30}
            height={18}
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

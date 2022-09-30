import NavBar from "./NavBar";
import SocialNets from "./SocialNets";
import Link from "next/link";
import Box from "@mui/material/Box";
import Image from "next/image";
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState<boolean>(false);

  function menuClickHandler() {
    setOpen((prev) => !prev);
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
        <NavBar open={open} />
        <Link href="/main" passHref>
          <Box
            component="a"
            position="relative"
            right={{ xs: 0, md: "30px" }}
            zIndex={10}
            maxWidth="186px"
            sx={{
              position: {
                xs: open ? "fixed" : "absolute",
                md: "relative",
              },
              top: { xs: open ? 28 : 0, md: 0 },
              left: { xs: 40, md: 0 },
            }}
          >
            <Image
              src="/logos/light-logo.png"
              width={186}
              height={58}
              layout="responsive"
            />
          </Box>
        </Link>
        <SocialNets isMobile={false} />
        <Box
          component="button"
          top="2.5px"
          onClick={menuClickHandler}
          display={{ xs: "block", md: "none" }}
          sx={{
            bgcolor: "transparent",
            borderColor: "transparent",
            borderRadius: "2px",
            zIndex: 10,
            position: {
              xs: open ? "fixed" : "absolute",
              md: "relative",
            },
            top: { xs: open ? 48 : 20, md: 0 },
            right: { xs: 30, md: 0 },
            p: 2,
            mt: -1.5,
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

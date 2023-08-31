import Stack from "@mui/material/Stack";

import Header from "./header/Header";
import Footer from "./footer/Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Stack>
      <Header />
      {children}
      <Footer />
    </Stack>
  );
};

export default Layout;

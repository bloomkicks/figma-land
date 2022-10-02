import Header from "./header/Header";
import Footer from "./footer/Footer";
import Stack from "@mui/material/Stack";

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

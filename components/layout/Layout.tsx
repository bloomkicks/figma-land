import Header from "./header/Header";
import Stack from "@mui/material/Stack";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Stack sx={{ width: "100%" }}>
      <Header />
      {children}
    </Stack>
  );
};

export default Layout;

import Drawer from "@mui/material/Drawer";
import Stack from "@mui/material/Stack";

const MobileContainer = ({
  children,
  open,
  ...props
}: {
  children: React.ReactNode;
  open: boolean;
  props?: any;
}) => {
  return (
    <Drawer
      variant="persistent"
      open={open}
      anchor="right"
      sx={{
        "& > .MuiDrawer-paper": {
          width: "100%",
          height: "100%",
          zIndex: 5,
        },
      }}
    >
      <Stack
        component="nav"
        direction="column"
        spacing="28px"
        width="100%"
        height="100%"
        bgcolor="background.paper"
        sx={{
          justifyContent: "center",
          alignItems: "center",
          transition: "transform 0.4s ease-in-out",
          left: 0,
          top: 0,
          mr: 10,
        }}
        {...props}
      >
        {children}
      </Stack>
    </Drawer>
  );
};

export default MobileContainer;

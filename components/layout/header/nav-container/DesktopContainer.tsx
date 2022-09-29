import Stack from "@mui/material/Stack";

const DesktopContainer = ({
  children,
  open,
  ...props
}: {
  children: React.ReactNode;
  open: boolean;
  props?: any;
}) => {
  return (
    <Stack
      component="nav"
      direction="row"
      spacing="21px"
      width="auto"
      height="auto"
      bgcolor="transparent"
      sx={{
        justifyContent: "flex-start",
        alignItems: "center",
        transition: "transform 0.4s ease-in-out",
        transform: "translateX(0)",
        mr: 10,
        left: 0,
        top: 0,
      }}
      {...props}
    >
      {children}
    </Stack>
  );
};

export default DesktopContainer;

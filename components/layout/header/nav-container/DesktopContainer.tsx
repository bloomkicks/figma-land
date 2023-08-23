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
        position: "absolute",
        top: "50%",
        left: "0%",
        transform: "translateY(-50%)",
      }}
      {...props}
    >
      {children}
    </Stack>
  );
};

export default DesktopContainer;

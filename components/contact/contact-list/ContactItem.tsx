import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const ContactItem = ({
  iconSrc,
  text,
}: {
  iconSrc: string;
  text: string;
}) => {
  return (
    <Stack
      direction={{ xs: "row", md: "column" }}
      spacing={1.7}
      alignItems="center"
      justifyContent="flex-start"
    >
      <Box
        component="img"
        src={iconSrc}
        sx={{
          maxWidth: "13%",
          maxHeight: "40px",
        }}
      ></Box>
      <Typography
        variant="h5"
        sx={{
          maxWidth: {xs: '85%', md: 300},
          textAlign: { xs: "left", md: "center" },
        }}
      >
        {text}
      </Typography>
    </Stack>
  );
};

export default ContactItem;

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
      direction="row"
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
          ml: 1.7,
          maxWidth: "85%",
          textAlign: "left",
        }}
      >
        {text}
      </Typography>
    </Stack>
  );
};

export default ContactItem;

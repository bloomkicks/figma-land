import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const ContactEntry = ({
  iconSrc,
  text,
  iconWidth,
  iconHeight,
}: {
  iconSrc: string;
  text: string;
  iconWidth: number;
  iconHeight: number;
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
        alt=""
        src={iconSrc}
        width={iconWidth}
        height={iconHeight}
        sx={{
          maxHeight: "40px",
          objectFit: "contain",
        }}
      ></Box>
      <Typography
        variant="h5"
        sx={{
          maxWidth: { xs: "85%", md: 300 },
          textAlign: { xs: "left", md: "center" },
        }}
      >
        {text}
      </Typography>
    </Stack>
  );
};

export default ContactEntry;

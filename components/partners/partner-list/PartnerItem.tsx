import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

const PartnerItem = ({ name, logoSrc }: { name: string; logoSrc: string }) => {
  return (
    <Stack
      textAlign="center"
      alignItems="center"
      py={2.5}
      px={2}
      height="165px"
      minWidth="200px"
      maxWidth="100%"
      sx={{
        border: "1.6px solid black",
        borderColor: "#c5c5c5",
        width: { xs: "365px", md: "auto" },
      }}
    >
      <Typography variant="h5" mb={1.5}>
        {name}
      </Typography>
      <Box
        component="img"
        src={logoSrc}
        sx={{
          maxHeight: "70%",
          maxWidth: "90%",
          display: "block",
          my: "auto",
        }}
        alt=""
      />
    </Stack>
  );
};

export default PartnerItem;

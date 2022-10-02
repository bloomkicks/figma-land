import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import SubscribeForm from "./SubscribeForm";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const Newsletter = () => {
  const theme = useTheme();
  const isDektop = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Stack
      component="article"
      direction={{ xs: "column", md: "row-reverse" }}
      textAlign={{ xs: "center", md: "left" }}
      mb={22}
    >
      <Box>
        <Typography variant="h3">At your fingertips</Typography>
        <Typography variant="h2" my={2.2}>
          {isDektop
            ? "Lightning fast prototyping"
            : "Newsletter"}
        </Typography>
        <Typography
          variant="h4"
          mx="auto"
          maxWidth="85%"
          display={{ xs: "block", md: "none" }}
        >
          Slate is designed for freelancers
        </Typography>
        {isDektop && <SubscribeForm isDesktop />}
      </Box>
      <Box my={8.5} width="95%" mx="auto" height="auto">
        <Image
          src="/images/general/newsletter-vector.png"
          width={389}
          height={295}
          layout="responsive"
        />
      </Box>
      {!isDektop && <SubscribeForm />}
    </Stack>
  );
};

export default Newsletter;

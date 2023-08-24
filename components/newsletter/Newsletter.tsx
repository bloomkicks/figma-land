import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Image from "next/image";

import SubscribeForm from "./SubscribeForm";

const Newsletter = () => {
  const theme = useTheme();
  const isDektop = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Stack
      component="article"
      direction={{ xs: "column", md: "row-reverse" }}
      justifyContent="center"
      alignItems="center"
      textAlign={{ xs: "center", md: "left" }}
      px={3}
      mb={22}
    >
      <Box>
        <Typography variant="h3">At your fingertips</Typography>
        <Typography variant="h2" my={2.2}>
          {isDektop ? (
            <>
              Lightning fast
              <br />
              prototyping
            </>
          ) : (
            "Newsletter"
          )}
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
      <Box
        my={8.5}
        width={{ xs: "95%", md: "680px" }}
        maxWidth={{ xs: "550px", md: "680px" }}
        mx={{ xs: "auto", md: 0 }}
        mr={{ xs: "auto", md: 7.5, lg: 10, xl: 15 }}
        ml={{ md: 5 }}
        height="auto"
      >
        <Image
          src="./images/general/newsletter-vector.png"
          alt=""
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

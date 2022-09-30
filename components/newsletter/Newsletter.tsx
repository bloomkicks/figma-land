import SubscribeForm from "./SubscribeForm";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const Newsletter = () => {
  return (
    <Box textAlign="center" mb={12} maxWidth="85%" mx="auto">
      <Typography variant="h3">At your fingertips</Typography>
      <Typography variant="h2" my={2.2}>
        Newsletter
      </Typography>
      <Typography variant="h4">
        Slate is designed for freelancers
      </Typography>
      <Box my={8.5} mx="auto">
        <Image
          src="/images/general/newsletter-vector.png"
          width={389}
          height={295}
          layout="responsive"
        />
      </Box>
      <SubscribeForm />
    </Box>
  );
};

export default Newsletter;

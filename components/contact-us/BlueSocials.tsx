import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Link from "next/link";
import Image from "next/image";

let nets = ["twitter", "facebook", "instagram"];

const BlueSocials = () => {
  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={4}
    >
      {nets.map((net) => (
        <Link href="#" passHref key={net}>
          <Box
            component="a"
            display="block"
            position="relative"
            height="40px"
            width="40px"
            sx={{
              transition: "opacity 100ms ease-out",
              "&:hover": { opacity: 0.8 },
            }}
          >
            <Image
              src={`./images/contact-us/${net}.png`}
              layout="fill"
              objectFit="contain"
              objectPosition="center"
              height={net === "twitter" ? "29px" : "32px"}
              alt={net}
            />
          </Box>
        </Link>
      ))}
    </Stack>
  );
};

export default BlueSocials;

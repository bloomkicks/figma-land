import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import PartnerItem from "./PartnerItem";
import Stack from "@mui/material/Stack" 

let partners = [
  {
    name: "Google",
    logoSrc: "/images/partners/google.png",
  },
  {
    name: "Amazon",
    logoSrc: "/images/partners/amazon.png",
  },
  {
    name: "Microsoft",
    logoSrc: "/images/partners/microsoft.png",
  },
  {
    name: "Uber",
    logoSrc: "/images/partners/uber.png",
  },
  {
    name: "Dropbox",
    logoSrc: "/images/partners/dropbox.png",
  },
  {
    name: "Google",
    logoSrc: "/images/partners/google.png",
  },
  {
    name: "Uber",
    logoSrc: "/images/partners/uber.png",
  },
  {
    name: "Amazon",
    logoSrc: "/images/partners/amazon.png",
  },
];

const PartnerList = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      spacing={{ xs: 3.8, md: "-1.6px" }}
      justifyContent="center"
      alignItems="center"
      flexWrap="wrap"
      sx={{
        mx: 5,
      }}
    >
      {partners
        .slice(0, isDesktop ? partners.length : 3)
        .map((partner) => (
          <PartnerItem {...partner} />
        ))}
    </Stack>
  );
};

export default PartnerList;

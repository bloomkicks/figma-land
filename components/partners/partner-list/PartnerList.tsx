import PartnerItem from "./PartnerItem";
import Stack from "@mui/material/Stack";

let partners = [
  {
    name: "Google",
    logoSrc: "/images/partners/google.png",
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
    name: "Amazon",
    logoSrc: "/images/partners/amazon.png",
  },
  {
    name: "Dropbox",
    logoSrc: "/images/partners/dropbox.png",
  },
];

const PartnerList = () => {
  return (
    <Stack spacing={3.8} alignItems="center">
      {partners.map((partner) => (
        <PartnerItem {...partner} />
      ))}
    </Stack>
  );
};

export default PartnerList;

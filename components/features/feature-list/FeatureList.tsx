import FeatureItem from "./FeatureItem";
import Stack from "@mui/material/Stack";

let features = [
  {
    logoSrc: "/images/features/opentype.png",
    feature: "OpenType features Variable fonts",
    description:
      "Slate helps you see how many more days you need to work to reach your financial goal.",
  },
  {
    logoSrc: "/images/features/real-data.png",
    feature: "Design with real data",
    description:
      "Slate helps you see how many more days you need to work to reach your financial goal.",
  },
  {
    logoSrc: "/images/features/fastest-way.png",
    feature: "Fastest way to take action",
    description:
      "Slate helps you see how many more days you need to work to reach your financial goal.",
  },
];
const FeatureList = () => {
  return (
    <Stack alignItems="center" spacing={9.5} sx={{ px: "10%" }}>
      {features.map((feature) => (
        <FeatureItem {...feature} />
      ))}
    </Stack>
  );
};

export default FeatureList;

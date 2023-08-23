import Stack from "@mui/material/Stack";

import Feature from "./Feature";

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
    <Stack
      direction={{ xs: "column", md: "row" }}
      alignItems={{ xs: "center", md: "flex-start" }}
      spacing={9.5}
      sx={{ px: "17%" }}
    >
      {features.map((feature, i) => (
        <Feature {...feature} key={i} />
      ))}
    </Stack>
  );
};

export default FeatureList;

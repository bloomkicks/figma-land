import Stack from "@mui/material/Stack";

import Option from "./Option";

let options = [
  {
    name: "free",
    description: "Organize across all apps by hand",
    price: "0",
    features: [
      "Pricing Feature",
      "Pricing Feature",
      "Pricing Feature",
      "Pricing Feature",
      "Pricing Feature",
    ],
  },
  {
    name: "standard",
    description: "Organize across all apps by hand",
    price: "10",
    features: [
      "Pricing Feature",
      "Pricing Feature",
      "Pricing Feature",
      "Pricing Feature",
      "Pricing Feature",
    ],
    isMain: true,
  },
  {
    name: "business",
    description: "Organize across all apps by hand",
    price: "99",
    features: [
      "Pricing Feature",
      "Pricing Feature",
      "Pricing Feature",
      "Pricing Feature",
      "Pricing Feature",
    ],
  },
];

const OptionList = () => {
  return (
    <Stack
      direction={{ xs: "column", lg: "row" }}
      justifyContent="center"
      alignItems="center"
      spacing={6.5}
    >
      {options.map((option) => (
        <Option {...option} key={option.name} />
      ))}
    </Stack>
  );
};

export default OptionList;

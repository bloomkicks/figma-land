import Stack from "@mui/material/Stack";

import AuthorColumn from "./AuthorColumn";

let authorColumns = [
  {
    header: "Annette Steward",
    authors: [
      "Jennie Cooper",
      "Julie Henry",
      "Johnny Murphy",
      "Gregory Mccoy",
      "Marvin Mckinney",
    ],
  },
  {
    header: "Annette Steward",
    authors: [
      "Jennie Cooper",
      "Julie Henry",
      "Johnny Murphy",
      "Gregory Mccoy",
      "Marvin Mckinney",
    ],
  },
  {
    header: "Annette Steward",
    authors: [
      "Jennie Cooper",
      "Julie Henry",
      "Johnny Murphy",
      "Gregory Mccoy",
      "Marvin Mckinney",
    ],
  },
];

const AuthorColumnLists = () => {
  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      spacing={10}
      sx={{ mb: { md: 6 } }}
    >
      {authorColumns.map((authorColumn, i) => (
        <AuthorColumn {...authorColumn} key={i} />
      ))}
    </Stack>
  );
};

export default AuthorColumnLists;

import AuthorItem from "./AuthorItem";
import SocialNets from "../../header/SocialNets";
import Stack from "@mui/material/Stack";

let authors = [
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

const AuthorList = () => {
  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      spacing={10}
      sx={{ mb: { md: 6 } }}
    >
      {authors.map((author) => (
        <AuthorItem {...author} />
      ))}
    </Stack>
  );
};

export default AuthorList;

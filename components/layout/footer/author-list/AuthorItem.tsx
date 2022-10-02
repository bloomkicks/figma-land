import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

const AuthorItem = ({
  header,
  authors,
}: {
  header: string;
  authors: string[];
}) => {
  return (
    <Stack spacing={2.2}>
      <Typography variant="h3">{header}</Typography>
      {authors.map((author) => (
        <Typography variant="h6" component="p">
          {author}
        </Typography>
      ))}
    </Stack>
  );
};

export default AuthorItem;

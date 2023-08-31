import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

const AuthorColumn = ({
  header,
  authors,
}: {
  header: string;
  authors: string[];
}) => {
  return (
    <Stack component="section" spacing={2.2}>
      <Typography variant="h3">{header}</Typography>
      {authors.map((author) => (
        <Typography variant="h6" component="p" key={author}>
          {author}
        </Typography>
      ))}
    </Stack>
  );
};

export default AuthorColumn;

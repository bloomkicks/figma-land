import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Image from "next/image";

let contacts = [
  {
    name: "location",
    text: "7480 Mockingbird Hill Undefined",
    width: 30.5,
    height: 38.5,
  },
  {
    name: "phone",
    text: "(239) 555-0108",
    width: 20.5,
    height: 32,
  },
];

const Contacts = () => {
  return (
    <Box textAlign="left" mx="auto">
      {contacts.map((contact) => (
        <Stack
          direction="row"
          spacing={1.8}
          alignItems="center"
          sx={{ mb: 3 }}
          key={contact.name}
        >
          <Image
            src={`/images/footer/${contact.name}.png`}
            alt=""
            width={contact.width}
            height={contact.height}
          />
          <Typography variant="body1">{contact.text}</Typography>
        </Stack>
      ))}
    </Box>
  );
};

export default Contacts;

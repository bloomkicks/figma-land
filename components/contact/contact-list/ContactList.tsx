import ContactItem from "./ContactItem";
import Stack from "@mui/material/Stack";

let contacts = [
  {
    iconSrc: "/images/contact-us/location.png",
    text: "6386 Spring St undefined Anchorage, Georgia 12473 United States",
  },
  {
    iconSrc: "/images/contact-us/phone.png",
    text: "(843) 555-0130",
  },
  {
    iconSrc: "/images/contact-us/email.png",
    text: "willie.jennings@example.com",
  },
];

const ContactList = () => {
  return (
    <Stack
      spacing={3}
      pl={3}
      mx={{ xs: 1, md: "auto" }}
      mt={10}
      width="fit-content"
      alignItems="flex-start"
    >
      {contacts.map((contact) => (
        <ContactItem {...contact} key={contact.iconSrc} />
      ))}
    </Stack>
  );
};

export default ContactList;

import Stack from "@mui/material/Stack";

import ContactEntry from "./ContactEntry";

let contacts = [
  {
    iconSrc: "./images/contact-us/location.png",
    iconWidth: 26,
    iconHeight: 32,
    text: "6386 Spring St Undefined Anchorage, Georgia 12473 United States",
  },
  {
    iconSrc: "./images/contact-us/phone.png",
    iconWidth: 21,
    iconHeight: 34,
    text: "(843) 555-0130",
  },
  {
    iconSrc: "./images/contact-us/email.png",
    iconWidth: 27,
    iconHeight: 22,
    text: "willie.jennings@example.com",
  },
];

const ContactEntryList = () => {
  return (
    <Stack
      spacing={3}
      px={{ xs: 4, md: 0 }}
      mx={{ xs: 1, md: "auto" }}
      width="fit-content"
      direction={{ xs: "column", md: "row" }}
      alignItems="flex-start"
      justifyContent="center"
    >
      {contacts.map((contact) => (
        <ContactEntry {...contact} key={contact.iconSrc} />
      ))}
    </Stack>
  );
};

export default ContactEntryList;

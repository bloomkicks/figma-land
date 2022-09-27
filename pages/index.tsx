import Stack from "@mui/material/Stack";
import Features from "../components/features/Features";
import Hero from "../components/hero/Hero";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <Stack sx={{ width: "100%" }}>
      <Hero />
      <Features />
    </Stack>
  );
};

export default Home;

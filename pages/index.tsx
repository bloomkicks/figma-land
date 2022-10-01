import Contact from "../components/contact/Contact";
import Pricing from "../components/pricing/Pricing";
import Testimonials from "../components/testimonials/Testimonials";
import Partners from "../components/partners/Partners";
import FastestWay from "../components/fastest-way/FastestWay";
import Newsletter from "../components/newsletter/Newsletter";
import Stack from "@mui/material/Stack";
import Features from "../components/features/Features";
import Hero from "../components/hero/Hero";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <Stack sx={{ width: "100%" }}>
      <Hero />
      <Features />
      <FastestWay />
      <Newsletter />
      <Partners />
      <Testimonials />
      <Pricing /> 
      <Contact />
    </Stack>
  );
};

export default Home;

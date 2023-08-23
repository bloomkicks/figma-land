import type { NextPage } from "next";

import ContactUs from "../components/contact-us/ContactUs";
import Pricing from "../components/pricing/Pricing";
import Testimonials from "../components/testimonials/Testimonials";
import Partners from "../components/partners/Partners";
import FastestWay from "../components/fastest-way/FastestWay";
import Newsletter from "../components/newsletter/Newsletter";
import Stack from "@mui/material/Stack";
import Features from "../components/features/Features";
import Hero from "../components/hero/Hero";

const Home: NextPage = () => {
  return (
    <Stack>
      <Hero />
      <Features />
      <FastestWay />
      <Newsletter />
      <Partners />
      <Testimonials />
      <Pricing />
      <ContactUs />
    </Stack>
  );
};

export default Home;

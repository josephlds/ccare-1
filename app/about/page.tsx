import Navbar from "@/components/Navbar";
import Hero from '../about/components/Hero'
import AboutCcare from "../about/components/AboutCcare";
import AsSeenIn from "@/components/AsSeenIn";
import ChooseUs from "@/components/ChooseUs";
import Featured from "@/components/Featured";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const page = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutCcare />
      <AsSeenIn />
      <ChooseUs />
      <Featured />
      <Testimonials />
      <Gallery />
      <Newsletter />
      <Footer />
    </>
  );
};

export default page;

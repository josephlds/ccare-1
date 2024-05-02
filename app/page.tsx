import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AsSeenIn from "@/components/AsSeenIn";
import ChooseUs from "@/components/ChooseUs";
import AboutCcare from "@/components/AboutCcare";
import Featured from "@/components/Featured";
import Products from "@/components/Products";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import Video from "@/components/Video";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AsSeenIn />
      <ChooseUs />
      <Featured />
      <Products />
      <Video />
      <Testimonials />
      <AboutCcare />
      <Gallery />
      <Newsletter />
      <Footer />
    </>
  );
}

import TwoColumn from "./layouts/TwoColumn";
import Container from "./ui/Container";
import Box from "./layouts/Box";

import Image from "next/image";
import SimpleButton from "./SimpleButton";

const Hero = () => {
  return (
    <div className="py-10 relative">
      <Container>
        <TwoColumn>
          <Box>
            <Image
              src="/img/HeroLeft.png"
              width={1000}
              height={1000}
              alt="HeroLeft"
            />
          </Box>
          <Box>
            <Image
              src="/img/HeroRight.png"
              width={1000}
              height={1000}
              alt="HeroLeft"
            />
          </Box>
          {/* make this center between this two box above */}
          <div className="absolute top-0 right-0 left-0 bottom-0 flex justify-center items-center">
            <div className="m-auto bg-white absolute px-20 py-10 text-center">
              <h1 className="heading pb-[16px]">Sweet Almond <br /> Cuticle Oil</h1>
              <p className="pb-[32px]">Nourish your cuticles for healthy nails.</p>
              <SimpleButton text="Contact Now" />
            </div>
          </div>
        </TwoColumn>
      </Container>
    </div>
  );
};

export default Hero;

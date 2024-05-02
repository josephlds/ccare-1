import TwoColumn from "./layouts/TwoColumn";
import Container from "./ui/Container";
import Box from "./layouts/Box";

import Image from "next/image";
import FourColumn from "./layouts/FourColumn";

const ChooseUs = () => {
  const FeatureCard = [
    {

    },
  ]
  return (
    <div className="py-10 relative">
      <Container>
        <TwoColumn>
          <Box>
            <Image
              src="/img/Choose Us.png"
              width={1000}
              height={1000}
              alt="HeroLeft"
            />
          </Box>
          <Box>
            <div className="py-10 px-10 md:px-20 flex flex-col justify-center h-full">
              <h2 className="text-[#66AAB] text-2xl pb-[30px]">WHY CHOOSE US</h2>
              <h1 className="heading pb-[16px]">
                Beautiful Nails. <br /> Confident You.
              </h1>
              <p>
                Shiny nails, healthy nails. Our oil seeps in, leaving a natural
                shine for strong, happy cuticles.
              </p>
            </div>
          </Box>
        </TwoColumn>
      </Container>
    </div>
  );
};

export default ChooseUs;

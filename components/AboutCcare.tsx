import TwoColumn from "./layouts/TwoColumn";
import Container from "./ui/Container";
import Box from "./layouts/Box";
import Image from "next/image";

const AboutCcare = () => {
  return (
    <div className="py-10 relative">
      <Container>
        <TwoColumn>
          <Box>
            <Image
              src="/img/ABOUT CCARE.png"
              width={1000}
              height={1000}
              alt="HeroLeft"
              className="p-10"
            />
          </Box>
          <Box>
            <div className="py-10 px-10 md:px-20 flex flex-col justify-center h-full">
              <h2 className="text-[#66AAB] text-2xl pb-[30px]">ABOUT CCARE</h2>
              <h1 className="heading pb-[16px]">
                Beautiful nails begin with nourished cuticles.
              </h1>
              <p>
                C CARE began in New York in 2016. It&apos;s a family-run
                business all about nail care. They make nail stuff for people
                who love doing nails.
              </p>
            </div>
          </Box>
        </TwoColumn>
      </Container>
    </div>
  );
};

export default AboutCcare;

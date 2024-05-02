import Image from "next/image";
import Box from "@/components/layouts/Box";
import TwoColumn from "@/components/layouts/TwoColumn";
import Container from "@/components/ui/Container";

const AboutCcare = () => {
  return (
    <div className="py-20">
      <Container>
        <TwoColumn>
          <Box>
            <div className="py-20 lg:py-0 px-5 md:px-20 flex flex-col justify-center h-full">
              <h2 className="text-[#66AAB] text-2xl pb-[30px]">ABOUT CCARE</h2>
              <h1 className="text-4xl pb-[16px]">
                C CARE began in New York in 2016. It&apos;s a family-run business all
                about nail care. They make nail stuff for people who love doing
                nails.
              </h1>
              <p>
                Whether you&apos;re a nail pro or just like doing your own nails, C
                CARE wants to be where you get your stuff. They want to make it
                easy for you to get fancy nails at home.
              </p>
              <p>
                Give their products a try, and you might find you never want to
                use anything else!
              </p>
            </div>
          </Box>
          <Box>
            <Image src="/img/About Ccare page.png" width={1000} height={1000} alt="About Ccare" />
          </Box>
        </TwoColumn>
      </Container>
    </div>
  );
};

export default AboutCcare;
``
import Box from "./layouts/Box";
import ThreeColumn from "./layouts/ThreeColumn";
import Container from "./ui/Container";

import Image from "next/image";

const Testimonials = () => {
  return (
    <div id="testimonials" className="xl:px-40 py-20 bg-[#E5DFED]">
      <Container>
        <div className="xl:px-20">
          <h2 className="text-[#66AAB] text-2xl pb-[30px] text-[#866AAB]" >
            <span className="underline font-extrabold text-[#866AAB] text-3xl">1 MILLION+</span> HAPPY CUSTOMER
          </h2>
          <h1 className="heading pb-[16px]">Hands Softer & Happier</h1>
          <p className="pb-[50px]">
            Shiny nails, healthy nails. Our oil seeps in, leaving a natural
            shine for strong, happy cuticles.
          </p>
          <ThreeColumn>
            <Box>
              <div className="bg-white px-8 py-10 mb-[30px]">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </p>
              </div>
              <div className="flex items-center gap-5 justify-center">
                <Image
                  src="/img/profile.png"
                  width={50}
                  height={50}
                  alt="Profile"
                />
                <h2 className="text-2xl font-bold">Jane Doe</h2>
              </div>
            </Box>
            <Box>
              <div className="bg-white px-8 py-10 mb-[30px]">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </p>
              </div>
              <div className="flex items-center gap-5 justify-center">
                <Image
                  src="/img/profile.png"
                  width={50}
                  height={50}
                  alt="Profile"
                />
                <h2 className="text-2xl font-bold">Jane Doe</h2>
              </div>
            </Box>
            <Box>
              <div className="bg-white px-8 py-10 mb-[30px]">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </p>
              </div>
              <div className="flex items-center gap-5 justify-center">
                <Image
                  src="/img/profile.png"
                  width={50}
                  height={50}
                  alt="Profile"
                />
                <h2 className="text-2xl font-bold">Jane Doe</h2>
              </div>
            </Box>
          </ThreeColumn>
        </div>
      </Container>
    </div>
  );
};

export default Testimonials;

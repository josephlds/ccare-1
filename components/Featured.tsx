import Box from "./layouts/Box";
import FourColumn from "./layouts/FourColumn";
import Container from "./ui/Container";

import Image from "next/image";

const Featured = () => {
  const Features = [
    {
      img: "/icons/Pleasant smell.svg",
      title: "Pleasant Smell",
      description:
        "Delightful fragrances that captivate the senses, enhancing your environment with a refreshing aroma.",
    },
    {
      img: "/icons/Natural Ingridient.svg", // Update icon path
      title: "Natural Ingredients",
      description:
        "Harnessing the power of nature, our products utilize organic and sustainable ingredients, promoting health and well-being.",
    },
    {
      img: "/icons/Cruelty Free.svg", // Update icon path
      title: "Cruelty-Free",
      description:
        "Ethically produced without any harm to animals, ensuring our commitment to compassion and responsibility.",
    },
    {
      img: "/icons/Top QUality.svg", // Update icon path
      title: "Top Quality",
      description:
        "Exemplifying excellence in every aspect, our products are meticulously crafted to deliver unparalleled performance and satisfaction.",
    },
  ];

  return (
    <div id="features" className="py-20">
      <Container>
        <FourColumn>
          {/* Loop through features and render each one */}
          {Features.map((feature) => (
            <Box key={feature.title}>
              <div className="flex flex-col text-center items-center">
                <Image
                  src={feature.img} // Use feature object's img property
                  width={131.66}
                  height={131.66}
                  alt={feature.title}
                  className="mb-[16px]"
                />
                <h1 className="text-3xl pb-[14px]">{feature.title}</h1>
                <p>{feature.description}</p>
              </div>
            </Box>
          ))}
        </FourColumn>
      </Container>
    </div>
  );
};

export default Featured;

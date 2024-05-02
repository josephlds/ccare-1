import Image from "next/image";
import Features from "@/utils/data/products.json";
import Link from "next/link";
import Container from "@/components/ui/Container";
import TwoColumn from "@/components/layouts/TwoColumn";
import Box from "@/components/layouts/Box";
import Navbar from "@/components/Navbar";
import Description from "../components/Description";
import Products from "@/components/Products";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function Page({
  params,
}: {
  params: {
    productId: string;
    slug: string;
  };
}) {
  const product = Features?.find((item) => item.id === params.productId);

  if (!product) {
    return <div>Product not found!</div>;
  }

  const { title, img, price, amazon_link } = product;

  return (
    <>
      <Navbar />
      <div className="py-10">
        <Container>
          <TwoColumn>
            <Box>
              <Image
                src={img}
                width={1000}
                height={1000}
                alt="Single Product"
              />
            </Box>
            <Box>
              <div className="px-20 flex flex-col gap-5 justify-center my-auto h-full">
                <h1 className="heading pb-[16px]">{title}</h1>
                <h2 className="text-4xl font-bold text-[#866AAB]">{price}</h2>
                <div className="flex items-center gap-5">
                  <p className="text-2xl font-bold">4.7</p>
                  <Image
                    src="/img/Rate.png"
                    width={190}
                    height={170}
                    alt="Rate"
                  />
                </div>
                <p className="text-2xl underline font-bold pb-20">
                  8,569 ratings
                </p>
                <Link
                  href={amazon_link}
                  className="bg-[#866AAB] text-white text-center text-xl py-3 font-semibold"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  BUY NOW
                </Link>
              </div>
              <div></div>
            </Box>
          </TwoColumn>
        </Container>
      </div>
      <Description />
      <div className="pb-80">
        <Products />
      </div>
      <Newsletter />
      <Footer />
    </>
  );
}

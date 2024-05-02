import Link from "next/link";
import Image from "next/image";
import Container from "./ui/Container";
import ThreeColumn from "./layouts/ThreeColumn";
import Box from "./layouts/Box";

const Footer = () => {
  return (
    <footer className="bg-[#866AAB] py-20 xl:px-80">
      <Container>
        <ThreeColumn>
          <Box>
            <Link href="/">
              <Image
                src="/Brand/White Logo.svg"
                width={150}
                height={98}
                alt="White Logo"
                className="mb-5"
              />
            </Link>
            <p className="text-white">
              Treat yourself or loved one to an at-home manicure with this
              spa-ready product.
            </p>
          </Box>
          <Box>
            <h1 className="text-2xl text-white font-normal pb-8">
              Useful Links
            </h1>
            <ul className="flex flex-col gap-3 text-white">
              <li><Link href="/">HOME</Link></li>
              <li><Link href="/about">ABOUT</Link></li>
              <li><Link href="/">CONTACT NOW</Link></li>
            </ul>
          </Box>
          <Box>
            <h1 className="text-2xl text-white font-normal pb-8">Contact</h1>
            <ul className="flex flex-col gap-3 text-white">
              <li>1461 Hillview Drive, Lagrange, Georgia, 30240 U.S.A</li>
              <li>706-884-5870</li>
              <li>hi@prettyboxkit.com</li>
            </ul>
          </Box>
        </ThreeColumn>
      </Container>
    </footer>
  );
};

export default Footer;

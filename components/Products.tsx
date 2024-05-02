import Box from "./layouts/Box";
import ProductColumn from "./layouts/FourColumn";
import Container from "./ui/Container";
import ProductCard from "./ui/ProductCard";
import Features from '@/utils/data/products.json'

const Products = () => {

  return (
    <div className="py-20">
      <Container>
        <h1 className="text-4xl  text-center mb-28">
          Our Products Are <br />
          the Best
        </h1>
        <ProductColumn>
          {Features.map((feature) => (
            <Box key={feature.title}>
              <ProductCard
                img={feature.img}
                title={feature.title}
                price={feature.price}
                path={feature.id}
              />
            </Box>
          ))}
        </ProductColumn>
      </Container>
    </div>
  );
};

export default Products;

import React from "react";
import Link from "next/link";
import Image from "next/image";
import SimpleButton from "../SimpleButton";

interface ProductProps {
  img: string;
  title: string;
  price: string;
  path: string;
}

const ProductCard: React.FC<ProductProps> = (props) => {
  const { img, title, price, path } = props;

  return (
    <div className="flex flex-col text-center items-center">
      <div className="aspect-square bg-[#f5f2f7]">
        <Image src={img} width={1000} height={1000} alt={title} />
      </div>
      <h1 className="text-xl mt-8 text-[#1B1B1B] pb-[16px]">{title}</h1>
      <p className="text-2xl font-bold text-[#866AAB] underline pb-[25px]">
        {price}
      </p>
      <Link href={`/product/${path}`}>
        <SimpleButton text="Buy Now" />
      </Link>
    </div>
  );
};

export default ProductCard;

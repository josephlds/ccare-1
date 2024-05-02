import React from "react";
import Container from "./ui/Container";
import Button from "./Button";

const Newsletter = () => {
  return (
    <div className="bg-[#E5DFED] pt-20 pb-40 lg:px-80">
      <Container>
        <div className="-mt-[210px]">
          <h2 className="text-[#66AAB] text-2xl pb-[30px] font-semibold">
            SUBSCRIBE TO OUR NEWSLETTER
          </h2>
          <h1 className="heading pb-[16px]">
            Get 10% off right <br />
            in your mailbox!
          </h1>
          <div>
            <input
              type="email"
              className="py-3 px-5 w-[400px] mr-[20px] focus:outline-none"
              placeholder="Your email adress"
            />
            <Button text="SUBSCRIBE" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Newsletter;

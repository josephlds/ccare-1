"use client";
import React, { useState } from "react";
import Link from "next/link";
import Container from "./ui/Container";
import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";
import Sidebar from "./Sidebar";
import SimpleButton from "./SimpleButton";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <nav>
      <Container>
        <div className="flex items-center justify-between">
          <Link href="/">
            <Image
              src="/Brand/Logo.svg"
              width={150}
              height={98}
              alt="Logo"
              onClick={toggleSidebar}
            />
          </Link>
          <div className="hidden md:flex items-center justify-between gap-10">
            <ul className="flex gap-5">
              <Link href="/" className="cursor-pointer">
                HOME
              </Link>
              <Link href="/about" className="cursor-pointer">
                ABOUT US
              </Link>
              <Link href="#features" className="cursor-pointer">
                FEATURES
              </Link>
              <Link href="#testimonials" className="cursor-pointer">
                TESTIMONIALS
              </Link>
            </ul>
            <SimpleButton text="CONTACT NOW" />
          </div>
          <div className=" md:hidden cursor-pointer" onClick={toggleSidebar}>
            <RxHamburgerMenu className="w-10 h-10" />
          </div>
        </div>
      </Container>
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
    </nav>
  );
};

export default Navbar;

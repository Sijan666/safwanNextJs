import Container from "@/components/Container";
import Image from "next/image";
import React from "react";
import Logo from "../public/logo.png";
import Button from "@/components/Button";

export default function Navber() {
  return (
    <header className="py-4.5">
      <Container>
        <div className="flex justify-between items-center flex-col lg:flex-row gap-y-10">
          <div>
            <Image src={Logo} alt="LOgo" />
          </div>
          <nav>
            <ul className="flex flex-col lg:flex-row lg:gap-x-10.75 gap-y-10 items-center">
              <li className="cursor-pointer font-jost text-[18px] hover:text-primarys text-secondarys duration-300">Home</li>
              <li className="cursor-pointer font-jost text-[18px] hover:text-primarys text-secondarys duration-300">Pages</li>
              <li className="cursor-pointer font-jost text-[18px] hover:text-primarys text-secondarys duration-300">Services</li>
              <li className="cursor-pointer font-jost text-[18px] hover:text-primarys text-secondarys duration-300">Product</li>
              <li className="cursor-pointer font-jost text-[18px] hover:text-primarys text-secondarys duration-300">Contact</li>
            </ul>
          </nav>
          <div>
          {/* btn */}
          <div className="p-1.25 cursor-pointer bg-primarys">
            <Button btnText={'Download CV'}/>
          </div>
          </div>
        </div>
      </Container>
    </header>
  );
}

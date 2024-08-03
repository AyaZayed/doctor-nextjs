import Image from "next/image";
import React from "react";
import care from "@/public/Care-outline.svg";

export default function Hero() {
  return (
    <section>
      <Image src={care} alt="letters of the word care" />
    </section>
  );
}

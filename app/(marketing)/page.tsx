import Hero from "@/components/ui/Hero";
import Image from "next/image";
import React, { Suspense } from "react";
import loader from "@/public/loader.gif";

export default function Home() {
  return (
    <main>
      <Suspense fallback={<Image src={loader} alt="spinning loader" />}>
        <Hero />
      </Suspense>
    </main>
  );
}

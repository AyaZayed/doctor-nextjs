import React from "react";
import loader from "@/public/loader.gif";
import Image from "next/image";

export default function Loading() {
  return <Image src={loader} alt="spinning loader" />;
}

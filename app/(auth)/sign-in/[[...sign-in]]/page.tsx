import { SignIn } from "@clerk/nextjs";
import React from "react";

export default function Page() {
  return (
    <section className="h-screen flex justify-center items-center">
      <SignIn />
    </section>
  );
}

import { SignUp } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import React from "react";

export default function Page() {
  return (
    <section className="h-screen flex justify-center items-center">
      <SignUp />
    </section>
  );
}

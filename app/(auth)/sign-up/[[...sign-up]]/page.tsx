"use client";
import { SignUp } from "@clerk/nextjs";
import React from "react";

export default function Page() {
  return (
    <section className="h-screen flex justify-center items-center">
      <SignUp />
    </section>
  );
}

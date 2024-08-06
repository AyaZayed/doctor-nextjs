import { UserButton, SignedIn } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";

export default function DashboardNav() {
  return (
    <nav className="p-6 border-b-2 flex justify-between align-middle">
      <Link href="/">
        <div>Care</div>
      </Link>
      <div>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
}

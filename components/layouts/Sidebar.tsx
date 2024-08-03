import Link from "next/link";
import React from "react";

export default function Sidebar() {
  return (
    <aside className="border-r-2 h-full w-60 ">
      <Link href="/dashboard/gallery">Gallery</Link>
    </aside>
  );
}

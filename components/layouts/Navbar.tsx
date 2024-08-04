import Image from "next/image";
import Link from "next/link";
import React from "react";
import Doctor from "@/public/Doctor.svg";
export default function Navbar() {
  return (
    <nav>
      <div className="logo">
        <Link href="/">
          <Image src={Doctor} alt="Scenery" width={50} height={50} />
          <h3>Care Clinics</h3>
        </Link>
      </div>
      <div className="links">
        <Link href="/gallery">Gallery</Link>
        <Link href="/services">Services</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/about">About Us</Link>
        <Link href="/dashboard">Dashboard</Link>
      </div>
    </nav>
  );
}

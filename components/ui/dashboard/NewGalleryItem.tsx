import newGallery from "@/actions/newGallery";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import React from "react";

export default function NewGalleryItem() {
  const user = auth().userId;
  if (!user) {
    redirect("/sign-in");
  }
  const createGalleryItem = newGallery.bind(null, user);

  return (
    <form action={createGalleryItem}>
      <input type="text" name="before" placeholder="Before" />
      <input type="text" name="after" placeholder="After" />
      <button type="submit">+</button>
    </form>
  );
}

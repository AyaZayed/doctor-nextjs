import newGallery from "@/actions/newGallery";
import { auth } from "@clerk/nextjs/server";
import React from "react";

export default function NewGalleryItem() {
  const user = auth().userId;
  const createGalleryItem = newGallery.bind(null, user);
  return (
    <form action={createGalleryItem}>
      <input type="text" name="before" placeholder="Before" />
      <input type="text" name="after" placeholder="After" />
      <button type="submit">+</button>
    </form>
  );
}

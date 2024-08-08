import db from "@/db";
import { gallery } from "@/db/schema";
import { auth } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";
import React from "react";
import GalleryItem from "@/components/ui/dashboard/GalleryItem";
import NewGalleryItem from "@/components/ui/dashboard/NewGalleryItem";
import { redirect } from "next/navigation";

export default async function Gallery() {
  const user = auth();
  // get gallery data for user

  if (!user) {
    redirect("/sign-in");
  }
  const data = await db
    .select()
    .from(gallery)
    .where(eq(gallery.user_id, user.userId as string));

  return (
    <div>
      <h1 className="text-4xl">Gallery</h1>
      <p>Add before and after pictures</p>
      <NewGalleryItem />
      <div>
        {data.length > 0 &&
          data.map((item) => <GalleryItem key={item.id} item={item} />)}
      </div>
    </div>
  );
}

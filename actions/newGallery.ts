"use server";

import db from "@/db";
import { gallery } from "@/db/schema";

export default async function newGallery(userId: string, formData: FormData) {
  const before = formData.get("before");
  const after = formData.get("after");

  await db
    .insert(gallery)
    .values({
      user_id: userId,
      before: before,
      after: after,
    })
    .execute();
}

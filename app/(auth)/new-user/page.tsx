import db from "@/db";
import { users } from "@/db/schema";
import { currentUser } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";
import React from "react";

export default async function NewUser() {
  const createNewUser = async () => {
    const user = await currentUser();

    if (!user) {
      redirect("/sign-in");
    }

    const match = await db
      .select()
      .from(users)
      .where(eq(users.email, user.emailAddresses[0].emailAddress));

    if (match.length === 0) {
      await db
        .insert(users)
        .values({
          id: user.id,
          name: user.fullName,
          email: user.emailAddresses[0].emailAddress,
        })
        .execute();
    }
    redirect("/dashboard");
  };

  await createNewUser();
  return <div>NewUser</div>;
}

import db from "@/db";
import { users } from "@/db/schema";
import { auth, currentUser } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";

export default async function Dasboard() {
  const createNewUser = async () => {
    const user = await currentUser();

    const match = await db
      .select({
        user: users,
      })
      .from(users)
      .where(eq(users.id, user?.id));

    if (match.length === 0) {
      await db
        .insert(users)
        .values({
          id: user?.id,
          name: user?.fullName,
          email: user?.emailAddresses[0].emailAddress,
        });
    }
  };

  await createNewUser();
  return <div>hi</div>;
}

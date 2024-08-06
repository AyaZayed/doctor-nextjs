import React from "react";
import Image from "next/image";

export default function GalleryItem({
  item,
}: {
  item: {
    id: string;
    created_at: string;
    user_id: string;
    before: string;
    after: string;
  };
}) {
  return (
    <div key={item.id}>
      <Image src={item.before} alt="before case" width={300} height={300} />
      <Image src={item.after} alt="after case" width={300} height={300} />
    </div>
  );
}

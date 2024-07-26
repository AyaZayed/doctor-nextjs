import type { Metadata } from "next";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "Dermatologist",
  description: "best Dermatologist in egypt",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <nav>navbar</nav>
        {children}
        <footer>footer</footer>
      </body>
    </html>
  );
}

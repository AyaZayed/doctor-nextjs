import { ClerkProvider } from "@clerk/nextjs";

import "@/styles/globals.css";
import "@/styles/variables.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Care Clinic",
  description: "best Dermatologist clinic in egypt",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      afterSignOutUrl={"/"}
      signInForceRedirectUrl={"/new-user"}
      signUpForceRedirectUrl={"/new-user"}
      appearance={{ variables: { colorPrimary: "#29b7ac" } }}>
      <html lang="en">
        <body>{children}</body>
      </html>
    </ClerkProvider>
  );
}

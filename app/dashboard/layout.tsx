import DashboardNav from "@/components/layouts/DashboardNav";
import Sidebar from "@/components/layouts/Sidebar";
import "@/styles/globals.css";
import "@/styles/variables.css";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <DashboardNav />
        <main className="h-screen flex">
          <Sidebar />
          <section className="p-8">{children}</section>
        </main>
      </body>
    </html>
  );
}

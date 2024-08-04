import DashboardNav from "@/components/layouts/DashboardNav";
import Sidebar from "@/components/layouts/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <DashboardNav />
      <main className="h-screen flex">
        <Sidebar />
        <section className="p-8">{children}</section>
      </main>
    </>
  );
}

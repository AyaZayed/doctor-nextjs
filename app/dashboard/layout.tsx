import "@/app/globals.css";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <nav>navbar</nav>
        <aside>sidebar</aside>
        {children}
      </body>
    </html>
  );
}

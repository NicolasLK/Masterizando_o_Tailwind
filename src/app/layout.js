import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="grid min-h-screen grid-cols-App">
          <aside className="border-r border-zinc-200 px-5 py-8">SideBar</aside>

          <main className="px-4 pb-12 pt-8">{children}</main>
        </div>
      </body>
    </html>
  );
}

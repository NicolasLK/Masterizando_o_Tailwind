import { SideBar } from "../components/SideBar";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="antialiased">
      <body>
        <div className="min-h-screen lg:grid lg:grid-cols-app dark:bg-zinc-900">
          <SideBar />

          <main className="px-4 pb-12 pt-24 max-w-[100vw] lg:col-start-2 lg:px-8 lg:pt-8">{children}</main>
        </div>
      </body>
    </html>
  );
}

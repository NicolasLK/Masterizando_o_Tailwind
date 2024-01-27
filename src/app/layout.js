import { SideBar } from "@/components/SideBar";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="grid min-h-screen grid-cols-App">
          <SideBar />

          <main className="px-4 pb-12 pt-8">{children}</main>
        </div>
      </body>
    </html>
  );
}

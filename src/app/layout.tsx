import { SideBar } from "../components/SideBar";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="antialiased">
      <body>
        <div className="grid min-h-screen grid-cols-app">
          <SideBar />

          <main className="px-4 pb-12 pt-24 lg:col-start-2 lg:px-8 lg:pt-8">{children}</main>
        </div>
      </body>
    </html>
  );
}

import { Inter } from "next/font/google";
import "./globals.css";
import Toast from "@/components/Toast";
import BaseNavbar from "@/components/BaseNavbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "To-Do Application",
  description: "This is a test",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-main-bg`}>
        <Toast />
        <main>
          <div id="nav-bar" className="sticky top-0 z-10">
            <BaseNavbar />
          </div>
          {children}
        </main>
      </body>
    </html>
  );
}

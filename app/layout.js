import { Inter } from "next/font/google";
import "./globals.css";
import Toast from "@/components/Toast";

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
        <main>{children}</main>
      </body>
    </html>
  );
}

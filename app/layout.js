import "./globals.css";

import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  weight: ['100', '300', '400', '500', '700', '900'],
});

export const metadata = {
  title: "Nathan Schneider: Full Stack Developer",
  description: "Portfolio for Nathan Schneider, Web Developer for hire.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}

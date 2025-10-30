// File: app/layout.tsx
import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tiffany Azhar Izzuddin | Portfolio",
  description: "Undergraduate in Information Technology at Politeknik Negeri Malang, passionate about transforming data into intelligent solutions.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-gray-50 text-gray-900">{children}</div>
      </body>
    </html>
  );
}

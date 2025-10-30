
import HomePage from "@/components/Home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tiffany Azhar Izzuddin | Portfolio",
  description: "IT Student specializing in machine learning, data analysis, and 2D/3D design. Creating intelligent data solutions enhanced with compelling multidimensional visualizations and user experiences.",
  keywords: "data analyst, web developer, machine learning, portfolio",
  authors: [{ name: "Tiffany Azhar Izzuddin" }],
  creator: "Tiffany Azhar Izzuddin",
  icons: {
    icon: "/logo.svg", // atau path ke icon lain
    apple: "/logo.svg", // untuk iOS
  },

  openGraph: {
    title: "Tiffany Azhar Izzuddin | Data + ML + 2D/3D Design",
    description: "Machine learning enthusiast and multidimensional designer. Transforming complex datasets into intelligent solutions with stunning 2D interfaces and immersive 3D visual experiences.",
    url: "https://tiffany-azhar-izzuddin.vercel.app",
    siteName: "Tiffany Portfolio",
    images: [
      {
        url: "/og.png", //
        width: 1200,
        height: 630,
        alt: "Tiffany Azhar Izzuddin - Machine Learning & 3D Design Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },

};

export default function Home() {
  // SEO handled here (SSR)
  return <HomePage />;
}
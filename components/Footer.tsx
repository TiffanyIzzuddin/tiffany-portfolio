"use client";

import { Github, Globe, Linkedin, Mail, MessageCircle, Youtube } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t mt-20">
      <div className="max-w-5xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6 text-gray-700">
        {/* Left Side */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold">Tiffany Azhar Izzuddin</h3>
          <p className="text-sm text-gray-500">Transforming data into intelligent solutions.</p>
          <a href="mailto:tiffanyazharizzuddin@gmail.com" className="text-sm text-gray-500 inline-block">tiffanyazharizzuddin@gmail.com</a>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-4">
          <a
            href="mailto:tiffany@example.com"
            aria-label="Email"
            className="p-3 bg-gray-100 rounded-full hover:bg-blue-100 transition"
          >
            <Mail className="w-5 h-5 text-gray-700" />
          </a>

          <a
            href="https://wa.me/6285785714448"
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
            className="p-3 bg-gray-100 rounded-full hover:bg-green-100 transition"
          >
            <MessageCircle className="w-5 h-5 text-green-600" />
          </a>

          <a
            href="https://www.linkedin.com/in/tiffany-azhar-izzuddin-830973221"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="p-3 bg-gray-100 rounded-full hover:bg-blue-100 transition"
          >
            <Linkedin className="w-5 h-5 text-blue-600" />
          </a>

          <a
            href="https://github.com/tiffany-azhar-izzuddin"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition"
          >
            <Github className="w-5 h-5 text-gray-800" />
          </a>

          <a
            href="https://www.youtube.com/@tiffanyazharizzuddin"
            target="_blank"
            rel="noreferrer"
            aria-label="YouTube"
            className="p-3 bg-gray-100 rounded-full hover:bg-red-100 transition"
          >
            <Youtube className="w-5 h-5 text-red-500" />
          </a>

          <a
            href="https://www.researchgate.net/profile/Tiffany-Izzuddin?ev=hdr_xprf"
            target="_blank"
            rel="noreferrer"
            aria-label="Google Scholar"
            className="p-3 bg-gray-100 rounded-full hover:bg-indigo-100 transition"
          >
            <Image src="/tools/ResearchGate.svg" alt="ResearchGate" width={20} height={20} />
          </a>
          <a href="https://tiffany-azhar-izzuddin.vercel.app" target="_blank" rel="noreferrer" className="p-3 bg-gray-100 rounded-full hover:bg-green-100 transition"><Globe /></a>

        </div>
      </div>

      <div className="border-t text-center py-4 text-sm text-gray-500">
        © {new Date().getFullYear()} Tiffany Azhar Izzuddin. All rights reserved.
      </div>
    </footer>
  );
}

"use client";
import Footer from "@/components/Footer";
import { Github, Globe, Linkedin, Mail, Youtube } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

export default function HomePage() {
  // Referensi ke setiap section
  const experienceRef = useRef<HTMLDivElement | null>(null);
  const footerRef = useRef<HTMLDivElement | null>(null);

  // Fungsi scroll halus
  const scrollToSection = (ref: React.RefObject<HTMLElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="flex flex-col items-center justify-center w-full">
      {/* HERO 1 - Self Introduction */}
      <section className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl px-8 py-15 gap-8">
        <div className="flex-1">
          <h5 className="text-2xl text-gray-600 md:text-3xl mb-2">I’m</h5>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Tiffany Azhar Izzuddin</h1>
          <p className="text-lg mb-6 text-gray-600">
            I see patterns everywhere - in data streams, in algorithms, in code, and in dimensions. To me, data science and creative design aren't separate disciplines - they're two languages telling the same human story.
          </p>
          <div className="flex gap-4">
            <button
              onClick={() => scrollToSection(experienceRef)}
              className="px-5 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
            >
              More About Me
            </button>
            <button
              onClick={() => scrollToSection(footerRef)}
              className="px-5 py-2 border border-blue-600 text-blue-600 rounded-full hover:bg-blue-50 transition"
            >
              Contact Me
            </button>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <div className="w-64 h-64 bg-gray-300 rounded-full relative overflow-hidden">
            <Image src="/pp.png" alt="Tiffany Azhar Izzuddin" fill className="object-cover" priority />
          </div>
        </div>
      </section>

      {/* HERO 2 - Self Motivation */}
      <section className="flex flex-col md:flex-row-reverse items-center justify-between w-full max-w-6xl px-8 py-10 gap-8 bg-white shadow-inner">
        <div className="flex-1">
          <h2 className="text-1xl md:text-2xl font-semibold mb-4">My unconventional path has been a rich source of learning, equipping me with diverse knowledge and skills</h2>
          <p className="text-gray-600 mb-6">
            This commitment to continuous growth is a principle I will carry forward.
          </p>
          <p className="italic text-gray-500 mb-8">~ Tiffany</p>
          <div className="flex gap-4 items-center">
            <a href="https://www.linkedin.com/in/tiffany-azhar-izzuddin-830973221" target="_blank" rel="noreferrer" className="p-3 bg-gray-100 rounded-full hover:bg-blue-100 transition"><Linkedin /></a>
            <a href="https://github.com/TiffanyIzzuddin" target="_blank" rel="noreferrer" className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition"><Github /></a>
            <a href="https://youtube.com/@tiffanyazharizzuddin" target="_blank" rel="noreferrer" className="p-3 bg-gray-100 rounded-full hover:bg-red-100 transition"><Youtube /></a>
            <a href="mailto:tiffanyazharizzuddin@gmail.com" className="p-3 bg-gray-100 rounded-full hover:bg-yellow-100 transition"><Mail /></a>
            <a href="https://www.researchgate.net/profile/Tiffany-Izzuddin?ev=hdr_xprf" target="_blank" rel="noreferrer" className="p-3 bg-gray-100 rounded-full hover:bg-indigo-100 transition">
              <Image src="/tools/ResearchGate.svg" alt="ResearchGate" width={25} height={25} />
            </a>
            <a href="https://tiffany-azhar-izzuddin.vercel.app" target="_blank" rel="noreferrer" className="p-3 bg-gray-100 rounded-full hover:bg-green-100 transition"><Globe /></a>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <div className="w-80 h-56 bg-gray-200 rounded-xl relative overflow-hidden">
            <Image src="/motiv.png" alt="Self Motivation" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* HERO 3 - Experience */}
      <section ref={experienceRef} className="min-h-screen py-10 max-w-6xl mx-auto px-6 text-center" >
        <h2 className="text-3xl font-bold text-center mb-8">Roles Experienced As</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* CARD 1 */}
          <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition">
            <div className="relative w-60 aspect-video rounded-xl overflow-hidden bg-gray-200">
              <Image src="/card/mobile.png" alt="Mobile Developer" fill className="object-cover" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Mobile Developer</h3>
            <p className="text-gray-600 text-sm mb-4">Spearheaded the end-to-end development of an Android application, from wireframe design and page linking to API design and final .apk production. The application is integrated with a custom AI backend built on the Django framework.</p>
            <div className="flex gap-3">
              <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                <Image src="/tools/flutter.svg" alt="Flutter" width={34} height={34} />
              </div>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition">
            <div className="relative w-60 aspect-video rounded-xl overflow-hidden bg-gray-200">
              <Image src="/card/iot.png" alt="IoT Developer" fill className="object-cover" />
            </div>
            <h3 className="text-xl font-semibold mb-2">IoT Developer</h3>
            <p className="text-gray-600 text-sm mb-4">Engineered a Smart Farming system for automated irrigation and nutrient monitoring via a mobile application. The system utilizes NPK and humidity sensors, along with valve actuators, communicating via the MQTT protocol on an ESP32 microcontroller (programmed with Arduino IDE).</p>
            <div className="flex gap-3">
              <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                <Image src="/tools/arduino.svg" alt="Arduino" width={34} height={34} />
              </div>
              <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                <Image src="/tools/mqtt.svg" alt="MQTT" width={34} height={34} />
              </div>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition">
            <div className="relative w-60 aspect-video rounded-xl overflow-hidden bg-gray-200">
              <Image src="/card/ai.png" alt="AI Engineer" fill className="object-cover" />
            </div>
            <h3 className="text-xl font-semibold mb-2">AI Engineer</h3>
            <p className="text-gray-600 text-sm mb-4">Developed and deployed an image classification model for eye diseases (Normal, Cataract, Glaucoma, Diabetic Retinopathy). This lightweight model, achieving over 80% accuracy, was containerized as a .h5 file, integrated into a Django backend, and published to a server for mobile app consumption.</p>
            <div className="flex gap-3">
              <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                <Image src="/tools/python.svg" alt="Python" width={34} height={34} />
              </div>
              <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                <Image src="/tools/tensorflow.svg" alt="TensorFlow" width={34} height={34} />
              </div>
            </div>
          </div>

          {/* CARD 4 */}
          <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition">
            <div className="relative w-60 aspect-video rounded-xl overflow-hidden bg-gray-200">
              <Image src="/card/3D-design.png" alt="3D Designer" fill className="object-cover" />
            </div>
            <h3 className="text-xl font-semibold mb-2">3D Designer</h3>
            <p className="text-gray-600 text-sm mb-4">Designed 3D models for a medical device using FreeCAD. The process involved discussing functional requirements (distance, space, width) with the client, conducting multiple design iterations, and delivering the final design for prototyping.</p>
            <div className="flex gap-3">
              <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                <Image src="/tools/freecad.svg" alt="Freecad" width ={34} height={34} />
              </div>
            </div>
          </div>

          {/* CARD 5 */}
          <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition">
            <div className="relative w-60 aspect-video rounded-xl overflow-hidden bg-gray-200">
              <Image src="/card/2D-design.png" alt="2D Designer" fill className="object-cover" />
            </div>
            <h3 className="text-xl font-semibold mb-2">2D Designer</h3>
            <p className="text-gray-600 text-sm mb-4">Created visual designs including stickers, posters, banners, and logos. Managed the full design process from requirement gathering and establishing color palettes to conceptualizing designs and iterating based on client feedback until final approval.</p>
            <div className="flex gap-3">
              <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                <Image src="/tools/Corel.svg" alt="Corel" width={34} height={34} />
              </div>
              <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                <Image src="/tools/Canva.svg" alt="Canva" width={34} height={34} />
              </div>
            </div>
          </div>

          {/* CARD 6 */}
          <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition">
            <div className="relative w-60 aspect-video rounded-xl overflow-hidden bg-gray-200">
              <Image src="/card/video-editor.png" alt="Video Editor" fill className="object-cover" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Video Editor</h3>
            <p className="text-gray-600 text-sm mb-4">Proficient in producing documentary-style videos using DaVinci Resolve (transitioned from CapCut). Focus on achieving smooth transitions, precise cuts, complementary music, and intentional scene selection. Proven ability to deliver high-quality work under pressure to meet strict deadlines.</p>
            <div className="flex gap-3">
              <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                <Image src="/tools/capcut.svg" alt="Capcut" width={34} height={34} />
              </div>
              <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                <Image src="/tools/davinci.svg" alt="Davinci" width={34} height={34} />
              </div>
            </div>
          </div>

          {/* CARD 7 */}
          <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition">
            <div className="relative w-60 aspect-video rounded-xl overflow-hidden bg-gray-200">
              <Image src="/card/lead.png" alt="Leadership & Admin Experience" fill className="object-cover" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Leadership & Admin Experience</h3>
            <p className="text-gray-600 text-sm mb-4">Served as Deputy Head of the Events Division, coordinating both the planning and execution of events. Additionally managed administrative duties, including inventory management and meticulous data recording.</p>
            <div className="flex gap-3">
              <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                <Image src="/tools/excel.svg" alt="Excel" width={34} height={34} />
              </div>
              <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                <Image src="/tools/word.svg" alt="Word" width={34} height={34} />
              </div>
            </div>
          </div>

          {/* CARD 8 */}
          <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition">
            <div className="relative w-60 aspect-video rounded-xl overflow-hidden bg-gray-200">
              <Image src="/intern-expo.jpg" alt="International Exposure" fill className="object-cover" />
            </div>
            <h3 className="text-xl font-semibold mb-2">International Exposure</h3>
            <p className="text-gray-600 text-sm mb-4">Selected as a delegate for a Cultural Exchange Program in the Philippines and represented the university at the Closing Ceremony in collaboration with ISPSC University.</p>
          </div>
        </div>
        
        <div ref={footerRef} className="w-full">
          <Footer />
        </div>
      </section>

    </main>
  ); 
}
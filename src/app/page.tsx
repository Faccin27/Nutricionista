"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Calendar,
  ChevronRight,
  Clock,
  Mail,
  MapPin,
  Menu,
  Phone,
  Star,
  X,
} from "lucide-react";
import alimento from "@/assets/alimento.png";
import saraiva from "@/assets/saraiva.jpg";
import logo from "@/assets/aaaa.png";

export default function Home() {
  const [activeTab, setActiveTab] = useState("frutas");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="flex min-h-screen w-full flex-col bg-[#f5f2ea]">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-[#f5f2ea]/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src={logo}
              alt="Saraiva Nutri Logo"
              width={32}
              height={32}
              className="rounded-full"
            />
            <span className="text-xl font-semibold text-[#5a7d2a]">
              Saraiva Nutri
            </span>
          </div>
          <nav className="hidden md:flex gap-6 text-[#333]">
            <Link
              href="#home"
              className="text-sm font-semibold hover:text-[#5a7d2a] transition-colors"
            >
              Home
            </Link>
            <Link
              href="#about"
              className="text-sm font-semibold hover:text-[#5a7d2a] transition-colors"
            >
              Sobre
            </Link>
            <Link
              href="#services"
              className="text-sm font-semibold hover:text-[#5a7d2a] transition-colors"
            >
              Serviços
            </Link>
            <Link
              href="#testimonials"
              className="text-sm font-semibold hover:text-[#5a7d2a] transition-colors"
            >
              Depoimentos
            </Link>
            <Link
              href="#contact"
              className="text-sm font-semibold hover:text-[#5a7d2a] transition-colors"
            >
              Contato
            </Link>
          </nav>
          <button className="bg-[#5a7d2a] hover:bg-[#4a6822] text-white px-4 py-2 rounded-md text-sm font-medium transition-colors hidden md:block">
            Agendar Consulta
          </button>
          <button
            className="md:hidden text-[#5a7d2a]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#f5f2ea] py-4 px-4 border-b">
            <nav className="flex flex-col gap-4">
              <Link
                href="#home"
                className="text-sm font-semibold hover:text-[#5a7d2a] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="#about"
                className="text-sm font-semibold hover:text-[#5a7d2a] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Sobre
              </Link>
              <Link
                href="#services"
                className="text-sm font-semibold hover:text-[#5a7d2a] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Serviços
              </Link>
              <Link
                href="#testimonials"
                className="text-sm font-semibold hover:text-[#5a7d2a] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Depoimentos
              </Link>
              <Link
                href="#contact"
                className="text-sm font-semibold hover:text-[#5a7d2a] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contato
              </Link>
              <button className="bg-[#5a7d2a] hover:bg-[#4a6822] text-white px-4 py-2 rounded-md text-sm font-medium transition-colors w-full mt-2">
                Agendar Consulta
              </button>
            </nav>
          </div>
        )}
      </header>

      <main className="flex-1">
        <section id="home" className="relative overflow-hidden py-20 md:py-32">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
            <div className="flex flex-col gap-4 md:w-1/2">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight text-[#3c3c3c]">
                Transforme sua saúde com{" "}
                <span className="text-[#5a7d2a]">nutrição personalizada</span>
              </h1>
              <p className="text-lg text-gray-600">
                Descubra como uma alimentação equilibrada pode melhorar sua
                qualidade de vida, energia e bem-estar.
              </p>
              <div className="flex gap-4 mt-4">
                <button className="cursor-pointer bg-[#5a7d2a] hover:bg-[#4a6822] text-white px-6 py-3 rounded-md font-medium flex items-center gap-2 transition-colors">
                  Agendar Consulta <ArrowRight className="h-4 w-4" />
                </button>
                <button className="cursor-pointer border border-[#5a7d2a] text-[#5a7d2a] hover:bg-[#5a7d2a]/10 px-6 py-3 rounded-md font-medium transition-colors">
                  Saiba Mais
                </button>
              </div>
            </div>
            <div className="relative md:w-1/2 h-[400px] rounded-lg overflow-hidden shadow-xl transition-transform hover:scale-[1.02] duration-300 mt-8 md:mt-0">
              <Image
                src={alimento}
                alt="Nutricionista com alimentos saudáveis"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>


        
      </main>
    </div>
  );
}

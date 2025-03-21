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


      </header>

      <main className="flex-1">


        
      </main>
    </div>
  );
}

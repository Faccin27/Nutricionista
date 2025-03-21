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
import nutrition from "@/assets/Nutrition.jpg";

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
        {/* Hero */}
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

        {/* About  */}
        <section id="about" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="relative md:w-1/2 h-[500px] rounded-lg overflow-hidden">
                <Image
                  src={saraiva}
                  alt="Dr. Saraiva"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="md:w-1/2 space-y-6">
                <div className="inline-block rounded-full bg-[#e8e1d1] px-3 py-1 text-sm font-medium text-[#5a7d2a]">
                  Sobre Mim
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#3c3c3c]">
                  Olá, sou o Dr. Saraiva, Nutricionista Clínica
                </h2>
                <p className="text-gray-600">
                  Com mais de 10 anos de experiencia, sou especialista em
                  nutrilção funcional e esportiva. Minha abordagem é
                  personalizada para cada paciente, considerando seu historico
                  medico, estilo de vida e objetivos
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-5 w-5 text-[#5a7d2a]" />
                    <span className="text-[#5a7d2a]">
                      Especialista em nutrição funcional
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-5 w-5 text-[#5a7d2a]" />
                    <span className="text-[#5a7d2a]">
                      Graduado na universidade federal
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-5 w-5 text-[#5a7d2a]" />
                    <span className="text-[#5a7d2a]">
                      Pós-graduido em nutrição esportiva
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-5 w-5 text-[#5a7d2a]" />
                    <span className="text-[#5a7d2a]">
                      Membro da associação brasileira de nutrição
                    </span>
                  </li>
                </ul>
                <button className="bg-[#5a7d2a] hover:bg-[#4a6822] text-white px-6 py-3 rounded-md font-medium transition-colors">
                  Conheça minha trajetória
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Service section */}
        <section id="services" className="py-20 bg-[#f5f2ea]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-block rounded-full bg-[#e8e1d1] px-3 py-1 text-sm font-medium text-[#5a7d2a] mb-4">
                Serviços
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#3c3c3c]">
                Como posso ajudar você
              </h2>
              <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                Ofereço uma variedade de serviços nutricionais personalizados
                para atender às suas necessidades específicas e ajudá-lo a
                alcançar seus objetivos de saúde.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Consulta Nutricional",
                  description:
                    "Avaliação completa do seu estado nutricional e elaboração de um plano alimentar personalizado.",
                },
                {
                  title: "Nutrição Esportiva",
                  description:
                    "Planos alimentares específicos para atletas e praticantes de atividade física, visando melhor desempenho.",
                },
                {
                  title: "Reeducação Alimentar",
                  description:
                    "Aprenda a desenvolver hábitos alimentares saudáveis e sustentáveis para toda a vida.",
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className="bg-white border-none rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden group"
                >
                  <div className="h-48 relative overflow-hidden">
                    <Image
                      src={nutrition}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-[#3c3c3c]">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <button className="text-[#5a7d2a] font-medium flex items-center gap-1 hover:gap-2 transition-all">
                      Saiba mais <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-block rounded-full bg-[#e8e1d1] px-3 py-1 text-sm font-medium text-[#5a7d2a] mb-4">
                Nutrição
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#3c3c3c]">
                Descubra os alimentos ideais para você
              </h2>
              <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                Explore diferentes grupos alimentares e descubra como eles podem
                beneficiar sua saúde.
              </p>
            </div>

            {/* Custom Tabs */}
            <div className="w-full max-w-4xl mx-auto">
              <div className="flex border-b mb-8 overflow-x-auto">
                {["frutas", "vegetais", "proteinas", "graos"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-2 font-medium text-sm transition-colors ${
                      activeTab === tab
                        ? "border-b-2 border-[#5a7d2a] text-[#5a7d2a]"
                        : "text-gray-600 hover:text-[#5a7d2a]"
                    }`}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>

              <div className="p-4 bg-[#f9f7f2] rounded-lg">
                {activeTab === "frutas" && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                      "Melancia",
                      "Melao",
                      "Laranja",
                      "Batata",
                      "Morango",
                      "Coco",
                    ].map((fruit, index) => (
                      <div
                        key={index}
                        className="bg-white p-4 rounded-lg shadow-sm flex items-center gap-3 hover:shadow-md transition-shadow"
                      >
                        <div className="h-12 w-12 rounded-full bg-[#e8e1d1] flex items-center justify-center">
                          <Image
                            src={`/frutas/${fruit}.png`}
                            alt={fruit}
                            width={40}
                            height={40}
                            className="rounded-full"
                          />
                        </div>
                        <div>
                          <h4 className="font-medium text-[#5a7d2a]">{fruit}</h4>
                          <p className="text-xs text-gray-500">
                            Rico em vitaminas
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === "vegetais" && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                      "Berinjela",
                      "Cebola",
                      "Cenoura",
                      "Tomate",
                      "Rabanete",
                      "Pimentao",
                    ].map((veg, index) => (
                      <div
                        key={index}
                        className="bg-white p-4 rounded-lg shadow-sm flex items-center gap-3 hover:shadow-md transition-shadow"
                      >
                        <div className="h-12 w-12 rounded-full bg-[#e8e1d1] flex items-center justify-center">
                          <Image
                            src={`/vegetal/${veg}.png`}
                            alt={veg}
                            width={40}
                            height={40}
                            className="rounded-full"
                          />
                        </div>
                        <div>
                          <h4 className="font-medium text-[#5a7d2a]">{veg}</h4>
                          <p className="text-xs text-gray-500">
                            Rico em minerais
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === "proteinas" && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                      "Frango",
                      "Peixe",
                      "Ovo",
                      "Queijo",
                      "Feijao",
                      "Lentilha",
                    ].map((protein, index) => (
                      <div
                        key={index}
                        className="bg-white p-4 rounded-lg shadow-sm flex items-center gap-3 hover:shadow-md transition-shadow"
                      >
                        <div className="h-12 w-12 rounded-full bg-[#e8e1d1] flex items-center justify-center">
                          <Image
                            src={`/proteinas/${protein}.png`}
                            alt={protein}
                            width={40}
                            height={40}
                            className="rounded-full"
                          />
                        </div>
                        <div>
                          <h4 className="font-medium text-[#5a7d2a]">{protein}</h4>
                          <p className="text-xs text-gray-500">
                            Rico em proteínas
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === "graos" && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                      "Arroz",
                      "Quinoa",
                      "Aveia",
                      "Ervilha",
                      "Feijao",
                      "Lentilha",
                    ].map((grain, index) => (
                      <div
                        key={index}
                        className="bg-white p-4 rounded-lg shadow-sm flex items-center gap-3 hover:shadow-md transition-shadow"
                      >
                        <div className="h-12 w-12 rounded-full bg-[#e8e1d1] flex items-center justify-center">
                          <Image
                            src={`/graos/${grain}.png`}
                            alt={grain}
                            width={40}
                            height={40}
                            className="rounded-full"
                          />
                        </div>
                        <div>
                          <h4 className="font-medium text-[#5a7d2a]">{grain}</h4>
                          <p className="text-xs text-gray-500">
                            Rico em fibras
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        <section id="testimonials" className="py-20 bg-[#f5f2ea]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-block rounded-full bg-[#e8e1d1] px-3 py-1 text-sm font-medium text-[#5a7d2a] mb-4">
                Depoimentos
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#3c3c3c]">O que meus pacientes dizem</h2>
              <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                Conheça as histórias de sucesso e transformação de pessoas que mudaram seus hábitos alimentares.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Mariana Silva",
                  role: "Atleta",
                  quote:
                    "O Dr. Saraiva transformou minha performance esportiva com um plano nutricional personalizado. Minha energia e recuperação melhoraram significativamente.",
                },
                {
                  name: "Carlos Mendes",
                  role: "Empresario",
                  quote:
                    "Depois de anos lutando contra problemas digestivos, finalmente encontrei equilíbrio com o acompanhamento da Dra. Saraiva. Sua abordagem funcional fez toda a diferença.",
                },
                {
                  name: "Juliana Costa",
                  role: "Professora",
                  quote:
                    "Perdi 15kg em 6 meses com o acompanhamento do Dr. Saraiva, e o melhor: aprendi a me alimentar de forma saudável e sustentável, sem dietas restritivas.",
                },
              ].map((testimonial, index) => (
                <div key={index} className="bg-white rounded-lg border-none shadow-md p-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <Image
                        src={`/testimonials/${testimonial.role}.jpg`}
                        alt={testimonial.name}
                        width={60}
                        height={60}
                        className="rounded-full"
                      />
                      <div>
                        <h4 className="font-bold text-[#5a7d2a]">{testimonial.name}</h4>
                        <p className="text-sm text-gray-500">{testimonial.role}</p>
                      </div>
                    </div>
                    <p className="italic text-gray-600">"{testimonial.quote}"</p>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-[#5a7d2a]" fill="#5a7d2a" />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 bg-white text-[#5a7d2a]">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <div className="inline-block rounded-full bg-[#e8e1d1] px-3 py-1 text-sm font-medium text-[#5a7d2a] mb-4">
                  Contato
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#3c3c3c] mb-6">Vamos conversar sobre sua saúde</h2>
                <p className="text-gray-600 mb-8">
                  Estou aqui para ajudar você a alcançar seus objetivos de saúde e bem-estar. Entre em contato para
                  agendar uma consulta ou tirar suas dúvidas.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-[#e8e1d1] flex items-center justify-center">
                      <Phone className="h-5 w-5 text-[#5a7d2a]" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Telefone</p>
                      <p className="font-medium">(11) 99999-9999</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-[#e8e1d1] flex items-center justify-center">
                      <Mail className="h-5 w-5 text-[#5a7d2a]" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Email</p>
                      <p className="font-medium">contato@saraivanutri.com.br</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-[#e8e1d1] flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-[#5a7d2a]" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Endereço</p>
                      <p className="font-medium">Av. Paulista, 1000 - São Paulo, SP</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-[#e8e1d1] flex items-center justify-center">
                      <Clock className="h-5 w-5 text-[#5a7d2a]" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Horário de Atendimento</p>
                      <p className="font-medium">Segunda a Sexta: 8h às 18h</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="bg-white rounded-lg border-none shadow-lg p-6">
                  <h3 className="text-xl font-bold mb-4 text-[#3c3c3c]">Agende sua Consulta</h3>
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">
                          Nome
                        </label>
                        <input
                          id="name"
                          className="w-full p-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#5a7d2a]"
                          placeholder="Seu nome"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          Email
                        </label>
                        <input
                          id="email"
                          type="email"
                          className="w-full p-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#5a7d2a]"
                          placeholder="seu@email.com"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-medium ">
                          Telefone
                        </label>
                        <input
                          id="phone"
                          className="w-full p-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#5a7d2a]"
                          placeholder="(00) 00000-0000"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="date" className="text-sm font-medium">
                          Data Preferencial
                        </label>
                        <div className="flex items-center border rounded-md focus-within:ring-1 focus-within:ring-[#5a7d2a]">
                          <input
                            id="date"
                            type="text"
                            className="w-full p-2 focus:outline-none"
                            placeholder="DD/MM/AAAA"
                          />
                          <Calendar className="h-4 w-4 mr-2 text-gray-500" />
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="service" className="text-sm font-medium">
                        Serviço
                      </label>
                      <select
                        id="service"
                        className="w-full p-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#5a7d2a]"
                      >
                        <option value="">Selecione um serviço</option>
                        <option value="consulta">Consulta Nutricional</option>
                        <option value="esportiva">Nutrição Esportiva</option>
                        <option value="reeducacao">Reeducação Alimentar</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Mensagem
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        className="w-full p-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#5a7d2a]"
                        placeholder="Conte-nos um pouco sobre seus objetivos..."
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-[#5a7d2a] hover:bg-[#4a6822] text-white px-4 py-2 rounded-md font-medium transition-colors"
                    >
                      Enviar Mensagem
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#3c3c3c] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Image
                  src={logo}
                  alt="Saraiva Nutri Logo"
                  width={32}
                  height={32}
                  className="rounded-full"
                />
                <span className="text-xl font-semibold text-white">Saraiva Nutri</span>
              </div>
              <p className="text-sm text-gray-300 mb-4">
                Transformando vidas através da nutrição personalizada e baseada em evidências científicas.
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a
                  href="#"
                  className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                <a
                  href="#"
                  className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Links Rápidos</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#home" className="text-gray-300 hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="text-gray-300 hover:text-white transition-colors">
                    Sobre
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="text-gray-300 hover:text-white transition-colors">
                    Serviços
                  </Link>
                </li>
                <li>
                  <Link href="#testimonials" className="text-gray-300 hover:text-white transition-colors">
                    Depoimentos
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-gray-300 hover:text-white transition-colors">
                    Contato
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Serviços</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                    Consulta Nutricional
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                    Nutrição Esportiva
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                    Reeducação Alimentar
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                    Nutrição Funcional
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                    Acompanhamento Online
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Newsletter</h4>
              <p className="text-sm text-gray-300 mb-4">
                Inscreva-se para receber dicas de nutrição e promoções exclusivas.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Seu email"
                  className="p-2 text-sm bg-white/10 border border-white/20 rounded-l-md focus:outline-none focus:ring-1 focus:ring-[#5a7d2a] text-white w-full"
                />
                <button className="bg-[#5a7d2a] hover:bg-[#4a6822] text-white px-4 py-2 rounded-r-md">Enviar</button>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>© {new Date().getFullYear()} Saraiva Nutri. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

    </div>
  );
}

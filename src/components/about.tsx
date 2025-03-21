import Image from "next/image"
import { ChevronRight } from "lucide-react"
import saraiva from "@/assets/saraiva.jpg"

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="relative md:w-1/2 h-[500px] rounded-lg overflow-hidden">
            <Image src={saraiva || "/placeholder.svg"} alt="Dr. Saraiva" fill className="object-cover" />
          </div>
          <div className="md:w-1/2 space-y-6">
            <div className="inline-block rounded-full bg-[#e8e1d1] px-3 py-1 text-sm font-medium text-[#5a7d2a]">
              Sobre Mim
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#3c3c3c]">
              Olá, sou o Dr. Saraiva, Nutricionista Clínica
            </h2>
            <p className="text-gray-600">
              Com mais de 10 anos de experiencia, sou especialista em nutrilção funcional e esportiva. Minha abordagem é
              personalizada para cada paciente, considerando seu historico medico, estilo de vida e objetivos
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <ChevronRight className="h-5 w-5 text-[#5a7d2a]" />
                <span className="text-[#5a7d2a]">Especialista em nutrição funcional</span>
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight className="h-5 w-5 text-[#5a7d2a]" />
                <span className="text-[#5a7d2a]">Graduado na universidade federal</span>
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight className="h-5 w-5 text-[#5a7d2a]" />
                <span className="text-[#5a7d2a]">Pós-graduido em nutrição esportiva</span>
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight className="h-5 w-5 text-[#5a7d2a]" />
                <span className="text-[#5a7d2a]">Membro da associação brasileira de nutrição</span>
              </li>
            </ul>
            <button className="bg-[#5a7d2a] hover:bg-[#4a6822] text-white px-6 py-3 rounded-md font-medium transition-colors">
              Conheça minha trajetória
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}


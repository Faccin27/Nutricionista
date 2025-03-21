import Image from "next/image"
import { ArrowRight } from "lucide-react"
import alimento from "@/assets/alimento.png"

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden py-20 md:py-32">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
        <div className="flex flex-col gap-4 md:w-1/2">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-[#3c3c3c]">
            Transforme sua saúde com <span className="text-[#5a7d2a]">nutrição personalizada</span>
          </h1>
          <p className="text-lg text-gray-600">
            Descubra como uma alimentação equilibrada pode melhorar sua qualidade de vida, energia e bem-estar.
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
            src={alimento || "/placeholder.svg"}
            alt="Nutricionista com alimentos saudáveis"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  )
}


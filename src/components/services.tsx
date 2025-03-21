import Image from "next/image"
import { ArrowRight } from "lucide-react"
import nutrition from "@/assets/Nutrition.jpg"

export default function Services() {
  const services = [
    {
      title: "Consulta Nutricional",
      description: "Avaliação completa do seu estado nutricional e elaboração de um plano alimentar personalizado.",
    },
    {
      title: "Nutrição Esportiva",
      description:
        "Planos alimentares específicos para atletas e praticantes de atividade física, visando melhor desempenho.",
    },
    {
      title: "Reeducação Alimentar",
      description: "Aprenda a desenvolver hábitos alimentares saudáveis e sustentáveis para toda a vida.",
    },
  ]

  return (
    <section id="services" className="py-20 bg-[#f5f2ea]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block rounded-full bg-[#e8e1d1] px-3 py-1 text-sm font-medium text-[#5a7d2a] mb-4">
            Serviços
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#3c3c3c]">Como posso ajudar você</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Ofereço uma variedade de serviços nutricionais personalizados para atender às suas necessidades específicas
            e ajudá-lo a alcançar seus objetivos de saúde.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border-none rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden group"
            >
              <div className="h-48 relative overflow-hidden">
                <Image
                  src={nutrition || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-[#3c3c3c]">{service.title}</h3>
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
  )
}


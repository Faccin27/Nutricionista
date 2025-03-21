import Image from "next/image"
import { Star } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
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
  ]

  return (
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
          {testimonials.map((testimonial, index) => (
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
                <p className="italic text-gray-600">&quot;{testimonial.quote}&quot;</p>
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
  )
}


import { Phone, Mail, MapPin, Clock, Calendar } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white text-[#5a7d2a]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <div className="inline-block rounded-full bg-[#e8e1d1] px-3 py-1 text-sm font-medium text-[#5a7d2a] mb-4">
              Contato
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#3c3c3c] mb-6">Vamos conversar sobre sua saúde</h2>
            <p className="text-gray-600 mb-8">
              Estou aqui para ajudar você a alcançar seus objetivos de saúde e bem-estar. Entre em contato para agendar
              uma consulta ou tirar suas dúvidas.
            </p>

            <div className="space-y-4">
              <ContactItem
                icon={<Phone className="h-5 w-5 text-[#5a7d2a]" />}
                label="Telefone"
                value="(11) 99999-9999"
              />
              <ContactItem
                icon={<Mail className="h-5 w-5 text-[#5a7d2a]" />}
                label="Email"
                value="contato@saraivanutri.com.br"
              />
              <ContactItem
                icon={<MapPin className="h-5 w-5 text-[#5a7d2a]" />}
                label="Endereço"
                value="Av. Paulista, 1000 - São Paulo, SP"
              />
              <ContactItem
                icon={<Clock className="h-5 w-5 text-[#5a7d2a]" />}
                label="Horário de Atendimento"
                value="Segunda a Sexta: 8h às 18h"
              />
            </div>
          </div>

          <div>
            <div className="bg-white rounded-lg border-none shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-[#3c3c3c]">Agende sua Consulta</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ContactItem({ icon, label, value }) {
  return (
    <div className="flex items-center gap-4">
      <div className="h-10 w-10 rounded-full bg-[#e8e1d1] flex items-center justify-center">{icon}</div>
      <div>
        <p className="text-sm text-gray-500">{label}</p>
        <p className="font-medium">{value}</p>
      </div>
    </div>
  )
}

function ContactForm() {
  return (
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
            <input id="date" type="text" className="w-full p-2 focus:outline-none" placeholder="DD/MM/AAAA" />
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
  )
}


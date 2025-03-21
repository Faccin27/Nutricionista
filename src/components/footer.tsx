import Image from "next/image"
import Link from "next/link"
import logo from "@/assets/aaaa.png"

export default function Footer() {
  return (
    <footer className="bg-[#3c3c3c] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image
                src={logo || "/placeholder.svg"}
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
              <SocialIcon href="#" icon="facebook" />
              <SocialIcon href="#" icon="instagram" />
              <SocialIcon href="#" icon="twitter" />
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <FooterLink href="#home" text="Home" />
              <FooterLink href="#about" text="Sobre" />
              <FooterLink href="#services" text="Serviços" />
              <FooterLink href="#testimonials" text="Depoimentos" />
              <FooterLink href="#contact" text="Contato" />
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Sobre</h4>
            <ul className="space-y-2">
              <FooterLink href="#" text="Nosotros" />
              <FooterLink href="#" text="Equipo" />
              <FooterLink href="#" text="Testimonios" />
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Serviços</h4>
            <ul className="space-y-2">
              <FooterLink href="#" text="Consulta Nutricional" />
              <FooterLink href="#" text="Nutrição Esportiva" />
              <FooterLink href="#" text="Reeducação Alimentar" />
              <FooterLink href="#" text="Nutrição Funcional" />
              <FooterLink href="#" text="Acompanhamento Online" />
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
  )
}

function FooterLink({ href, text }) {
  return (
    <li>
      <Link href={href} className="text-gray-300 hover:text-white transition-colors">
        {text}
      </Link>
    </li>
  )
}

function SocialIcon({ href, icon }) {
  return (
    <a
      href={href}
      className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
    >
      {icon === "facebook" && (
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
      )}
      {icon === "instagram" && (
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
      )}
      {icon === "twitter" && (
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
      )}
    </a>
  )
}


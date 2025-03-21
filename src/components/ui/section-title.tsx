interface SectionTitleProps {
  subtitle: string
  title: string
  description?: string
}

export function SectionTitle({ subtitle, title, description }: SectionTitleProps) {
  return (
    <div className="text-center mb-16">
      <div className="inline-block rounded-full bg-[#e8e1d1] px-3 py-1 text-sm font-medium text-[#5a7d2a] mb-4">
        {subtitle}
      </div>
      <h2 className="text-3xl md:text-4xl font-bold text-[#3c3c3c]">{title}</h2>
      {description && <p className="mt-4 text-gray-600 max-w-2xl mx-auto">{description}</p>}
    </div>
  )
}


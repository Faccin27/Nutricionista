"use client"

import { useState } from "react"
import Image from "next/image"

export default function FoodCategories() {
  const [activeTab, setActiveTab] = useState("frutas")

  const foodCategories = {
    frutas: ["Melancia", "Melao", "Laranja", "Batata", "Morango", "Coco"],
    vegetais: ["Berinjela", "Cebola", "Cenoura", "Tomate", "Rabanete", "Pimentao"],
    proteinas: ["Frango", "Peixe", "Ovo", "Queijo", "Feijao", "Lentilha"],
    graos: ["Arroz", "Quinoa", "Aveia", "Ervilha", "Feijao", "Lentilha"],
  }

  const descriptions = {
    frutas: "Rico em vitaminas",
    vegetais: "Rico em minerais",
    proteinas: "Rico em proteínas",
    graos: "Rico em fibras",
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block rounded-full bg-[#e8e1d1] px-3 py-1 text-sm font-medium text-[#5a7d2a] mb-4">
            Nutrição
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#3c3c3c]">Descubra os alimentos ideais para você</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Explore diferentes grupos alimentares e descubra como eles podem beneficiar sua saúde.
          </p>
        </div>

        {/* Custom Tabs */}
        <div className="w-full max-w-4xl mx-auto">
          <div className="flex border-b mb-8 overflow-x-auto">
            {Object.keys(foodCategories).map((tab) => (
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {foodCategories[activeTab as keyof typeof foodCategories].map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-lg shadow-sm flex items-center gap-3 hover:shadow-md transition-shadow"
                >
                  <div className="h-12 w-12 rounded-full bg-[#e8e1d1] flex items-center justify-center">
                    <Image
                      src={`/${activeTab}/${item}.png`}
                      alt={item}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium text-[#5a7d2a]">{item}</h4>
                    <p className="text-xs text-gray-500">{descriptions[activeTab as keyof typeof descriptions]}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


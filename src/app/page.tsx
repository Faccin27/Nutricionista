"use client"
import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Services from "@/components/services"
import FoodCategories from "@/components/food-categories"
import Testimonials from "@/components/testimonials"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-[#f5f2ea]">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <FoodCategories />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}


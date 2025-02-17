import type React from "react"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Hero />
      <main className="container mx-auto px-4 py-8">
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App


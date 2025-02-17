import type React from "react"
import { Card, CardContent } from "@/components/ui/card"

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">
          About Me
        </h2>
        <Card className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-md shadow-xl">
          <CardContent className="p-6">
            <p className="text-lg leading-relaxed">
              As a passionate backend developer pursuing my B.Tech in CSE at Indian Institute of Information and
              Technology Vadodara, I thrive on building robust and scalable systems. My expertise lies in microservices
              architecture, distributed systems, and cloud-native technologies. I'm constantly pushing the boundaries of
              what's possible in backend development, always eager to learn and adapt to new challenges in this
              ever-evolving field.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

export default About


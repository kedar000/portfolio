import type React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">
          Get In Touch
        </h2>
        <Card className="max-w-md mx-auto bg-white/50 dark:bg-gray-700/50 backdrop-blur-md shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Contact Me</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <Input placeholder="Your Name" className="bg-transparent" />
              <Input type="email" placeholder="Your Email" className="bg-transparent" />
              <Textarea placeholder="Your Message" className="bg-transparent" />
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
              >
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
        <div className="mt-12 text-center">
          <p className="text-lg">Email: kedareswarkotha@gmail.com</p>
          <p className="text-lg">Mobile: 9703181979</p>
        </div>
      </div>
    </section>
  )
}

export default Contact


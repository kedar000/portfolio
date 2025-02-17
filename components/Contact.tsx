import type React from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { SiGmail, SiWhatsapp } from 'react-icons/si'
import { FiSend } from 'react-icons/fi'

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text"
        >
          Let's Work Together
        </motion.h2>

        <div className="relative group bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-1 shadow-2xl">
          <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-lg rounded-xl p-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact Channels */}
              <div className="space-y-8 border-r-2 border-gray-200 dark:border-gray-700 pr-8">
                <h3 className="text-2xl font-bold dark:text-white">Direct Reach</h3>
                
                <motion.a
                  whileHover={{ x: 5 }}
                  href="mailto:kedareswarkotha@gmail.com"
                  className="flex items-center gap-4 p-4 bg-white dark:bg-gray-700 rounded-lg shadow-sm hover:shadow-md transition-all"
                >
                  <div className="p-3 bg-blue-100 dark:bg-gray-600 rounded-lg">
                    <SiGmail className="w-6 h-6 text-blue-500 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="font-medium dark:text-white">Email</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">kedareswarkotha@gmail.com</p>
                  </div>
                </motion.a>

                <motion.a
                  whileHover={{ x: 5 }}
                  href="https://wa.me/9703181979"
                  className="flex items-center gap-4 p-4 bg-white dark:bg-gray-700 rounded-lg shadow-sm hover:shadow-md transition-all"
                >
                  <div className="p-3 bg-green-100 dark:bg-gray-600 rounded-lg">
                    <SiWhatsapp className="w-6 h-6 text-green-500 dark:text-green-400" />
                  </div>
                  <div>
                    <p className="font-medium dark:text-white">WhatsApp</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">+91 9703181979</p>
                  </div>
                </motion.a>
              </div>

              {/* Contact Form */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold dark:text-white">Send Message</h3>
                
                <form className="space-y-6">
                  <div className="relative">
                    <Input
                      placeholder=" "
                      className="peer bg-white dark:bg-gray-700 h-12 px-4 border-2 border-gray-200 dark:border-gray-600 rounded-lg focus:border-blue-500"
                    />
                    <label className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-300 pointer-events-none transition-all peer-placeholder-shown:text-base peer-focus:-translate-y-7 peer-focus:text-sm peer-focus:text-blue-500">
                      Your Name
                    </label>
                  </div>

                  <div className="relative">
                    <Input
                      type="email"
                      placeholder=" "
                      className="peer bg-white dark:bg-gray-700 h-12 px-4 border-2 border-gray-200 dark:border-gray-600 rounded-lg focus:border-blue-500"
                    />
                    <label className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-300 pointer-events-none transition-all peer-placeholder-shown:text-base peer-focus:-translate-y-7 peer-focus:text-sm peer-focus:text-blue-500">
                      Your Email
                    </label>
                  </div>

                  <div className="relative">
                    <Textarea
                      placeholder=" "
                      className="peer bg-white dark:bg-gray-700 h-32 px-4 py-2 border-2 border-gray-200 dark:border-gray-600 rounded-lg focus:border-blue-500"
                    />
                    <label className="absolute left-4 top-4 text-gray-400 dark:text-gray-300 pointer-events-none transition-all peer-placeholder-shown:text-base peer-focus:-translate-y-6 peer-focus:text-sm peer-focus:text-blue-500">
                      Your Message
                    </label>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                  >
                    <FiSend className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
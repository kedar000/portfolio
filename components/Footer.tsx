import type React from "react"
import { Github, Linkedin, Twitter } from "lucide-react"
import { FaGitlab } from "react-icons/fa" // Import GitLab icon

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-8">
      <div className="container mx-auto px-6 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <a
            href="https://github.com/kedar000"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
          >
            <Github className="h-6 w-6" />
          </a>
          <a
            href="https://gitlab.com/kedar000"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-orange-500 dark:text-gray-400 dark:hover:text-orange-400 transition-colors"
          >
            <FaGitlab className="h-6 w-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/kedar-k-209506261/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a
            href="https://x.com/StackedSenpai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
          >
            <Twitter className="h-6 w-6" />
          </a>
        </div>
        <p className="text-gray-600 dark:text-gray-400">© 2023 Kotha Kedareswar. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
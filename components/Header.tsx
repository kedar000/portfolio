import type React from "react"

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white py-4">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold">Kotha Kedareswar</h1>
        <p className="text-xl">Backend Developer</p>
      </div>
    </header>
  )
}

export default Header


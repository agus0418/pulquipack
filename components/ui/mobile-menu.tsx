"use client"

import { useState, useEffect } from "react"
import { Menu, X, Sparkles, Users, Settings, Package, Route, Headphones, TrendingUp, Truck, ChevronDown } from "lucide-react"
import Link from "next/link"
import { Button } from "./button"

interface MobileMenuProps {
  scrolled: boolean
}

export function MobileMenu({ scrolled }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [showSubmenu, setShowSubmenu] = useState(false)

  // Cerrar el menú al cambiar de ruta
  useEffect(() => {
    const handleRouteChange = () => {
      setIsOpen(false)
    }

    // Asegurar que el body no tenga scroll cuando el menú está abierto
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`p-2 rounded-md ${scrolled ? "text-white hover:bg-blue-500" : "text-white hover:bg-white/10"} focus:outline-none transition-colors duration-200`}
        aria-label="Menú"
      >
        <Menu className="h-6 w-6" />
      </button>

      {/* Overlay para cerrar el menú */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/30"
          onClick={() => setIsOpen(false)}
        />
      )}
      
      {/* Menú móvil */}
      <div 
        className={`fixed inset-y-0 right-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4 border-b border-blue-700 bg-blue-600">
          <button
            onClick={() => setIsOpen(false)}
            className="text-white hover:text-blue-100 focus:outline-none"
            aria-label="Cerrar menú"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <nav className="px-4 py-2">
          <ul className="space-y-1">
            <li>
              <Link
                href="/"
                className="flex items-center px-3 py-2 text-gray-700 hover:bg-blue-50 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                <Sparkles className="w-5 h-5 mr-3 text-blue-600" />
                Inicio
              </Link>
            </li>
            <li>
              <a
                href="/#nosotros"
                className="flex items-center px-3 py-2 text-gray-700 hover:bg-blue-50 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                <Users className="w-5 h-5 mr-3 text-blue-600" />
                Nosotros
              </a>
            </li>
            <li>
              <a
                href="/#servicios"
                className="flex items-center px-3 py-2 text-gray-700 hover:bg-blue-50 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                <Settings className="w-5 h-5 mr-3 text-blue-600" />
                Servicios
              </a>
            </li>
            <li>
              <div>
                <button
                  onClick={() => setShowSubmenu(!showSubmenu)}
                  className="flex items-center justify-between w-full px-3 py-2 text-gray-700 hover:bg-blue-50 rounded-md"
                >
                  <div className="flex items-center">
                    <Package className="w-5 h-5 mr-3 text-blue-600" />
                    <span>Solicitudes</span>
                  </div>
                  <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${showSubmenu ? "transform rotate-180" : ""}`} />
                </button>
                <div className={`ml-8 mt-1 space-y-1 ${showSubmenu ? "block" : "hidden"}`}>
                  <Link
                    href="/presupuesto"
                    className="flex items-center px-3 py-2 text-gray-600 hover:bg-blue-50 rounded-md"
                    onClick={() => setIsOpen(false)}
                  >
                    <TrendingUp className="w-4 h-4 mr-3 text-blue-500" />
                    Solicitar Presupuesto
                  </Link>
                  <Link
                    href="/retiros"
                    className="flex items-center px-3 py-2 text-gray-600 hover:bg-blue-50 rounded-md"
                    onClick={() => setIsOpen(false)}
                  >
                    <Truck className="w-4 h-4 mr-3 text-blue-500" />
                    Retiros a Domicilio
                  </Link>
                </div>
              </div>
            </li>
            <li>
              <Link
                href="/seguimiento"
                className="flex items-center px-3 py-2 text-gray-700 hover:bg-blue-50 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                <Route className="w-5 h-5 mr-3 text-blue-600" />
                Seguimiento
              </Link>
            </li>
            <li>
              <Link
                href="/contacto"
                className="flex items-center px-3 py-2 text-gray-700 hover:bg-blue-50 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                <Headphones className="w-5 h-5 mr-3 text-blue-600" />
                Contacto
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
} 
"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Package, Sparkles, Users, Settings, Route, Headphones, TrendingUp, Truck } from "lucide-react"
import { MobileMenu } from "./mobile-menu"
import { useMobile } from "@/hooks/use-mobile"

interface NavbarProps {
  isHome?: boolean;
}

export function Navbar({ isHome = false }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const isMobile = useMobile()
  
  useEffect(() => {
    // Detectar scroll para cambiar el navbar
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50
      setScrolled(isScrolled)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  
  // Determinar el estilo del navbar dependiendo de si está en la página principal o en una subpágina
  const navStyles = isHome 
    ? {
        bgClass: scrolled
          ? "bg-blue-600 shadow-xl border-b border-blue-700"
          : "bg-transparent shadow-lg",
        boxShadow: scrolled
          ? "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
          : "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        linkClass: (scrolled: boolean) => scrolled
          ? "text-white hover:text-blue-100"
          : "text-white hover:text-blue-200",
        activeClass: (scrolled: boolean) => scrolled
          ? "text-white font-bold"
          : "text-white"
      }
    : {
        bgClass: "bg-blue-600 shadow-sm border-b border-blue-700",
        boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
        linkClass: (_: boolean) => "text-white hover:text-blue-100",
        activeClass: (_: boolean) => "text-white font-bold"
      };

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${navStyles.bgClass}`}
      style={{
        boxShadow: navStyles.boxShadow,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 transform hover:scale-105 transition-transform duration-300 relative w-[110px] h-[35px] sm:w-[140px] sm:h-[40px]">
              <Link href="/">
                <div className={`absolute inset-0 rounded-lg ${scrolled || !isHome ? "bg-transparent" : "bg-transparent"}`}></div>
                <Image
                  src="/images/ruge-mono.png"
                  alt="PULQUIPACK Logo"
                  fill
                  sizes="(max-width: 640px) 110px, 140px"
                  className="object-contain relative z-10"
                  style={{
                    filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.2))"
                  }}
                />
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-6 flex items-center space-x-1">
              <Link
                href="/"
                className={`px-3 py-2 text-sm font-medium transition-all duration-300 flex items-center ${isHome ? navStyles.activeClass(scrolled) : navStyles.linkClass(scrolled)}`}
              >
                <Sparkles className="w-4 h-4 mr-2" />
                Inicio
              </Link>
              <a
                href={isHome ? "#nosotros" : "/#nosotros"}
                className={`px-3 py-2 text-sm font-medium transition-all duration-300 flex items-center ${navStyles.linkClass(scrolled)}`}
              >
                <Users className="w-4 h-4 mr-2" />
                Nosotros
              </a>
              <a
                href={isHome ? "#servicios" : "/#servicios"}
                className={`px-3 py-2 text-sm font-medium transition-all duration-300 flex items-center ${navStyles.linkClass(scrolled)}`}
              >
                <Settings className="w-4 h-4 mr-2" />
                Servicios
              </a>
              <div className="relative group">
                <button
                  className={`px-3 py-2 text-sm font-medium transition-all duration-300 flex items-center ${navStyles.linkClass(scrolled)}`}
                >
                  <Package className="w-4 h-4 mr-2" />
                  Solicitudes
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1 transition-transform duration-300 group-hover:rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute left-0 mt-1 w-56 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 border border-gray-100 overflow-hidden transform group-hover:translate-y-0 translate-y-1">
                  <Link
                    href="/presupuesto"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 flex items-center first:rounded-t-md transition-all duration-200"
                  >
                    <TrendingUp className="w-4 h-4 mr-2" />
                    Solicitar Presupuesto
                  </Link>
                  <Link
                    href="/retiros"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 flex items-center last:rounded-b-md transition-all duration-200"
                  >
                    <Truck className="w-4 h-4 mr-2" />
                    Retiros a Domicilio
                  </Link>
                </div>
              </div>
              <Link
                href="/seguimiento"
                className={`px-3 py-2 text-sm font-medium transition-all duration-300 flex items-center ${navStyles.linkClass(scrolled)}`}
              >
                <Route className="w-4 h-4 mr-2" />
                Seguimiento
              </Link>
              <Link
                href="/contacto"
                className={`px-3 py-2 text-sm font-medium transition-all duration-300 flex items-center ${navStyles.linkClass(scrolled)}`}
              >
                <Headphones className="w-4 h-4 mr-2" />
                Contacto
              </Link>
            </div>
          </div>
          
          {/* Menú móvil */}
          <MobileMenu scrolled={!isHome || scrolled} />
        </div>
      </div>
    </nav>
  )
} 
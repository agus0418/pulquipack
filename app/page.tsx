"use client"

import {
  ArrowRight,
  Package,
  Truck,
  Clock,
  Shield,
  Users,
  MapPin,
  Phone,
  Mail,
  Building2,
  Award,
  Target,
  Zap,
  Star,
  CheckCircle,
  TrendingUp,
  Globe,
  Headphones,
  Warehouse,
  Route,
  Settings,
  Heart,
  Sparkles,
} from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useEffect, useState } from "react"
import { useMobile } from "@/hooks/use-mobile"
import Image from "next/image"
import TrackingWidget from "@/components/tracking-widget"

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const isMobile = useMobile()

  useEffect(() => {
    setIsVisible(true)

    // Detectar scroll para cambiar el navbar
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50
      setScrolled(isScrolled)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Ajustar duración de animaciones según dispositivo
  const transitionDuration = isMobile ? "duration-500" : "duration-1000"
  const hoverScale = isMobile ? "hover:scale-102" : "hover:scale-105"
  const hoverScaleLarge = isMobile ? "hover:scale-105" : "hover:scale-110"

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-gradient-to-r from-blue-50 to-white backdrop-blur-sm shadow-xl border-b border-blue-100"
            : "bg-transparent shadow-lg"
        }`}
        style={{
          boxShadow: scrolled
            ? "0 10px 25px -5px rgba(59, 130, 246, 0.15), 0 4px 6px -2px rgba(59, 130, 246, 0.05)"
            : "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <div className="flex-shrink-0 transform hover:scale-105 transition-transform duration-300">
                <Image
                  src="/images/ruge-mono.png"
                  alt="PULQUIPACK Logo"
                  width={120}
                  height={48}
                  className="h-12 w-auto drop-shadow-sm"
                />
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a
                  href="#inicio"
                  className={`px-3 py-2 text-sm font-medium transition-all duration-300 rounded-lg flex items-center ${
                    scrolled
                      ? "text-blue-700 hover:text-blue-800 hover:bg-blue-100"
                      : "text-white hover:text-blue-200 hover:bg-white/10"
                  }`}
                >
                  <Sparkles className="w-4 h-4 mr-1" />
                  Inicio
                </a>
                <a
                  href="#nosotros"
                  className={`px-3 py-2 text-sm font-medium transition-all duration-300 rounded-lg flex items-center ${
                    scrolled
                      ? "text-blue-600 hover:text-blue-800 hover:bg-blue-100"
                      : "text-white/90 hover:text-blue-200 hover:bg-white/10"
                  }`}
                >
                  <Users className="w-4 h-4 mr-1" />
                  Nosotros
                </a>
                <a
                  href="#servicios"
                  className={`px-3 py-2 text-sm font-medium transition-all duration-300 rounded-lg flex items-center ${
                    scrolled
                      ? "text-blue-600 hover:text-blue-800 hover:bg-blue-100"
                      : "text-white/90 hover:text-blue-200 hover:bg-white/10"
                  }`}
                >
                  <Settings className="w-4 h-4 mr-1" />
                  Servicios
                </a>
                <div className="relative group">
                  <button
                    className={`px-3 py-2 text-sm font-medium transition-all duration-300 rounded-lg flex items-center ${
                      scrolled
                        ? "text-blue-600 hover:text-blue-800 hover:bg-blue-100"
                        : "text-white/90 hover:text-blue-200 hover:bg-white/10"
                    }`}
                  >
                    <Package className="w-4 h-4 mr-1" />
                    Solicitudes
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                    <Link
                      href="/presupuesto"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 flex items-center"
                    >
                      <TrendingUp className="w-4 h-4 mr-2" />
                      Solicitar Presupuesto
                    </Link>
                    <Link
                      href="/retiros"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 flex items-center"
                    >
                      <Truck className="w-4 h-4 mr-2" />
                      Retiros a Domicilio
                    </Link>
                  </div>
                </div>
                <Link
                  href="/seguimiento"
                  className={`px-3 py-2 text-sm font-medium transition-all duration-300 rounded-lg flex items-center ${
                    scrolled
                      ? "text-blue-600 hover:text-blue-800 hover:bg-blue-100"
                      : "text-white/90 hover:text-blue-200 hover:bg-white/10"
                  }`}
                >
                  <Route className="w-4 h-4 mr-1" />
                  Seguimiento
                </Link>
                <Link
                  href="/contacto"
                  className={`px-3 py-2 text-sm font-medium transition-all duration-300 rounded-lg flex items-center ${
                    scrolled
                      ? "text-blue-600 hover:text-blue-800 hover:bg-blue-100"
                      : "text-white/90 hover:text-blue-200 hover:bg-white/10"
                  }`}
                >
                  <Headphones className="w-4 h-4 mr-1" />
                  Contacto
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="inicio"
        className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white overflow-hidden"
      >
        <div className="absolute inset-0 bg-black opacity-20"></div>
        {/* Animated background elements - reducidos en móvil */}
        {!isMobile && (
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
          </div>
        )}

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 lg:py-44">
          <div
            className={`text-center transform transition-all ${transitionDuration} ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <div className="flex justify-center mb-6">
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Star className="w-5 h-5 text-yellow-400" />
                <span className="text-sm font-medium">Líder en Logística Argentina</span>
                <Star className="w-5 h-5 text-yellow-400" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
              Soluciones Logísticas
              <span className="block text-yellow-400 animate-fade-in-up animation-delay-500">de Confianza</span>
            </h1>
            <p
              className={`text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-blue-100 transform transition-all ${transitionDuration} delay-300 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              Conectamos tu negocio con el mundo a través de servicios logísticos integrales, eficientes y
              personalizados para cada cliente.
            </p>
            <div
              className={`flex flex-col sm:flex-row gap-4 justify-center transform transition-all ${transitionDuration} delay-500 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              <Button
                size="lg"
                className={`bg-yellow-500 hover:bg-yellow-600 text-black font-semibold transform ${hoverScaleLarge} hover:shadow-xl transition-all duration-300 group`}
              >
                <Globe className="mr-2 h-5 w-5" />
                Conoce Nuestros Servicios
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              <Link href="/presupuesto">
                <Button
                  size="lg"
                  className={`bg-yellow-500 hover:bg-yellow-400 text-black font-semibold transform ${hoverScaleLarge} hover:shadow-xl transition-all duration-300`}
                >
                  <TrendingUp className="mr-2 h-5 w-5" />
                  Solicitar Cotización
                </Button>
              </Link>
            </div>
            {/* Quick Tracking Widget */}
            <div className="mt-12 flex justify-center">
              <TrackingWidget />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "15+", label: "Años de Experiencia", delay: "0", icon: Award },
              { number: "500+", label: "Clientes Satisfechos", delay: "100", icon: Heart },
              { number: "24/7", label: "Atención al Cliente", delay: "200", icon: Headphones },
              { number: "100%", label: "Compromiso", delay: "300", icon: Target },
            ].map((stat, index) => (
              <div
                key={index}
                className={`text-center transform transition-all duration-700 ${isMobile ? "" : "hover:scale-110"} ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"} group`}
                style={{ transitionDelay: `${isMobile ? Number.parseInt(stat.delay) / 2 : stat.delay}ms` }}
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 transition-all duration-300">
                  <stat.icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2 hover:text-blue-700 transition-colors duration-300">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <Building2 className="w-6 h-6 text-blue-600" />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 hover:text-blue-600 transition-colors duration-300">
              Nuestras Instalaciones
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto hover:text-gray-800 transition-colors duration-300">
              Modernas instalaciones estratégicamente ubicadas para brindar el mejor servicio logístico
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <Image
                src="/images/pulquipack-facilities-1.webp"
                alt="Instalaciones principales PULQUIPACK"
                width={600}
                height={400}
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex items-center mb-2">
                  <Building2 className="w-5 h-5 mr-2" />
                  <h3 className="text-xl font-semibold">Oficinas Principales</h3>
                </div>
                <p className="text-sm">Centro de operaciones y atención al cliente</p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <Image
                src="/images/pulquipack-facilities-2.webp"
                alt="Centro de distribución PULQUIPACK"
                width={600}
                height={400}
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex items-center mb-2">
                  <Warehouse className="w-5 h-5 mr-2" />
                  <h3 className="text-xl font-semibold">Centro de Distribución</h3>
                </div>
                <p className="text-sm">Área de carga, descarga y almacenamiento</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fleet Gallery Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <Truck className="w-6 h-6 text-blue-600" />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 hover:text-blue-600 transition-colors duration-300">
              Nuestra Flota en Acción
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto hover:text-gray-800 transition-colors duration-300">
              Conoce nuestros vehículos y equipo profesional que hacen posible un servicio de calidad
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <Image
                src="/images/pulquipack-truck-blue.webp"
                alt="Camión PULQUIPACK con lona azul en operación"
                width={400}
                height={300}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex items-center mb-2">
                  <Package className="w-5 h-5 mr-2" />
                  <h3 className="text-lg font-semibold">Transporte de Carga</h3>
                </div>
                <p className="text-sm">Camiones especializados para todo tipo de mercadería</p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <Image
                src="/images/truck-fleet-2.jpg"
                alt="Flota PULQUIPACK en carretera"
                width={400}
                height={300}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex items-center mb-2">
                  <Zap className="w-5 h-5 mr-2" />
                  <h3 className="text-lg font-semibold">Flota Moderna</h3>
                </div>
                <p className="text-sm">Vehículos de última generación</p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <Image
                src="/images/team-photo.jpg"
                alt="Equipo profesional PULQUIPACK"
                width={400}
                height={300}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex items-center mb-2">
                  <Users className="w-5 h-5 mr-2" />
                  <h3 className="text-lg font-semibold">Equipo Profesional</h3>
                </div>
                <p className="text-sm">Personal capacitado y comprometido</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="nosotros" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`transform transition-all ${transitionDuration} ${isMobile ? "" : "hover:translate-x-2"}`}>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 hover:text-blue-600 transition-colors duration-300">
                  Quiénes Somos
                </h2>
              </div>
              <p className="text-lg text-gray-600 mb-6 hover:text-gray-800 transition-colors duration-300">
                PULQUIPACK es una empresa argentina especializada en servicios logísticos integrales. Con más de 15 años
                de experiencia en el mercado, nos hemos consolidado como un socio estratégico confiable para empresas de
                todos los tamaños.
              </p>
              <p className="text-lg text-gray-600 mb-6 hover:text-gray-800 transition-colors duration-300">
                Nuestra misión es brindar soluciones logísticas eficientes, seguras y personalizadas que permitan a
                nuestros clientes optimizar sus operaciones y concentrarse en el crecimiento de sus negocios.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: Shield, text: "Seguridad Garantizada", color: "text-green-600" },
                  { icon: Clock, text: "Entregas Puntuales", color: "text-blue-600" },
                  { icon: Users, text: "Equipo Profesional", color: "text-purple-600" },
                  { icon: Building2, text: "Instalaciones Modernas", color: "text-orange-600" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`flex items-center group hover:bg-blue-50 p-3 rounded-lg transition-all duration-300 transform ${isMobile ? "" : "hover:scale-105"}`}
                  >
                    <div
                      className={`w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mr-3 group-hover:bg-white transition-all duration-300`}
                    >
                      <item.icon
                        className={`h-5 w-5 ${item.color} ${isMobile ? "" : "group-hover:scale-110"} transition-all duration-300`}
                      />
                    </div>
                    <span className="text-gray-700 group-hover:text-blue-700 transition-colors duration-300 font-medium">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative group">
              <div className="rounded-2xl overflow-hidden transform transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl">
                <Image
                  src="/images/truck-fleet-1.jpg"
                  alt="Camión PULQUIPACK en ruta"
                  width={600}
                  height={400}
                  className="w-full h-96 object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-blue-800/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <Truck className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <Settings className="w-6 h-6 text-blue-600" />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 hover:text-blue-600 transition-colors duration-300">
              Nuestros Servicios
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto hover:text-gray-800 transition-colors duration-300">
              Ofrecemos una amplia gama de servicios logísticos diseñados para satisfacer las necesidades específicas de
              cada cliente.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Truck,
                title: "Transporte de Carga",
                description: "Servicios de transporte terrestre para cargas de todo tipo y tamaño.",
                features: [
                  "Transporte nacional e internacional",
                  "Carga general y especializada",
                  "Seguimiento en tiempo real",
                ],
                color: "from-blue-500 to-blue-600",
              },
              {
                icon: Warehouse,
                title: "Almacenamiento",
                description: "Soluciones de almacenamiento seguro y gestión de inventarios.",
                features: ["Depósitos climatizados", "Gestión de inventarios", "Control de stock en tiempo real"],
                color: "from-green-500 to-green-600",
              },
              {
                icon: MapPin,
                title: "Distribución",
                description: "Servicios de distribución y entrega de última milla.",
                features: ["Distribución urbana", "Entrega programada", "Servicios express"],
                color: "from-purple-500 to-purple-600",
              },
              {
                icon: Shield,
                title: "Logística Integral",
                description: "Soluciones logísticas completas adaptadas a tu negocio.",
                features: ["Consultoría logística", "Optimización de procesos", "Soluciones personalizadas"],
                color: "from-orange-500 to-orange-600",
              },
              {
                icon: Zap,
                title: "Servicios Express",
                description: "Entregas urgentes y servicios de mensajería especializada.",
                features: ["Entregas el mismo día", "Servicios de emergencia", "Mensajería especializada"],
                color: "from-red-500 to-red-600",
              },
              {
                icon: Users,
                title: "Asesoramiento",
                description: "Consultoría especializada en optimización logística.",
                features: ["Análisis de procesos", "Reducción de costos", "Mejora de eficiencia"],
                color: "from-indigo-500 to-indigo-600",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className={`group hover:shadow-xl transition-all duration-500 transform ${isMobile ? "hover:-translate-y-1 hover:scale-102" : "hover:-translate-y-2 hover:scale-105"} border-0 shadow-lg hover:bg-gradient-to-br hover:from-white hover:to-blue-50 overflow-hidden`}
              >
                <CardHeader className="relative overflow-hidden">
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-300 shadow-lg`}
                  >
                    <service.icon className="h-6 w-6 text-white transition-colors duration-300" />
                  </div>
                  <CardTitle className="group-hover:text-blue-600 transition-colors duration-300 flex items-center">
                    {service.title}
                    <CheckCircle className="w-4 h-4 ml-2 text-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </CardTitle>
                  <CardDescription className="group-hover:text-gray-700 transition-colors duration-300">
                    {service.description}
                  </CardDescription>
                  {!isMobile && (
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full opacity-0 group-hover:opacity-10 transform translate-x-10 -translate-y-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-500"></div>
                  )}
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-gray-600 space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className={`group-hover:text-gray-800 transition-colors duration-300 transform ${isMobile ? "" : "group-hover:translate-x-1"} flex items-center`}
                        style={{ transitionDelay: isMobile ? "0ms" : `${featureIndex * 100}ms` }}
                      >
                        <CheckCircle className="w-3 h-3 mr-2 text-green-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/20 to-transparent"></div>
          {!isMobile && (
            <>
              <div className="absolute top-20 right-20 w-64 h-64 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
              <div className="absolute bottom-20 left-20 w-64 h-64 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
            </>
          )}
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
              <Sparkles className="w-8 h-8 text-yellow-400" />
            </div>
          </div>
          <h2
            className={`text-3xl md:text-4xl font-bold text-white mb-4 ${isMobile ? "" : "hover:scale-105"} transition-transform duration-300`}
          >
            ¿Listo para Optimizar tu Logística?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto hover:text-white transition-colors duration-300">
            Contáctanos hoy mismo y descubre cómo podemos ayudarte a mejorar la eficiencia de tus operaciones
            logísticas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/presupuesto">
              <Button
                size="lg"
                className={`bg-yellow-500 hover:bg-yellow-600 text-black font-semibold transform ${hoverScaleLarge} hover:shadow-xl transition-all duration-300 group`}
              >
                <TrendingUp className="mr-2 h-5 w-5" />
                Solicitar Cotización
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
              </Button>
            </Link>
            <Button
              size="lg"
              className={`bg-white/20 hover:bg-white hover:text-blue-600 text-white border border-white/30 font-semibold transform ${hoverScaleLarge} hover:shadow-xl transition-all duration-300 group backdrop-blur-sm`}
            >
              <Phone
                className={`mr-2 h-5 w-5 ${isMobile ? "" : "group-hover:rotate-12"} transition-transform duration-300`}
              />
              Llamar Ahora
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div
              className={`col-span-2 transform ${isMobile ? "" : "hover:translate-x-2"} transition-transform duration-300`}
            >
              <div className="flex items-center space-x-3 mb-4">
                <Image
                  src="/images/ruge-mono.png"
                  alt="PULQUIPACK Logo"
                  width={60}
                  height={24}
                  className="h-6 w-auto opacity-80"
                />
                <h3 className="text-2xl font-bold hover:text-blue-400 transition-colors duration-300">PULQUIPACK</h3>
              </div>
              <p className="text-gray-400 mb-4 hover:text-gray-300 transition-colors duration-300">
                Tu socio confiable en soluciones logísticas integrales. Conectamos tu negocio con el mundo.
              </p>
              <div className="flex space-x-4">
                <div
                  className={`w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-500 ${isMobile ? "" : "hover:scale-110"} transition-all duration-300 cursor-pointer`}
                >
                  <span className="text-sm font-bold">f</span>
                </div>
              </div>
            </div>
            <div className={`transform ${isMobile ? "" : "hover:translate-x-2"} transition-transform duration-300`}>
              <h4 className="text-lg font-semibold mb-4 hover:text-blue-400 transition-colors duration-300 flex items-center">
                <Settings className="w-5 h-5 mr-2" />
                Servicios
              </h4>
              <ul className="space-y-2 text-gray-400">
                {[
                  { name: "Transporte de Carga", icon: Truck },
                  { name: "Almacenamiento", icon: Warehouse },
                  { name: "Distribución", icon: MapPin },
                  { name: "Logística Integral", icon: Shield },
                ].map((service, index) => (
                  <li
                    key={index}
                    className={`hover:text-white ${isMobile ? "" : "hover:translate-x-1"} transition-all duration-300 cursor-pointer flex items-center`}
                  >
                    <service.icon className="w-4 h-4 mr-2" />
                    {service.name}
                  </li>
                ))}
              </ul>
            </div>
            <div className={`transform ${isMobile ? "" : "hover:translate-x-2"} transition-transform duration-300`}>
              <h4 className="text-lg font-semibold mb-4 hover:text-blue-400 transition-colors duration-300 flex items-center">
                <Headphones className="w-5 h-5 mr-2" />
                Contacto
              </h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center hover:text-white transition-colors duration-300 group">
                  <Phone
                    className={`h-4 w-4 mr-2 ${isMobile ? "" : "group-hover:rotate-12"} transition-transform duration-300`}
                  />
                  +54 11 XXXX-XXXX
                </li>
                <li className="flex items-center hover:text-white transition-colors duration-300 group">
                  <Mail
                    className={`h-4 w-4 mr-2 ${isMobile ? "" : "group-hover:scale-110"} transition-transform duration-300`}
                  />
                  info@pulquipack.com.ar
                </li>
                <li className="flex items-center hover:text-white transition-colors duration-300 group">
                  <MapPin className="h-4 w-4 mr-2 transition-transform duration-300" />
                  Buenos Aires, Argentina
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p className="hover:text-gray-300 transition-colors duration-300 flex items-center justify-center">
              <Heart className="w-4 h-4 mr-2 text-red-500" />
              &copy; 2024 PULQUIPACK SRL. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(${isMobile ? "20px" : "30px"});
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up ${isMobile ? "0.6s" : "0.8s"} ease-out forwards;
        }
        
        .animation-delay-500 {
          animation-delay: ${isMobile ? "0.3s" : "0.5s"};
        }
        
        .animation-delay-2000 {
          animation-delay: ${isMobile ? "1s" : "2s"};
        }
        
        .animation-delay-4000 {
          animation-delay: ${isMobile ? "2s" : "4s"};
        }

        .hover\:scale-102:hover {
          transform: scale(1.02);
        }
      `}</style>
    </div>
  )
}

"use client"

import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useEffect, useState } from "react"
import { useMobile } from "@/hooks/use-mobile"

export default function ContactPage() {
  const [isVisible, setIsVisible] = useState(false)
  const isMobile = useMobile()

  useEffect(() => {
    setIsVisible(true)
  }, [])

  // Ajustar duración de animaciones según dispositivo
  const transitionDuration = isMobile ? "duration-500" : "duration-1000"
  const hoverScale = isMobile ? "hover:scale-102" : "hover:scale-105"
  const hoverScaleLarge = isMobile ? "hover:scale-105" : "hover:scale-110"

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-sm shadow-sm border-b sticky top-0 z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="flex-shrink-0 transform hover:scale-105 transition-transform duration-300">
                <h1 className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors duration-300">
                  PULQUIPACK
                </h1>
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  href="/"
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-all duration-300 hover:bg-blue-50 rounded-lg"
                >
                  Inicio
                </Link>
                <a
                  href="/#nosotros"
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-all duration-300 hover:bg-blue-50 rounded-lg"
                >
                  Nosotros
                </a>
                <a
                  href="/#servicios"
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-all duration-300 hover:bg-blue-50 rounded-lg"
                >
                  Servicios
                </a>
                <div className="relative group">
                  <button className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-all duration-300 hover:bg-blue-50 rounded-lg flex items-center">
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
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                    >
                      Solicitar Presupuesto
                    </Link>
                    <Link
                      href="/retiros"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                    >
                      Retiros a Domicilio
                    </Link>
                  </div>
                </div>
                <Link
                  href="/seguimiento"
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-all duration-300 hover:bg-blue-50 rounded-lg"
                >
                  Seguimiento
                </Link>
                <span className="text-blue-600 px-3 py-2 text-sm font-medium bg-blue-50 rounded-lg">Contacto</span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0">
          {!isMobile && (
            <>
              <div className="absolute top-10 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
              <div className="absolute bottom-10 right-10 w-72 h-72 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
            </>
          )}
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1
            className={`text-4xl md:text-5xl font-bold mb-4 transform transition-all ${transitionDuration} ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            Contáctanos
          </h1>
          <p
            className={`text-xl text-blue-100 max-w-2xl mx-auto transform transition-all ${transitionDuration} delay-300 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            Estamos aquí para ayudarte con todas tus necesidades logísticas. Ponte en contacto con nuestro equipo de
            expertos.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Phone,
                title: "Teléfono",
                description: "Llámanos para consultas inmediatas",
                primary: "+54 11 XXXX-XXXX",
                primaryLabel: "Línea principal",
                secondary: "+54 9 11 XXXX-XXXX",
                secondaryLabel: "WhatsApp",
                delay: "0",
              },
              {
                icon: Mail,
                title: "Email",
                description: "Envíanos un mensaje",
                primary: "info@pulquipack.com.ar",
                primaryLabel: "Consultas generales",
                secondary: "ventas@pulquipack.com.ar",
                secondaryLabel: "Cotizaciones",
                delay: "100",
              },
              {
                icon: MapPin,
                title: "Ubicación",
                description: "Visítanos en nuestras oficinas",
                primary: "Buenos Aires",
                primaryLabel: "Argentina",
                secondary: "Dirección completa disponible por consulta telefónica",
                secondaryLabel: "",
                delay: "200",
              },
            ].map((contact, index) => (
              <Card
                key={index}
                className={`text-center group hover:shadow-xl transition-all duration-500 transform ${isMobile ? "hover:-translate-y-1 hover:scale-102" : "hover:-translate-y-3 hover:scale-105"} border-0 shadow-lg hover:bg-gradient-to-br hover:from-white hover:to-blue-50 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
                style={{ transitionDelay: `${isMobile ? Number.parseInt(contact.delay) / 2 : contact.delay}ms` }}
              >
                <CardHeader>
                  <div
                    className={`w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 transition-all duration-300 transform ${isMobile ? "" : "group-hover:scale-110 group-hover:rotate-12"}`}
                  >
                    <contact.icon className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <CardTitle className="group-hover:text-blue-600 transition-colors duration-300">
                    {contact.title}
                  </CardTitle>
                  <CardDescription className="group-hover:text-gray-700 transition-colors duration-300">
                    {contact.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                    {contact.primary}
                  </p>
                  <p className="text-sm text-gray-600 mt-2 group-hover:text-gray-700 transition-colors duration-300">
                    {contact.primaryLabel}
                  </p>
                  {contact.secondary && (
                    <>
                      <p className="text-lg font-semibold text-gray-900 mt-2 group-hover:text-blue-600 transition-colors duration-300">
                        {contact.secondary}
                      </p>
                      <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                        {contact.secondaryLabel}
                      </p>
                    </>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Business Hours */}
          <Card
            className={`mb-16 group hover:shadow-xl transition-all duration-500 transform ${hoverScale} border-0 shadow-lg hover:bg-gradient-to-br hover:from-white hover:to-blue-50`}
          >
            <CardHeader className="text-center relative overflow-hidden">
              <div
                className={`w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 transition-all duration-300 transform ${isMobile ? "" : "group-hover:scale-110 group-hover:rotate-12"}`}
              >
                <Clock className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <CardTitle className="group-hover:text-blue-600 transition-colors duration-300">
                Horarios de Atención
              </CardTitle>
              <CardDescription className="group-hover:text-gray-700 transition-colors duration-300">
                Estamos disponibles en los siguientes horarios
              </CardDescription>
              {!isMobile && (
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full opacity-0 group-hover:opacity-10 transform translate-x-10 -translate-y-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-500"></div>
              )}
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
                <div
                  className={`text-center transform ${isMobile ? "" : "group-hover:translate-x-2"} transition-transform duration-300`}
                >
                  <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    Oficina Administrativa
                  </h4>
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                    Lunes a Viernes: 8:00 - 18:00
                  </p>
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                    Sábados: 8:00 - 13:00
                  </p>
                </div>
                <div
                  className={`text-center transform ${isMobile ? "" : "group-hover:translate-x-2"} transition-transform duration-300`}
                >
                  <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    Operaciones
                  </h4>
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                    24 horas, 7 días a la semana
                  </p>
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                    Emergencias y seguimiento
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 hover:text-blue-600 transition-colors duration-300">
              Solicita tu Cotización
            </h2>
            <p className="text-xl text-gray-600 hover:text-gray-800 transition-colors duration-300">
              Completa el formulario y nos pondremos en contacto contigo a la brevedad
            </p>
          </div>

          <Card
            className={`group hover:shadow-xl transition-all duration-500 transform ${hoverScale} border-0 shadow-lg hover:bg-gradient-to-br hover:from-white hover:to-blue-50`}
          >
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2 group">
                    <Label htmlFor="nombre" className="group-hover:text-blue-600 transition-colors duration-300">
                      Nombre Completo *
                    </Label>
                    <Input
                      id="nombre"
                      placeholder="Tu nombre completo"
                      required
                      className={`transition-all duration-300 ${isMobile ? "" : "focus:scale-105"} hover:shadow-md`}
                    />
                  </div>
                  <div className="space-y-2 group">
                    <Label htmlFor="empresa" className="group-hover:text-blue-600 transition-colors duration-300">
                      Empresa
                    </Label>
                    <Input
                      id="empresa"
                      placeholder="Nombre de tu empresa"
                      className={`transition-all duration-300 ${isMobile ? "" : "focus:scale-105"} hover:shadow-md`}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2 group">
                    <Label htmlFor="email" className="group-hover:text-blue-600 transition-colors duration-300">
                      Email *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="tu@email.com"
                      required
                      className={`transition-all duration-300 ${isMobile ? "" : "focus:scale-105"} hover:shadow-md`}
                    />
                  </div>
                  <div className="space-y-2 group">
                    <Label htmlFor="telefono" className="group-hover:text-blue-600 transition-colors duration-300">
                      Teléfono *
                    </Label>
                    <Input
                      id="telefono"
                      placeholder="+54 11 XXXX-XXXX"
                      required
                      className={`transition-all duration-300 ${isMobile ? "" : "focus:scale-105"} hover:shadow-md`}
                    />
                  </div>
                </div>

                <div className="space-y-2 group">
                  <Label htmlFor="servicio" className="group-hover:text-blue-600 transition-colors duration-300">
                    Servicio de Interés
                  </Label>
                  <Select>
                    <SelectTrigger
                      className={`transition-all duration-300 hover:shadow-md ${isMobile ? "" : "focus:scale-105"}`}
                    >
                      <SelectValue placeholder="Selecciona un servicio" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="transporte">Transporte de Carga</SelectItem>
                      <SelectItem value="almacenamiento">Almacenamiento</SelectItem>
                      <SelectItem value="distribucion">Distribución</SelectItem>
                      <SelectItem value="logistica">Logística Integral</SelectItem>
                      <SelectItem value="express">Servicios Express</SelectItem>
                      <SelectItem value="asesoria">Asesoramiento</SelectItem>
                      <SelectItem value="otro">Otro</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2 group">
                  <Label htmlFor="mensaje" className="group-hover:text-blue-600 transition-colors duration-300">
                    Mensaje *
                  </Label>
                  <Textarea
                    id="mensaje"
                    placeholder="Describe tus necesidades logísticas, tipo de carga, destinos, frecuencia, etc."
                    className={`min-h-[120px] transition-all duration-300 ${isMobile ? "" : "focus:scale-105"} hover:shadow-md`}
                    required
                  />
                </div>

                <div className="text-center">
                  <Button
                    size="lg"
                    className={`bg-blue-600 hover:bg-blue-700 transform ${hoverScaleLarge} hover:shadow-xl transition-all duration-300 group`}
                  >
                    <Send
                      className={`mr-2 h-5 w-5 ${isMobile ? "" : "group-hover:translate-x-1"} transition-transform duration-300`}
                    />
                    Enviar Consulta
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 hover:text-blue-600 transition-colors duration-300">
              Nuestra Ubicación
            </h2>
            <p className="text-xl text-gray-600 hover:text-gray-800 transition-colors duration-300">
              Estratégicamente ubicados en Buenos Aires para servir mejor a nuestros clientes
            </p>
          </div>

          <div
            className={`bg-gray-200 rounded-lg h-96 flex items-center justify-center group hover:shadow-xl transition-all duration-500 transform ${hoverScale} overflow-hidden relative`}
          >
            <div
              className={`text-center transform ${isMobile ? "" : "group-hover:scale-110"} transition-transform duration-500`}
            >
              <MapPin
                className={`h-16 w-16 text-gray-400 mx-auto mb-4 group-hover:text-blue-600 ${isMobile ? "" : "group-hover:animate-bounce"} transition-colors duration-300`}
              />
              <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                Mapa interactivo disponible
              </p>
              <p className="text-sm text-gray-500 group-hover:text-gray-600 transition-colors duration-300">
                Buenos Aires, Argentina
              </p>
            </div>
            {!isMobile && (
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            )}
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
              <h3 className="text-2xl font-bold mb-4 hover:text-blue-400 transition-colors duration-300">PULQUIPACK</h3>
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
              <h4 className="text-lg font-semibold mb-4 hover:text-blue-400 transition-colors duration-300">
                Servicios
              </h4>
              <ul className="space-y-2 text-gray-400">
                {["Transporte de Carga", "Almacenamiento", "Distribución", "Logística Integral"].map(
                  (service, index) => (
                    <li
                      key={index}
                      className={`hover:text-white ${isMobile ? "" : "hover:translate-x-1"} transition-all duration-300 cursor-pointer`}
                    >
                      {service}
                    </li>
                  ),
                )}
              </ul>
            </div>
            <div className={`transform ${isMobile ? "" : "hover:translate-x-2"} transition-transform duration-300`}>
              <h4 className="text-lg font-semibold mb-4 hover:text-blue-400 transition-colors duration-300">
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
            <p className="hover:text-gray-300 transition-colors duration-300">
              &copy; 2024 PULQUIPACK SRL. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        .animation-delay-2000 {
          animation-delay: ${isMobile ? "1s" : "2s"};
        }
        
        .hover\:scale-102:hover {
          transform: scale(1.02);
        }
      `}</style>
    </div>
  )
}

"use client"

import { useState } from "react"
import { Search, Package, Truck, MapPin, Clock, CheckCircle, AlertCircle, Phone, Mail } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { useMobile } from "@/hooks/use-mobile"

// Datos de ejemplo para demostración
const trackingData = {
  PP001234567: {
    id: "PP001234567",
    status: "en_transito",
    origin: "Buenos Aires, Argentina",
    destination: "Córdoba, Argentina",
    estimatedDelivery: "2024-06-05",
    currentLocation: "Rosario, Santa Fe",
    weight: "25.5 kg",
    dimensions: "60x40x30 cm",
    service: "Transporte Terrestre",
    driver: "Carlos Mendoza",
    vehicle: "Volvo FH - Patente ABC123",
    timeline: [
      {
        status: "recibido",
        location: "Buenos Aires - Centro de Distribución",
        date: "2024-06-03",
        time: "08:30",
        description: "Paquete recibido y procesado",
        completed: true,
      },
      {
        status: "en_preparacion",
        location: "Buenos Aires - Centro de Distribución",
        date: "2024-06-03",
        time: "10:15",
        description: "Paquete preparado para envío",
        completed: true,
      },
      {
        status: "en_transito",
        location: "Rosario, Santa Fe",
        date: "2024-06-04",
        time: "14:20",
        description: "En tránsito hacia destino",
        completed: true,
      },
      {
        status: "en_distribucion",
        location: "Córdoba - Centro de Distribución",
        date: "2024-06-05",
        time: "09:00",
        description: "Llegada a centro de distribución local",
        completed: false,
      },
      {
        status: "entregado",
        location: "Córdoba, Argentina",
        date: "2024-06-05",
        time: "16:00",
        description: "Entregado al destinatario",
        completed: false,
      },
    ],
  },
  PP001234568: {
    id: "PP001234568",
    status: "entregado",
    origin: "Mendoza, Argentina",
    destination: "San Juan, Argentina",
    estimatedDelivery: "2024-06-03",
    currentLocation: "San Juan, Argentina",
    weight: "12.3 kg",
    dimensions: "40x30x20 cm",
    service: "Servicio Express",
    driver: "María González",
    vehicle: "Mercedes Sprinter - Patente XYZ789",
    timeline: [
      {
        status: "recibido",
        location: "Mendoza - Centro de Distribución",
        date: "2024-06-02",
        time: "09:00",
        description: "Paquete recibido y procesado",
        completed: true,
      },
      {
        status: "en_preparacion",
        location: "Mendoza - Centro de Distribución",
        date: "2024-06-02",
        time: "10:30",
        description: "Paquete preparado para envío express",
        completed: true,
      },
      {
        status: "en_transito",
        location: "En ruta a San Juan",
        date: "2024-06-02",
        time: "11:45",
        description: "En tránsito - Servicio Express",
        completed: true,
      },
      {
        status: "en_distribucion",
        location: "San Juan - Centro de Distribución",
        date: "2024-06-03",
        time: "08:30",
        description: "Llegada a centro de distribución local",
        completed: true,
      },
      {
        status: "entregado",
        location: "San Juan, Argentina",
        date: "2024-06-03",
        time: "14:20",
        description: "Entregado exitosamente - Firmado por: Juan Pérez",
        completed: true,
      },
    ],
  },
}

const statusConfig = {
  recibido: { color: "bg-blue-500", icon: Package, label: "Recibido" },
  en_preparacion: { color: "bg-yellow-500", icon: Clock, label: "En Preparación" },
  en_transito: { color: "bg-orange-500", icon: Truck, label: "En Tránsito" },
  en_distribucion: { color: "bg-purple-500", icon: MapPin, label: "En Distribución" },
  entregado: { color: "bg-green-500", icon: CheckCircle, label: "Entregado" },
}

export default function TrackingPage() {
  const [trackingNumber, setTrackingNumber] = useState("")
  const [trackingResult, setTrackingResult] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const isMobile = useMobile()

  const handleTrack = async () => {
    if (!trackingNumber.trim()) {
      setError("Por favor ingresa un número de seguimiento")
      return
    }

    setIsLoading(true)
    setError("")

    // Simular llamada a API
    setTimeout(() => {
      const result = trackingData[trackingNumber.toUpperCase()]
      if (result) {
        setTrackingResult(result)
        setError("")
      } else {
        setTrackingResult(null)
        setError("Número de seguimiento no encontrado. Verifica el código e intenta nuevamente.")
      }
      setIsLoading(false)
    }, 1500)
  }

  const getStatusBadge = (status) => {
    const config = statusConfig[status]
    return (
      <Badge className={`${config.color} text-white`}>
        <config.icon className="w-3 h-3 mr-1" />
        {config.label}
      </Badge>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
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
                <span className="text-blue-600 px-3 py-2 text-sm font-medium bg-blue-50 rounded-lg">Seguimiento</span>
                <Link
                  href="/contacto"
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-all duration-300 hover:bg-blue-50 rounded-lg"
                >
                  Contacto
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Seguimiento de Envíos</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Rastrea tu paquete en tiempo real y conoce su ubicación exacta en cada momento
          </p>
        </div>
      </section>

      {/* Tracking Form */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="shadow-xl border-0">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-gray-900">Ingresa tu Número de Seguimiento</CardTitle>
              <CardDescription>
                Encuentra tu código de seguimiento en el comprobante de envío o en el email de confirmación
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <Label htmlFor="tracking" className="sr-only">
                    Número de seguimiento
                  </Label>
                  <Input
                    id="tracking"
                    placeholder="Ej: PP001234567"
                    value={trackingNumber}
                    onChange={(e) => setTrackingNumber(e.target.value)}
                    className="text-lg h-12"
                    onKeyPress={(e) => e.key === "Enter" && handleTrack()}
                  />
                </div>
                <Button
                  onClick={handleTrack}
                  disabled={isLoading}
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 h-12 px-8"
                >
                  {isLoading ? (
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  ) : (
                    <Search className="w-5 h-5 mr-2" />
                  )}
                  {isLoading ? "Buscando..." : "Rastrear"}
                </Button>
              </div>

              {error && (
                <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center">
                  <AlertCircle className="w-5 h-5 text-red-500 mr-2" />
                  <span className="text-red-700">{error}</span>
                </div>
              )}

              {/* Demo codes */}
              <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-2">Códigos de prueba:</h4>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setTrackingNumber("PP001234567")}
                    className="px-3 py-1 bg-blue-100 text-blue-700 rounded text-sm hover:bg-blue-200 transition-colors"
                  >
                    PP001234567 (En tránsito)
                  </button>
                  <button
                    onClick={() => setTrackingNumber("PP001234568")}
                    className="px-3 py-1 bg-green-100 text-green-700 rounded text-sm hover:bg-green-200 transition-colors"
                  >
                    PP001234568 (Entregado)
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Tracking Results */}
      {trackingResult && (
        <section className="pb-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Package Info */}
            <div className="grid lg:grid-cols-3 gap-8 mb-8">
              <Card className="lg:col-span-2">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">Información del Envío</CardTitle>
                    {getStatusBadge(trackingResult.status)}
                  </div>
                  <CardDescription>Código: {trackingResult.id}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Origen</h4>
                      <p className="text-gray-600">{trackingResult.origin}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Destino</h4>
                      <p className="text-gray-600">{trackingResult.destination}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Ubicación Actual</h4>
                      <p className="text-gray-600 flex items-center">
                        <MapPin className="w-4 h-4 mr-1 text-blue-600" />
                        {trackingResult.currentLocation}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Entrega Estimada</h4>
                      <p className="text-gray-600">{trackingResult.estimatedDelivery}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Detalles del Paquete</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Peso</h4>
                    <p className="text-gray-600">{trackingResult.weight}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Dimensiones</h4>
                    <p className="text-gray-600">{trackingResult.dimensions}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Servicio</h4>
                    <p className="text-gray-600">{trackingResult.service}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Conductor</h4>
                    <p className="text-gray-600">{trackingResult.driver}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Vehículo</h4>
                    <p className="text-gray-600 text-sm">{trackingResult.vehicle}</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Timeline */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Historial de Seguimiento</CardTitle>
                <CardDescription>Sigue el progreso de tu envío paso a paso</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  {trackingResult.timeline.map((event, index) => {
                    const config = statusConfig[event.status]
                    const isLast = index === trackingResult.timeline.length - 1

                    return (
                      <div key={index} className="relative flex items-start pb-8">
                        {!isLast && (
                          <div
                            className={`absolute left-4 top-8 w-0.5 h-full ${
                              event.completed ? "bg-green-300" : "bg-gray-200"
                            }`}
                          />
                        )}

                        <div
                          className={`relative z-10 flex items-center justify-center w-8 h-8 rounded-full border-2 ${
                            event.completed ? "bg-green-500 border-green-500" : "bg-gray-200 border-gray-300"
                          }`}
                        >
                          <config.icon className={`w-4 h-4 ${event.completed ? "text-white" : "text-gray-500"}`} />
                        </div>

                        <div className="ml-4 flex-1">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                            <h4 className={`font-semibold ${event.completed ? "text-gray-900" : "text-gray-500"}`}>
                              {config.label}
                            </h4>
                            <span className={`text-sm ${event.completed ? "text-gray-600" : "text-gray-400"}`}>
                              {event.date} - {event.time}
                            </span>
                          </div>
                          <p className={`text-sm mt-1 ${event.completed ? "text-gray-600" : "text-gray-400"}`}>
                            {event.description}
                          </p>
                          <p className={`text-sm ${event.completed ? "text-gray-500" : "text-gray-400"}`}>
                            {event.location}
                          </p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Contact Support */}
            <Card className="mt-8">
              <CardContent className="p-6">
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">¿Necesitas ayuda?</h3>
                  <p className="text-gray-600 mb-4">
                    Si tienes alguna pregunta sobre tu envío, no dudes en contactarnos
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button variant="outline" className="flex items-center">
                      <Phone className="w-4 h-4 mr-2" />
                      +54 11 XXXX-XXXX
                    </Button>
                    <Button variant="outline" className="flex items-center">
                      <Mail className="w-4 h-4 mr-2" />
                      seguimiento@pulquipack.com.ar
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      )}
    </div>
  )
}

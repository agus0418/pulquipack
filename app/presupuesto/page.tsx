"use client"

import { useState } from "react"
import {
  MapPin,
  Phone,
  Mail,
  Send,
  Truck,
  Package,
  Calendar,
  Info,
  CheckCircle,
  Clock,
  FileText,
  Shield,
} from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { useMobile } from "@/hooks/use-mobile"

export default function PresupuestoPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const isMobile = useMobile()

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulación de envío
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)

      // Resetear el estado después de 5 segundos
      setTimeout(() => {
        setIsSuccess(false)
      }, 5000)
    }, 2000)
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
                  <button className="text-blue-600 px-3 py-2 text-sm font-medium bg-blue-50 rounded-lg flex items-center">
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
                    <Link href="/presupuesto" className="block px-4 py-2 text-sm text-blue-600 bg-blue-50">
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
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Solicite su Presupuesto</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Complete el siguiente formulario con los datos de su envío y recibirá una cotización personalizada en menos
            de 24 horas
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 mr-2" />
              Respuesta en 24hs
            </div>
            <div className="flex items-center">
              <Shield className="w-5 h-5 mr-2" />
              Información confidencial
            </div>
            <div className="flex items-center">
              <FileText className="w-5 h-5 mr-2" />
              Sin compromiso
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-0 shadow-xl">
            <CardHeader className="text-center border-b pb-6">
              <CardTitle className="text-2xl text-gray-900">Formulario de Cotización</CardTitle>
              <CardDescription>
                Complete los campos para recibir una cotización precisa. Los campos marcados con{" "}
                <span className="text-red-500">*</span> son obligatorios
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              {isSuccess ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">¡Solicitud Enviada Exitosamente!</h3>
                  <p className="text-gray-600 mb-4">
                    Hemos recibido su solicitud de presupuesto. Nuestro equipo comercial se pondrá en contacto con usted
                    dentro de las próximas 24 horas.
                  </p>
                  <p className="text-sm text-gray-500 mb-6">
                    Número de referencia: PP-{Math.random().toString(36).substr(2, 9).toUpperCase()}
                  </p>
                  <Button onClick={() => setIsSuccess(false)} className="bg-blue-600 hover:bg-blue-700">
                    Solicitar otro presupuesto
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Datos del Solicitante */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                      <Info className="w-5 h-5 mr-2 text-blue-600" />
                      Datos del Solicitante
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2 md:col-span-2">
                        <Label htmlFor="nombre_completo">
                          Nombre Completo / Razón Social <span className="text-red-500">*</span>
                        </Label>
                        <Input id="nombre_completo" placeholder="Ingrese su nombre completo o razón social" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">
                          Email <span className="text-red-500">*</span>
                        </Label>
                        <Input id="email" type="email" placeholder="ejemplo@empresa.com" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="telefono">
                          Teléfono <span className="text-red-500">*</span>
                        </Label>
                        <Input id="telefono" placeholder="011-XXXX-XXXX" required />
                      </div>
                    </div>
                  </div>

                  {/* Tipo de Servicio */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                      <Truck className="w-5 h-5 mr-2 text-blue-600" />
                      Tipo de Servicio
                    </h3>
                    <div className="space-y-2">
                      <Label htmlFor="tipo_servicio">
                        Seleccione el tipo de servicio <span className="text-red-500">*</span>
                      </Label>
                      <Select required>
                        <SelectTrigger>
                          <SelectValue placeholder="Seleccione el tipo de servicio" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="entrega_domicilio">Entrega a domicilio</SelectItem>
                          <SelectItem value="puerta_puerta">Puerta a puerta</SelectItem>
                          <SelectItem value="retiro_domicilio">Retiro a domicilio</SelectItem>
                          <SelectItem value="deposito_deposito">Depósito a depósito</SelectItem>
                          <SelectItem value="consultar_otros">Consultar otros servicios</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Origen y Destino */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                      <MapPin className="w-5 h-5 mr-2 text-blue-600" />
                      Origen y Destino
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <h4 className="font-medium text-gray-800">Origen (Retiro)</h4>
                        <div className="space-y-2">
                          <Label htmlFor="origen_provincia">
                            Provincia <span className="text-red-500">*</span>
                          </Label>
                          <Select required>
                            <SelectTrigger>
                              <SelectValue placeholder="Seleccione provincia" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="buenos_aires">Buenos Aires</SelectItem>
                              <SelectItem value="caba">CABA</SelectItem>
                              <SelectItem value="cordoba">Córdoba</SelectItem>
                              <SelectItem value="santa_fe">Santa Fe</SelectItem>
                              <SelectItem value="mendoza">Mendoza</SelectItem>
                              <SelectItem value="tucuman">Tucumán</SelectItem>
                              <SelectItem value="entre_rios">Entre Ríos</SelectItem>
                              <SelectItem value="salta">Salta</SelectItem>
                              <SelectItem value="misiones">Misiones</SelectItem>
                              <SelectItem value="otra">Otra</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="origen_localidad">
                            Localidad <span className="text-red-500">*</span>
                          </Label>
                          <Input id="origen_localidad" placeholder="Ciudad o localidad" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="origen_direccion">Dirección Completa</Label>
                          <Input id="origen_direccion" placeholder="Calle, número, código postal" />
                        </div>
                      </div>

                      <div className="space-y-4">
                        <h4 className="font-medium text-gray-800">Destino (Entrega)</h4>
                        <div className="space-y-2">
                          <Label htmlFor="destino_provincia">
                            Provincia <span className="text-red-500">*</span>
                          </Label>
                          <Select required>
                            <SelectTrigger>
                              <SelectValue placeholder="Seleccione provincia" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="buenos_aires">Buenos Aires</SelectItem>
                              <SelectItem value="caba">CABA</SelectItem>
                              <SelectItem value="cordoba">Córdoba</SelectItem>
                              <SelectItem value="santa_fe">Santa Fe</SelectItem>
                              <SelectItem value="mendoza">Mendoza</SelectItem>
                              <SelectItem value="tucuman">Tucumán</SelectItem>
                              <SelectItem value="entre_rios">Entre Ríos</SelectItem>
                              <SelectItem value="salta">Salta</SelectItem>
                              <SelectItem value="misiones">Misiones</SelectItem>
                              <SelectItem value="otra">Otra</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="destino_localidad">
                            Localidad <span className="text-red-500">*</span>
                          </Label>
                          <Input id="destino_localidad" placeholder="Ciudad o localidad" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="destino_direccion">Dirección Completa</Label>
                          <Input id="destino_direccion" placeholder="Calle, número, código postal" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Detalles de la Mercadería */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                      <Package className="w-5 h-5 mr-2 text-blue-600" />
                      Detalles de la Mercadería
                    </h3>
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="descripcion_mercaderia">Descripción de la Mercadería (Opcional)</Label>
                        <Textarea
                          id="descripcion_mercaderia"
                          placeholder="Describa brevemente qué tipo de mercadería necesita transportar"
                          className="min-h-[80px]"
                        />
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="peso">
                            Peso (kg) <span className="text-red-500">*</span>
                          </Label>
                          <Input id="peso" type="number" placeholder="Ej: 25" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="valor_declarado">Valor Declarado (ARS)</Label>
                          <Input id="valor_declarado" type="number" placeholder="Ej: 50000" />
                        </div>
                      </div>

                      <div>
                        <Label className="text-sm font-medium text-gray-700 mb-3 block">
                          Medidas (cm) <span className="text-red-500">*</span>
                        </Label>
                        <div className="grid grid-cols-3 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="largo" className="text-sm text-gray-600">
                              Largo
                            </Label>
                            <Input id="largo" type="number" placeholder="cm" required />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="ancho" className="text-sm text-gray-600">
                              Ancho
                            </Label>
                            <Input id="ancho" type="number" placeholder="cm" required />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="alto" className="text-sm text-gray-600">
                              Alto
                            </Label>
                            <Input id="alto" type="number" placeholder="cm" required />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Fecha y Horario de Retiro */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                      <Calendar className="w-5 h-5 mr-2 text-blue-600" />
                      Fecha y Horario de Retiro
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="fecha_retiro">Fecha Deseada de Retiro</Label>
                        <Input id="fecha_retiro" type="date" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="horario_retiro">Horario Preferido de Retiro</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Seleccione horario" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="manana">Mañana (8:00 - 12:00)</SelectItem>
                            <SelectItem value="tarde">Tarde (13:00 - 17:00)</SelectItem>
                            <SelectItem value="flexible">Horario Flexible</SelectItem>
                            <SelectItem value="coordinar">A Coordinar</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* Observaciones */}
                  <div className="space-y-2">
                    <Label htmlFor="observaciones">Observaciones Adicionales</Label>
                    <Textarea
                      id="observaciones"
                      placeholder="Incluya cualquier información adicional relevante: características especiales de la mercadería, restricciones de horario, instrucciones especiales, etc."
                      className="min-h-[100px]"
                    />
                  </div>

                  {/* Términos y Condiciones */}
                  <div className="space-y-4">
                    <div className="flex items-start space-x-2">
                      <Checkbox id="terminos" required className="mt-1" />
                      <Label htmlFor="terminos" className="text-sm leading-relaxed">
                        Acepto los{" "}
                        <a href="#" className="text-blue-600 hover:underline">
                          términos y condiciones
                        </a>{" "}
                        del servicio y autorizo el tratamiento de mis datos personales conforme a la{" "}
                        <a href="#" className="text-blue-600 hover:underline">
                          política de privacidad
                        </a>{" "}
                        de PULQUIPACK SRL <span className="text-red-500">*</span>
                      </Label>
                    </div>

                    <div className="flex items-start space-x-2">
                      <Checkbox id="comunicaciones" className="mt-1" />
                      <Label htmlFor="comunicaciones" className="text-sm leading-relaxed">
                        Acepto recibir comunicaciones comerciales y promocionales de PULQUIPACK SRL
                      </Label>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="text-center pt-4">
                    <Button
                      type="submit"
                      size="lg"
                      className="bg-blue-600 hover:bg-blue-700 px-8"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          Enviando solicitud...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-5 w-5" />
                          Solicitar Presupuesto
                        </>
                      )}
                    </Button>
                    <p className="text-sm text-gray-500 mt-2">
                      Recibirá una respuesta dentro de las próximas 24 horas hábiles
                    </p>
                  </div>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">¿Necesita Asesoramiento Personalizado?</h2>
            <p className="text-gray-600 mt-2">
              Nuestro equipo comercial está disponible para brindarle atención personalizada
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Línea Comercial</h3>
                <p className="text-gray-600 mb-2">+54 11 XXXX-XXXX</p>
                <p className="text-sm text-gray-500">Lun a Vie: 8:00 - 18:00</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Email Comercial</h3>
                <p className="text-gray-600 mb-2">ventas@pulquipack.com.ar</p>
                <p className="text-sm text-gray-500">Respuesta en 24hs</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Atención Inmediata</h3>
                <p className="text-gray-600 mb-2">WhatsApp Business</p>
                <p className="text-sm text-gray-500">+54 9 11 XXXX-XXXX</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 p-6 bg-blue-50 rounded-lg text-center">
            <h3 className="font-semibold text-gray-900 mb-2">¿Envíos Urgentes?</h3>
            <p className="text-gray-600 mb-4">
              Para envíos express o situaciones de emergencia, contáctenos directamente por teléfono
            </p>
            <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
              <Phone className="w-4 h-4 mr-2" />
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
            <div className="col-span-2 transform hover:translate-x-2 transition-transform duration-300">
              <h3 className="text-2xl font-bold mb-4 hover:text-blue-400 transition-colors duration-300">PULQUIPACK</h3>
              <p className="text-gray-400 mb-4 hover:text-gray-300 transition-colors duration-300">
                Tu socio confiable en soluciones logísticas integrales. Conectamos tu negocio con el mundo.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-500 hover:scale-110 transition-all duration-300 cursor-pointer">
                  <span className="text-sm font-bold">f</span>
                </div>
              </div>
            </div>
            <div className="transform hover:translate-x-2 transition-transform duration-300">
              <h4 className="text-lg font-semibold mb-4 hover:text-blue-400 transition-colors duration-300">
                Servicios
              </h4>
              <ul className="space-y-2 text-gray-400">
                {["Transporte de Carga", "Almacenamiento", "Distribución", "Logística Integral"].map(
                  (service, index) => (
                    <li
                      key={index}
                      className="hover:text-white hover:translate-x-1 transition-all duration-300 cursor-pointer"
                    >
                      {service}
                    </li>
                  ),
                )}
              </ul>
            </div>
            <div className="transform hover:translate-x-2 transition-transform duration-300">
              <h4 className="text-lg font-semibold mb-4 hover:text-blue-400 transition-colors duration-300">
                Contacto
              </h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center hover:text-white transition-colors duration-300 group">
                  <Phone className="h-4 w-4 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                  +54 11 XXXX-XXXX
                </li>
                <li className="flex items-center hover:text-white transition-colors duration-300 group">
                  <Mail className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform duration-300" />
                  info@pulquipack.com.ar
                </li>
                <li className="flex items-center hover:text-white transition-colors duration-300 group">
                  <MapPin className="h-4 w-4 mr-2 group-hover:bounce transition-transform duration-300" />
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
          animation-delay: 2s;
        }
      `}</style>
    </div>
  )
}

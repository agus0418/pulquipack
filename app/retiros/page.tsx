"use client"

import { useState } from "react"
import {
  MapPin,
  Phone,
  Mail,
  Send,
  Package,
  Calendar,
  Info,
  CheckCircle,
  Clock,
  Shield,
  AlertCircle,
} from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useMobile } from "@/hooks/use-mobile"
import { Navbar } from "@/components/ui/navbar"
import { InfoBadge } from "@/components/ui/info-badge"

export default function RetirosPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const isMobile = useMobile()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
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
      <Navbar isHome={false} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20 md:py-28 relative overflow-hidden flex items-center">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        </div>

        <div className="relative w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-shadow-sm">Solicitud de Retiros a Domicilio</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-12 text-shadow-xs">
            Complete el formulario para programar un retiro de mercadería en su domicilio o empresa
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <InfoBadge icon={CheckCircle} text="Confirmación inmediata" />
            <InfoBadge icon={Shield} text="Servicio seguro" />
            <InfoBadge icon={Clock} text="Retiro en 24-48hs" />
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-0 shadow-xl">
            <CardHeader className="text-center border-b pb-6">
              <CardTitle className="text-2xl text-gray-900">Formulario de Solicitud de Retiro</CardTitle>
              <CardDescription>
                Complete los campos para programar un retiro. Los campos marcados con{" "}
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
                    Hemos recibido su solicitud de retiro. Nuestro equipo de logística se pondrá en contacto con usted
                    para confirmar los detalles.
                  </p>
                  <p className="text-sm text-gray-500 mb-6">
                    Número de referencia: RET-{Math.random().toString(36).substr(2, 9).toUpperCase()}
                  </p>
                  <Button onClick={() => setIsSuccess(false)} className="bg-blue-600 hover:bg-blue-700">
                    Solicitar otro retiro
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

                  {/* Dirección de Retiro */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                      <MapPin className="w-5 h-5 mr-2 text-blue-600" />
                      Dirección de Retiro
                    </h3>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="provincia">
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
                        <Label htmlFor="localidad">
                          Localidad <span className="text-red-500">*</span>
                        </Label>
                        <Input id="localidad" placeholder="Ciudad o localidad" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="direccion">
                          Dirección Completa <span className="text-red-500">*</span>
                        </Label>
                        <Input id="direccion" placeholder="Calle, número, piso, departamento" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="codigo_postal">
                          Código Postal <span className="text-red-500">*</span>
                        </Label>
                        <Input id="codigo_postal" placeholder="Ej: B1675" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="referencias">Referencias para la ubicación</Label>
                        <Input id="referencias" placeholder="Entre calles, puntos de referencia, etc." />
                      </div>
                    </div>
                  </div>

                  {/* Detalles del Envío */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                      <Package className="w-5 h-5 mr-2 text-blue-600" />
                      Detalles del Envío
                    </h3>
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="tipo_envio">
                          Tipo de Envío <span className="text-red-500">*</span>
                        </Label>
                        <Select required>
                          <SelectTrigger>
                            <SelectValue placeholder="Seleccione tipo de envío" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="paqueteria">Paquetería</SelectItem>
                            <SelectItem value="documentacion">Documentación</SelectItem>
                            <SelectItem value="paletizado">Carga Paletizada</SelectItem>
                            <SelectItem value="fragil">Mercadería Frágil</SelectItem>
                            <SelectItem value="otro">Otro</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="cantidad_bultos">
                          Cantidad de Bultos <span className="text-red-500">*</span>
                        </Label>
                        <Input id="cantidad_bultos" type="number" placeholder="Ej: 3" required />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="descripcion">
                          Descripción de la Mercadería <span className="text-red-500">*</span>
                        </Label>
                        <Textarea
                          id="descripcion"
                          placeholder="Describa brevemente qué tipo de mercadería se retirará"
                          className="min-h-[80px]"
                          required
                        />
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="peso">
                            Peso Total Aproximado (kg) <span className="text-red-500">*</span>
                          </Label>
                          <Input id="peso" type="number" placeholder="Ej: 25" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="destino">
                            Destino del Envío <span className="text-red-500">*</span>
                          </Label>
                          <Input id="destino" placeholder="Ciudad, Provincia" required />
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
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label>
                          Urgencia del Retiro <span className="text-red-500">*</span>
                        </Label>
                        <RadioGroup required className="flex flex-wrap gap-6">
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="normal" id="normal" />
                            <Label htmlFor="normal" className="cursor-pointer">
                              Normal (48-72hs)
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="urgente" id="urgente" />
                            <Label htmlFor="urgente" className="cursor-pointer">
                              Urgente (24-48hs)
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="express" id="express" />
                            <Label htmlFor="express" className="cursor-pointer">
                              Express (mismo día)
                            </Label>
                          </div>
                        </RadioGroup>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="fecha_retiro">
                            Fecha Preferida de Retiro <span className="text-red-500">*</span>
                          </Label>
                          <Input id="fecha_retiro" type="date" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="horario_retiro">
                            Horario Preferido <span className="text-red-500">*</span>
                          </Label>
                          <Select required>
                            <SelectTrigger>
                              <SelectValue placeholder="Seleccione horario" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="manana">Mañana (8:00 - 12:00)</SelectItem>
                              <SelectItem value="tarde">Tarde (13:00 - 17:00)</SelectItem>
                              <SelectItem value="flexible">Horario Flexible</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg flex items-start space-x-3">
                        <AlertCircle className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                        <div className="text-sm text-yellow-700">
                          <p className="font-medium mb-1">Importante:</p>
                          <p>
                            Los retiros se realizan de lunes a viernes en horario comercial. Las solicitudes recibidas
                            después de las 15:00hs serán procesadas al siguiente día hábil.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Persona de Contacto */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                      <Phone className="w-5 h-5 mr-2 text-blue-600" />
                      Persona de Contacto en el Lugar de Retiro
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="contacto_nombre">
                          Nombre y Apellido <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="contacto_nombre"
                          placeholder="Nombre de la persona que entregará la mercadería"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="contacto_telefono">
                          Teléfono <span className="text-red-500">*</span>
                        </Label>
                        <Input id="contacto_telefono" placeholder="Teléfono de contacto en el lugar" required />
                      </div>
                    </div>
                  </div>

                  {/* Observaciones */}
                  <div className="space-y-2">
                    <Label htmlFor="observaciones">Observaciones Adicionales</Label>
                    <Textarea
                      id="observaciones"
                      placeholder="Incluya cualquier información adicional relevante para el retiro"
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
                          Solicitar Retiro
                        </>
                      )}
                    </Button>
                    <p className="text-sm text-gray-500 mt-2">
                      Recibirá una confirmación por email una vez procesada su solicitud
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
            <h2 className="text-2xl font-bold text-gray-900">¿Necesita Ayuda con su Retiro?</h2>
            <p className="text-gray-600 mt-2">
              Nuestro equipo de logística está disponible para asistirle con su solicitud
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Línea de Retiros</h3>
                <p className="text-gray-600 mb-2">+54 11 XXXX-XXXX</p>
                <p className="text-sm text-gray-500">Lun a Vie: 8:00 - 17:00</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Email de Retiros</h3>
                <p className="text-gray-600 mb-2">retiros@pulquipack.com.ar</p>
                <p className="text-sm text-gray-500">Respuesta en 2hs</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Retiros Urgentes</h3>
                <p className="text-gray-600 mb-2">WhatsApp Retiros</p>
                <p className="text-sm text-gray-500">+54 9 11 XXXX-XXXX</p>
              </CardContent>
            </Card>
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

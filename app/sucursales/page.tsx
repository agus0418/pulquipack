"use client"

import { useState } from "react"
import { 
  MapPin, 
  Phone, 
  Mail, 
  Building, 
  ExternalLink, 
  Info, 
  Calendar, 
  Clock, 
  Package, 
  Truck, 
  Route, 
  Headphones,
  Users
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Navbar } from "@/components/ui/navbar"

interface Subsucursal {
  nombre: string;
  direccion: string;
  telefono: string;
  horario: string;
  responsable: string;
}

interface Sucursal {
  id: string;
  name: string;
  direccion?: string;
  telefono?: string;
  email: string;
  horario?: string;
  imagen: string;
  sucursales?: Subsucursal[];
}

const sucursales: Sucursal[] = [
  {
    id: "caba",
    name: "Capital Federal",
    direccion: "Hipólito Yrigoyen 350",
    telefono: "+54 11 XXXX-XXXX",
    email: "caba@pulquipacksrl.com.ar",
    horario: "Lunes a Viernes: 8:00 - 18:00\nSábados: 9:00 - 13:00",
    imagen: "/images/sucursal-caba.jpg"
  },
  {
    id: "santa-fe",
    name: "Santa Fe",
    direccion: "Reconquista, Santa Fe",
    telefono: "+54 03482 421536",
    email: "santafe@pulquipacksrl.com.ar",
    horario: "Lunes a Viernes: 8:00 - 18:00\nSábados: 9:00 - 13:00",
    imagen: "/images/sucursal-santafe.jpg"
  },
  {
    id: "gba",
    name: "Buenos Aires (GBA)",
    sucursales: [
      {
        nombre: "San Martin",
        direccion: "Ricardo Balbin (EX RUTA 8) 4702, Buenos Aires",
        telefono: "011-4752-8815",
        horario: "Lun a Vie 09:00 A 19:00hs",
        responsable: "Azar Carlos"
      },
      {
        nombre: "San Martin II",
        direccion: "Av. Pte. Perón 3764, Buenos Aires, Argentina",
        telefono: "011 4768 2529",
        horario: "Lun a Vie 09:00 A 18:00hs",
        responsable: "Mariana Dottavio"
      },
      {
        nombre: "Pacheco",
        direccion: "Hipólito Yrigoyen 2270 – Dep 3 Terminal de Ómnibus, Buenos Aires, Argentina",
        telefono: "011-4740-2168",
        horario: "Lun a Vie 09:00 A 18:00hs - Sab 09:00 A 13:00hs",
        responsable: "Vergara Nélida"
      },
      {
        nombre: "Villa Martelli",
        direccion: "Avda. Laprida 3453, Buenos Aires, Argentina",
        telefono: "011 5740-4940",
        horario: "Lun a Vie 09:00 A 18:00hs - Sab 09:00 A 13:00hs",
        responsable: "Fornaciari Adrián – Barrionuevo Ezequiel"
      }
    ],
    email: "gba@pulquipacksrl.com.ar",
    imagen: "/images/R.jpeg"
  },
  {
    id: "chaco",
    name: "Chaco",
    direccion: "Resistencia, Chaco",
    telefono: "+54 XXXX-XXXXXX",
    email: "chaco@pulquipacksrl.com.ar",
    horario: "Lunes a Viernes: 8:00 - 18:00",
    imagen: "/images/sucursal-chaco.jpg"
  },
  {
    id: "cordoba",
    name: "Córdoba",
    direccion: "Ciudad de Córdoba",
    telefono: "+54 XXXX-XXXXXX",
    email: "cordoba@pulquipacksrl.com.ar",
    horario: "Lunes a Viernes: 8:00 - 18:00",
    imagen: "/images/sucursal-cordoba.jpg"
  },
  {
    id: "corrientes",
    name: "Corrientes",
    direccion: "Ciudad de Corrientes",
    telefono: "+54 XXXX-XXXXXX",
    email: "corrientes@pulquipacksrl.com.ar",
    horario: "Lunes a Viernes: 8:00 - 18:00",
    imagen: "/images/sucursal-corrientes.jpg"
  },
  {
    id: "formosa",
    name: "Formosa",
    direccion: "Ciudad de Formosa",
    telefono: "+54 XXXX-XXXXXX",
    email: "formosa@pulquipacksrl.com.ar",
    horario: "Lunes a Viernes: 8:00 - 18:00",
    imagen: "/images/sucursal-formosa.jpg"
  }
]

export default function SucursalesPage() {
  const [selectedTab, setSelectedTab] = useState("caba")

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
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-shadow-sm">Nuestras Sucursales</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-12 text-shadow-xs">
            Encuentre la sucursal PULQUIPACK más cercana y acceda a nuestros servicios logísticos de calidad.
          </p>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold text-gray-900">Red de Sucursales a Nivel Nacional</h2>
            <p className="mt-3 text-lg text-gray-600 max-w-3xl mx-auto">
              Seleccione una provincia para ver las sucursales disponibles y su información de contacto.
            </p>
          </div>

          <Tabs defaultValue="caba" value={selectedTab} onValueChange={setSelectedTab} className="w-full">
            <div className="overflow-x-auto">
              <TabsList className="mb-8 flex flex-nowrap">
                {sucursales.map((sucursal) => (
                  <TabsTrigger 
                    key={sucursal.id} 
                    value={sucursal.id}
                    className="min-w-[120px] py-2 px-4"
                  >
                    {sucursal.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {sucursales.map((sucursal) => (
              <TabsContent key={sucursal.id} value={sucursal.id} className="mt-6">
                <Card className="overflow-hidden border-0 shadow-lg">
                  <div className="grid md:grid-cols-2">
                    <div className="relative h-64 md:h-full w-full min-h-[240px]">
                      <div className="absolute inset-0 bg-blue-900/20 z-10"></div>
                      <Image
                        src={sucursal.imagen}
                        alt={`Sucursal ${sucursal.name}`}
                        fill
                        className="object-cover"
                        unoptimized
                      />
                    </div>

                    <div className="p-6 md:p-8">
                      <CardTitle className="text-2xl md:text-3xl mb-4 flex items-center text-blue-700">
                        <Building className="w-6 h-6 mr-2 flex-shrink-0" />
                        Sucursal {sucursal.name}
                      </CardTitle>

                      {sucursal.id === 'gba' ? (
                        <div className="space-y-6 mt-4">
                          <p className="text-gray-700 font-medium">Contamos con múltiples sucursales en GBA para su comodidad:</p>
                          
                          {sucursal.sucursales?.map((subsucursal, index) => (
                            <div key={index} className="border-t pt-4 first:border-t-0 first:pt-0">
                              <h4 className="font-semibold text-lg text-blue-600">{subsucursal.nombre}</h4>
                              <div className="space-y-3 mt-3">
                                <div className="flex items-start">
                                  <MapPin className="w-5 h-5 mr-2 text-blue-500 mt-0.5 flex-shrink-0" />
                                  <p className="text-gray-600">{subsucursal.direccion}</p>
                                </div>
                                <div className="flex items-start">
                                  <Phone className="w-5 h-5 mr-2 text-blue-500 mt-0.5 flex-shrink-0" />
                                  <p className="text-gray-600">{subsucursal.telefono}</p>
                                </div>
                                <div className="flex items-start">
                                  <Clock className="w-5 h-5 mr-2 text-blue-500 mt-0.5 flex-shrink-0" />
                                  <p className="text-gray-600">{subsucursal.horario}</p>
                                </div>
                                <div className="flex items-start">
                                  <Users className="w-5 h-5 mr-2 text-blue-500 mt-0.5 flex-shrink-0" />
                                  <p className="text-gray-600">Responsable: {subsucursal.responsable}</p>
                                </div>
                              </div>
                            </div>
                          ))}
                          
                          <div className="flex items-start mt-4">
                            <Mail className="w-5 h-5 mr-3 text-blue-600 mt-0.5 flex-shrink-0" />
                            <div>
                              <h4 className="font-medium text-gray-900">Email</h4>
                              <p className="text-gray-600">{sucursal.email}</p>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="space-y-4 mt-6">
                          <div className="flex items-start">
                            <MapPin className="w-5 h-5 mr-3 text-blue-600 mt-0.5 flex-shrink-0" />
                            <div>
                              <h4 className="font-medium text-gray-900">Dirección</h4>
                              <p className="text-gray-600">{sucursal.direccion}</p>
                            </div>
                          </div>

                          <div className="flex items-start">
                            <Phone className="w-5 h-5 mr-3 text-blue-600 mt-0.5 flex-shrink-0" />
                            <div>
                              <h4 className="font-medium text-gray-900">Teléfono</h4>
                              <p className="text-gray-600">{sucursal.telefono}</p>
                            </div>
                          </div>

                          <div className="flex items-start">
                            <Mail className="w-5 h-5 mr-3 text-blue-600 mt-0.5 flex-shrink-0" />
                            <div>
                              <h4 className="font-medium text-gray-900">Email</h4>
                              <p className="text-gray-600">{sucursal.email}</p>
                            </div>
                          </div>

                          <div className="flex items-start">
                            <Clock className="w-5 h-5 mr-3 text-blue-600 mt-0.5 flex-shrink-0" />
                            <div>
                              <h4 className="font-medium text-gray-900">Horario de atención</h4>
                              <p className="text-gray-600 whitespace-pre-line">{sucursal.horario}</p>
                            </div>
                          </div>
                        </div>
                      )}

                      <div className="mt-8 space-x-3 flex">
                        <Button className="bg-blue-600 hover:bg-blue-700">
                          <Phone className="w-4 h-4 mr-2" />
                          Llamar
                        </Button>
                        <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Ver en mapa
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Servicios Disponibles en Nuestras Sucursales</h2>
            <p className="mt-3 text-lg text-gray-600 max-w-3xl mx-auto">
              Conozca los servicios que puede realizar presencialmente en nuestras oficinas
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Recepción de Paquetes",
                description: "Entregue sus paquetes para envío nacional o internacional en cualquiera de nuestras sucursales.",
                icon: Package
              },
              {
                title: "Retiro de Envíos",
                description: "Retire sus paquetes y encomiendas en nuestras oficinas con su código de seguimiento.",
                icon: Truck
              },
              {
                title: "Asesoramiento",
                description: "Reciba asesoramiento personalizado sobre el mejor servicio para sus necesidades logísticas.",
                icon: Info
              },
              {
                title: "Solicitud de Presupuestos",
                description: "Gestione presupuestos para envíos especiales o de gran volumen directamente en sucursal.",
                icon: Calendar
              },
              {
                title: "Seguimiento de Envíos",
                description: "Consulte el estado de sus envíos y reciba información actualizada sobre su ubicación.",
                icon: Route
              },
              {
                title: "Atención al Cliente",
                description: "Atienda sus consultas, reclamos o sugerencias con nuestro personal especializado.",
                icon: Headphones
              }
            ].map((service, index) => (
              <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <service.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 text-center mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-center">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">¿Necesita más información?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Comuníquese con nuestro centro de atención al cliente y reciba asistencia personalizada
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
              <Phone className="w-5 h-5 mr-2" />
              0810 810 9999
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-blue-500">
              <Mail className="w-5 h-5 mr-2" />
              atencionalcliente@pulquipacksrl.com.ar
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
                  info@pulquipacksrl.com.ar
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
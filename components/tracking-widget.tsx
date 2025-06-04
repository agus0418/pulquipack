"use client"

import { useState } from "react"
import { Search, Package, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

const quickTrackingData = {
  PP001234567: {
    id: "PP001234567",
    status: "en_transito",
    currentLocation: "Rosario, Santa Fe",
    estimatedDelivery: "2024-06-05",
  },
  PP001234568: {
    id: "PP001234568",
    status: "entregado",
    currentLocation: "San Juan, Argentina",
    estimatedDelivery: "2024-06-03",
  },
}

const statusConfig = {
  recibido: { color: "bg-blue-500", label: "Recibido" },
  en_preparacion: { color: "bg-yellow-500", label: "En Preparación" },
  en_transito: { color: "bg-orange-500", label: "En Tránsito" },
  en_distribucion: { color: "bg-purple-500", label: "En Distribución" },
  entregado: { color: "bg-green-500", label: "Entregado" },
}

export default function TrackingWidget() {
  const [trackingNumber, setTrackingNumber] = useState("")
  const [quickResult, setQuickResult] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const handleQuickTrack = async () => {
    if (!trackingNumber.trim()) {
      setError("Ingresa un número de seguimiento")
      return
    }

    setIsLoading(true)
    setError("")

    setTimeout(() => {
      const result = quickTrackingData[trackingNumber.toUpperCase()]
      if (result) {
        setQuickResult(result)
        setError("")
      } else {
        setQuickResult(null)
        setError("Número no encontrado")
      }
      setIsLoading(false)
    }, 1000)
  }

  const getStatusBadge = (status) => {
    const config = statusConfig[status]
    return <Badge className={`${config.color} text-white text-xs`}>{config.label}</Badge>
  }

  return (
    <Card className="w-full max-w-md mx-auto shadow-lg border-0 bg-gradient-to-br from-white to-blue-50">
      <CardHeader className="text-center pb-4">
        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
          <Package className="w-6 h-6 text-blue-600" />
        </div>
        <CardTitle className="text-lg text-gray-900">Seguimiento Rápido</CardTitle>
        <CardDescription className="text-sm">Rastrea tu envío al instante</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex gap-2">
          <Input
            placeholder="PP001234567"
            value={trackingNumber}
            onChange={(e) => setTrackingNumber(e.target.value)}
            className="text-sm"
            onKeyPress={(e) => e.key === "Enter" && handleQuickTrack()}
          />
          <Button
            onClick={handleQuickTrack}
            disabled={isLoading}
            size="sm"
            className="bg-blue-600 hover:bg-blue-700 px-3"
          >
            {isLoading ? (
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
            ) : (
              <Search className="w-4 h-4" />
            )}
          </Button>
        </div>

        {error && (
          <div className="p-3 bg-red-50 border border-red-200 rounded-lg flex items-center text-sm">
            <AlertCircle className="w-4 h-4 text-red-500 mr-2 flex-shrink-0" />
            <span className="text-red-700">{error}</span>
          </div>
        )}

        {quickResult && (
          <div className="p-4 bg-white border border-gray-200 rounded-lg space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-900">{quickResult.id}</span>
              {getStatusBadge(quickResult.status)}
            </div>
            <div className="space-y-2 text-sm">
              <div>
                <span className="text-gray-600">Ubicación: </span>
                <span className="font-medium">{quickResult.currentLocation}</span>
              </div>
              <div>
                <span className="text-gray-600">Entrega estimada: </span>
                <span className="font-medium">{quickResult.estimatedDelivery}</span>
              </div>
            </div>
            <Link href="/seguimiento" className="block">
              <Button variant="outline" size="sm" className="w-full text-xs">
                Ver detalles completos
              </Button>
            </Link>
          </div>
        )}

        <div className="text-center">
          <Link href="/seguimiento">
            <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700 text-xs">
              Seguimiento avanzado →
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}

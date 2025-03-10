'use client'

import dynamic from 'next/dynamic'
import { useState, useEffect } from 'react'
import 'leaflet/dist/leaflet.css'

// Dynamically import Leaflet and react-leaflet components
const MapContainer = dynamic(
  () => import('react-leaflet').then((mod) => mod.MapContainer),
  { ssr: false }
)
const TileLayer = dynamic(
  () => import('react-leaflet').then((mod) => mod.TileLayer),
  { ssr: false }
)
const Marker = dynamic(
  () => import('react-leaflet').then((mod) => mod.Marker),
  { ssr: false }
)
const Popup = dynamic(() => import('react-leaflet').then((mod) => mod.Popup), {
  ssr: false,
})

// Dynamically import Leaflet and create the marker icon
let L: typeof import('leaflet') | undefined
let markerIcon: import('leaflet').Icon | undefined

if (typeof window !== 'undefined') {
  import('leaflet').then((leaflet) => {
    L = leaflet
    markerIcon = new L.Icon({
      iconUrl:
        'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
    })
  })
}

interface MapProps {
  title: string
  description: string
  latitude: number
  longitude: number
}

export default function Map({
  title,
  description,
  latitude,
  longitude,
}: MapProps) {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient || !markerIcon) {
    return <div className="hebrew-text">טוען מפה...</div>
  }

  return (
    <div className="flex flex-col md:flex-row items-center md:items-start gap-6 p-6 bg-white rounded-2xl hebrew-text font-sans">
      {/* Left Side: Title & Description */}
      <div className="w-full md:w-1/2">
        <h2 className="text-2xl font-bold text-gray-800 text-center">
          {title}
        </h2>
        <p className="text-gray-600 mt-2">{description}</p>
      </div>

      {/* Right Side: Map */}
      <div className="w-full md:w-1/2 h-64 md:h-80 rounded-lg overflow-hidden relative">
        <MapContainer
          center={[latitude, longitude]}
          zoom={13}
          className="h-full w-full rounded-lg z-10"
          attributionControl={false}
          scrollWheelZoom={false}
          touchZoom={false}
        >
          <TileLayer url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png" />
          <Marker position={[latitude, longitude]} icon={markerIcon}>
            <Popup>{title}</Popup>
          </Marker>
        </MapContainer>
        <div className="text-[10px] text-gray-600 absolute z-20 -translate-y-full text-center">
          ©
          <a
            href="https://openstreetmap.org/copyright"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-1"
          >
            OpenStreetMap
          </a>
          contributors, tiles by
          <a
            href="https://carto.com/attributions"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-1"
          >
            CARTO
          </a>
          .
        </div>
      </div>
    </div>
  )
}

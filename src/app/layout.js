import '../app/styles/globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'WELLGIX FACILITIES',
  description: 'Landing page de la empresa WellGix Facilites',
  author: 'Giovanni Redondo',
  keywords:['Crudo','Petróleo','Facilidades de superficie','Well Testing','Medición multifásica',
    'Industria petrolera','Pozos en Venezuela','Pozos petroleros','Mantenimiento de pozos',
    'Petrolera ecológica','Operaciones de superficie y mantenimiento','Vida útil de pozos y equipos',
    'Reforma petrolera', 'Reducción de costos mantenimiento', 'Alquiler de maquinaria pesada','Impacto ambiental'] ,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

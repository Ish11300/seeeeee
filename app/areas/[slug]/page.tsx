"use client"

import Link from "next/link"
import { useParams } from "next/navigation"
import { ArrowLeft } from "lucide-react"

// Reordenado en orden alfabético (11 áreas principales)
const areaContent = {
  "after-music": {
    title: "After Music",
    subtitle: "Sello Discográfico Independiente",
    description: "Sello discográfico independiente dedicado a la música electrónica y experimental.",
    fullDescription:
      "After Music es mi sello discográfico que se enfoca en descubrir y promover nuevos talentos en música electrónica y experimental, creando un espacio para la innovación sonora y colaboraciones internacionales.",
    gallery: [
      "Lanzamientos de álbumes",
      "Artistas emergentes",
      "Colaboraciones internacionales",
      "Compilatorios temáticos",
    ],
  },
  "animacion-3d": {
    title: "Animación 3D",
    subtitle: "Movimiento & Efectos Visuales",
    description:
      "Desarrollo de animaciones 3D complejas y efectos visuales impactantes para cine, TV y contenido digital.",
    fullDescription:
      "Creo animaciones 3D de alta calidad y efectos visuales impactantes. Desde animaciones de productos hasta secuencias complejas de efectos especiales, cada proyecto es realizado con técnicas profesionales.",
    gallery: [
      "Animación de personajes",
      "Efectos visuales complejos",
      "Animación de productos",
      "Intros y outros animados",
    ],
  },
  "creacion-videojuegos": {
    title: "Creación de Videojuegos",
    subtitle: "Desarrollo con Unity",
    description:
      "Desarrollo de videojuegos usando Unity con gameplay inmersivo, mecánicas innovadoras y experiencias interactivas.",
    fullDescription:
      "Creo videojuegos completos utilizando Unity como motor de desarrollo. Mi enfoque combina gameplay inmersivo, mecánicas innovadoras y experiencias interactivas que mantienen a los jugadores comprometidos. Trabajo tanto en 2D como en 3D.",
    gallery: [
      "Juegos 2D y 3D",
      "Mecánicas de gameplay innovadoras",
      "Sistemas de físicas y colisiones",
      "Interfaces y menús interactivos",
    ],
  },
  "diseno-visual": {
    title: "Diseño Visual",
    subtitle: "Branding & Comunicación Visual",
    description: "Diseño gráfico y visual de alto impacto para branding, publicidad y comunicación visual estratégica.",
    fullDescription:
      "Creo diseño visual de alto impacto que comunica la esencia de marca de manera estratégica. Mi trabajo abarca desde identidad visual completa (logos, paletas de color) hasta diseño publicitario y material de comunicación integrado.",
    gallery: [
      "Identidad visual y branding",
      "Diseño de logos",
      "Material publicitario",
      "Comunicación visual integrada",
    ],
  },
  "diseno-web": {
    title: "Diseño Web",
    subtitle: "Sitios Modernos e Interactivos",
    description:
      "Diseño y desarrollo de sitios web modernos, responsivos e interactivos con experiencia de usuario optimizada.",
    fullDescription:
      "Creo sitios web de alto impacto que combinan diseño moderno con funcionalidad excepcional. Cada proyecto es optimizado para dispositivos móviles y enfocado en convertir visitantes en clientes.",
    gallery: [
      "Sitios corporativos",
      "Portafolios profesionales",
      "Comercio electrónico",
      "Aplicaciones web interactivas",
    ],
  },
  fotografia: {
    title: "Fotografía",
    subtitle: "Capturando Momentos Impactantes",
    description:
      "Fotografía profesional especializada en retratos, paisajes y fotografía conceptual de alto impacto visual.",
    fullDescription:
      "Mi trabajo en fotografía abarca desde retratos corporativos hasta fotografía conceptual y de paisajes. Cada imagen es compuesta cuidadosamente para transmitir una narrativa visual poderosa.",
    gallery: ["Retratos profesionales", "Fotografía de paisajes", "Fotografía conceptual", "Sesiones de eventos"],
  },
  ilustraciones: {
    title: "Ilustraciones",
    subtitle: "Arte Digital & Tradicional",
    description:
      "Creación de ilustraciones digitales y tradicionales con estilos únicos y completamente personalizados.",
    fullDescription:
      "Desarrollo ilustraciones que comunican tu marca y visión de manera única. Mi trabajo abarca desde ilustración editorial hasta diseño de personajes y concept art.",
    gallery: ["Ilustración editorial", "Diseño de personajes", "Concept art", "Portadas y carátulas"],
  },
  "modelado-3d": {
    title: "Modelado 3D",
    subtitle: "Diseño Tridimensional",
    description: "Modelado tridimensional de personajes, objetos y ambientes con técnicas profesionales.",
    fullDescription:
      "Especializado en crear modelos 3D de alta calidad que pueden ser utilizados en animaciones, videojuegos o impresión 3D. Cada modelo es optimizado y detallado.",
    gallery: ["Modelado de personajes", "Objetos y props", "Ambientes completos", "Modelado para impresión 3D"],
  },
  "produccion-audiovisual": {
    title: "Producción Audiovisual",
    subtitle: "Cine & Contenido de Impacto",
    description:
      "Producción integral de contenido audiovisual de alta calidad desde la preproducción hasta la postproducción.",
    fullDescription:
      "Ofrezco servicios completos de producción audiovisual, incluyendo preproducción, rodaje, edición y postproducción. Cada proyecto es ejecutado con estándares de cine profesional.",
    gallery: [
      "Cortometrajes y documentales",
      "Comerciales publicitarios",
      "Contenido para redes sociales",
      "Grabación de eventos",
    ],
  },
  "produccion-musical": {
    title: "Producción Musical",
    subtitle: "Música, Audio & Composición",
    description:
      "Producción, composición, diseño sonoro y mezcla musical profesional con calidad de estudio. Incluye diseño sonoro para proyectos audiovisuales.",
    fullDescription:
      "Ofrezco servicios completos de producción musical y diseño sonoro desde la composición hasta la masterización final. Trabajo con diversos géneros y estilos, además de crear paisajes sonoros inmersivos, efectos de audio personalizados y diseño acústico para proyectos audiovisuales.",
    gallery: [
      "Composición original",
      "Diseño sonoro para audiovisuales",
      "Mezcla y masterización profesional",
      "Scoring de películas",
    ],
  },
  videomapping: {
    title: "Videomapping",
    subtitle: "Proyecciones Inmersivas",
    description: "Proyecciones mapeadas en 3D para instalaciones, eventos y experiencias inmersivas.",
    fullDescription:
      "Creo experiencias visuales inmersivas usando proyecciones mapeadas en 3D. Perfecto para eventos, instalaciones de arte y espacios comerciales. Cada proyecto es diseñado para generar impacto visual memorables.",
    gallery: ["Instalaciones artísticas", "Eventos corporativos", "Espacios comerciales", "Experiencias inmersivas"],
  },
}

export default function AreaPage() {
  const params = useParams()
  const slug = params.slug as string
  const area = areaContent[slug as keyof typeof areaContent]

  if (!area) {
    return (
      <main className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold">Área no encontrada</h1>
          <Link href="/" className="inline-block text-accent hover:underline">
            Volver al inicio
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Header with Back Button */}
      <header className="border-b border-border/30 bg-card/30 px-4 py-6 sm:px-6 lg:px-8 sticky top-0 z-40">
        <div className="mx-auto max-w-7xl flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2 text-accent hover:text-primary transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span>Volver</span>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 border-b border-border/30">
        <div className="mx-auto max-w-7xl space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            <span className="gradient-text">{area.title}</span>
          </h1>
          <p className="text-2xl text-accent">{area.subtitle}</p>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">{area.description}</p>
        </div>
      </section>

      {/* Description Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 bg-card/30">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold mb-6">Acerca de {area.title}</h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">{area.fullDescription}</p>
        </div>
      </section>

      {/* Gallery / Portfolio Items */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold mb-8">Mi Trabajo en {area.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {area.gallery.map((item, index) => (
              <div
                key={index}
                className="group relative h-64 rounded-xl border border-border/30 bg-card/50 overflow-hidden hover-glow hover:bg-card/80 transition-colors duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-xl font-semibold text-center px-4">{item}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Coming Soon Message */}
          <div className="mt-12 p-8 rounded-xl border border-accent/30 bg-accent/5 text-center">
            <p className="text-lg text-muted-foreground">
              El contenido de esta sección se está actualizando constantemente. Vuelve pronto para ver proyectos
              destacados.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 bg-card/50 border-t border-border/30">
        <div className="mx-auto max-w-7xl text-center space-y-6">
          <h2 className="text-3xl font-bold">¿Interesado en colaborar?</h2>
          <p className="text-lg text-muted-foreground">
            Contáctame para discutir tus proyectos y cómo puedo ayudarte a traer tu visión a la realidad.
          </p>
          <a
            href="mailto:contact@israel.dev"
            className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover-glow"
          >
            Contactarme
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/30 bg-card/30 px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center space-y-4">
            <p className="text-sm text-muted-foreground">
              © 2025 Israel López Hernández. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}

"use client"
import Image from "next/image"
import { SpecialtyCard } from "@/components/specialty-card"

// Reorganizado en orden alfabético (11 áreas principales)
const specialties = [
  {
    id: "animacion-3d",
    title: "Animación 3D",
    description: "Desarrollo de animaciones 3D complejas y efectos visuales para cine, TV y contenido digital.",
    icon: "🎭",
  },
  {
    id: "creacion-videojuegos",
    title: "Creación de Videojuegos",
    description: "Desarrollo de videojuegos usando Unity con gameplay inmersivo y mecánicas innovadoras.",
    icon: "🎮",
  },
  {
    id: "diseno-visual",
    title: "Diseño Visual",
    description: "Diseño gráfico y visual de alto impacto para branding, publicidad y comunicación visual.",
    icon: "✨",
  },
  {
    id: "diseno-web",
    title: "Diseño Web",
    description:
      "Diseño y desarrollo de sitios web modernos, responsivos e interactivos con experiencia de usuario optimizada.",
    icon: "🌐",
  },
  {
    id: "fotografia",
    title: "Fotografía",
    description:
      "Fotografía profesional especializada en retratos, paisajes y fotografía conceptual de alto impacto visual.",
    icon: "📷",
  },
  {
    id: "ilustraciones",
    title: "Ilustraciones",
    description: "Creación de ilustraciones digitales y tradicionales con estilos únicos y personalizados.",
    icon: "🎨",
  },
  {
    id: "modelado-3d",
    title: "Modelado 3D",
    description: "Modelado tridimensional de personajes, objetos y ambientes con técnicas profesionales.",
    icon: "📦",
  },
  {
    id: "produccion-audiovisual",
    title: "Producción Audiovisual",
    description: "Producción integral de contenido audiovisual de alta calidad, desde concepto hasta postproducción.",
    icon: "🎬",
  },
  {
    id: "produccion-musical",
    title: "Producción Musical",
    description: "Producción, composición, diseño sonoro y mezcla musical profesional con calidad de estudio.",
    icon: "🎵",
  },
  {
    id: "videomapping",
    title: "Videomapping",
    description: "Proyecciones mapeadas en 3D para instalaciones, eventos y experiencias inmersivas.",
    icon: "🔆",
  },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md">
        <nav className="mx-auto max-w-7xl flex items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <h1 className="text-xl font-bold gradient-text">Israel López Hernández</h1>
          <div className="flex gap-6">
            <a href="#about" className="text-sm hover:text-accent transition-colors">
              Sobre mí
            </a>
            <a href="#specialties" className="text-sm hover:text-accent transition-colors">
              Áreas
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-5xl md:text-6xl font-bold leading-tight">
                  Israel López <span className="gradient-text">Hernández</span>
                </h2>
                <p className="text-xl text-muted-foreground">Creativo Multidisciplinario</p>
              </div>

              <div className="space-y-4 text-base leading-relaxed">
                <p>
                  Licenciado en Medios Interactivos y Tecnología por la Universidad de Montreal, ubicada en Morelia,
                  Michoacán.
                </p>
                <p>
                  Me especializo en la creación de experiencias audiovisuales inmersivas combinando ilustración, música,
                  diseño sonoro, animación 3D, fotografía y diseño visual.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="space-y-2">
                  <p className="text-3xl font-bold gradient-text">3+</p>
                  <p className="text-sm text-muted-foreground">Años de Experiencia</p>
                </div>
                <div className="space-y-2">
                  <p className="text-3xl font-bold gradient-text">25+</p>
                  <p className="text-sm text-muted-foreground">Proyectos Completados</p>
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-4">
                <a
                  href="#specialties"
                  className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover-glow"
                >
                  Explorar Mis Áreas
                </a>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden border border-border/30 hover-glow">
              <Image
                src="/professional-portrait-israel-lopez-creative.jpg"
                alt="Israel López Hernández - Creativo Multidisciplinario"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="px-4 py-16 sm:px-6 lg:px-8 bg-card/50 border-y border-border/30">
        <div className="mx-auto max-w-7xl">
          <h3 className="text-3xl font-bold mb-8">Acerca de Mí</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-2">
              <h4 className="text-lg font-semibold text-accent">Formación</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Licenciado en Medios Interactivos y Tecnología en la Universidad de Montreal, Morelia, Michoacán.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="text-lg font-semibold text-accent">Pasiones</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Ilustración, música, audiovisuales, animación 3D, fotografía, diseño visual y creación de videojuegos.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="text-lg font-semibold text-accent">Enfoque</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Crear experiencias creativas innovadoras que combinen tecnología, arte y diseño digital.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section id="specialties" className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="space-y-4 mb-12">
            <h2 className="text-4xl md:text-5xl font-bold">Mis Áreas de Especialidad</h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Explora mis principales campos de trabajo y descubre los proyectos que he desarrollado en cada área.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specialties.map((specialty) => (
              <SpecialtyCard key={specialty.id} specialty={specialty} />
            ))}
          </div>
        </div>
      </section>

      {/* After Music - Sello Especial */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/10 to-accent/10 border-y border-primary/30">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-2xl border border-primary/50 bg-primary/5 p-8 md:p-12 space-y-6">
            <div className="space-y-2">
              <p className="text-lg font-semibold text-accent">Mi Sello Discográfico</p>
              <h2 className="text-4xl md:text-5xl font-bold">
                <span className="gradient-text">After Music</span>
              </h2>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Sello discográfico independiente dedicado a descubrir y promover nuevos talentos en música electrónica y
              experimental. After Music es mi espacio para la innovación sonora y colaboraciones internacionales.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
              {[
                "Lanzamientos de álbumes",
                "Artistas emergentes",
                "Colaboraciones internacionales",
                "Compilatorios temáticos",
              ].map((item, idx) => (
                <div key={idx} className="rounded-lg bg-primary/10 p-4 text-center">
                  <p className="text-sm font-semibold">{item}</p>
                </div>
              ))}
            </div>
            <a
              href="/areas/after-music"
              className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover-glow mt-4"
            >
              Ver Sello
            </a>
          </div>
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

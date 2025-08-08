import Navbar from "@/components/NavBar";
import { LocationCard } from "@/components/LocationCard";
import { StacksCard } from "@/components/stack-cards";
import { FeatureProjects } from "@/components/featured-projects";

export default function Home() {
  return (
    <>
      <Navbar />

      <section
        id="inicio"
        className="flex flex-col items-center justify-center min-h-screen px-4 text-center bg-background text-foreground"
      >
        <span className="text-sm text-muted-foreground uppercase tracking-wide mb-2 fade-in-up">
          Software Engineer
        </span>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold fade-in-up">
          Hi, I'm <span className="text-primary">Jazziel Bello</span>
        </h1>
        <p className="mt-4 text-muted-foreground max-w-xl fade-in-up">
          Backend-focused developer with a love for clean code, security, and building smart systems. I craft APIs, dashboards, and automation tools with tech that scales.
        </p>
        <img
          src="/jazziel.jpg"
          alt="Jazziel Bello"
          className="mt-10 w-[300px] h-[300px] rounded-xl object-cover shadow-lg subtle-bounce"
        />
      </section>

      <section
        id="stack"
        className="min-h-screen py-20 bg-background px-4 text-muted-foreground"
      >
        <h2 className="text-3xl font-bold text-center mb-10 text-foreground">Tech Stack</h2>
        <div className="max-w-3xl mx-auto grid gap-6">
          <StacksCard />
        </div>
      </section>

      <section id="proyectos" className="min-h-screen px-4 py-16 bg-background text-foreground">
        <h2 className="text-4xl font-bold text-center mb-12">Featured Projects</h2>
        <FeatureProjects />

        <div className="flex justify-center mt-10">
          <button className="px-6 py-2 border rounded-lg text-sm font-medium border-border hover:bg-muted transition">See all projects</button>
        </div>
      </section>

      <section
        id="educacion"
        className="min-h-screen py-20 px-4 bg-muted text-muted-foreground"
      >
        <h2 className="text-3xl font-bold text-center mb-10 text-foreground">Education & Certifications</h2>
        <div className="max-w-3xl mx-auto grid gap-6">
          <div>
            <strong>Instituto Tecnológico de Tijuana</strong><br />
            Computer Software Engineer — August 2019
          </div>
          <div>
            <strong>Oracle ONE / Alura LATAM</strong><br />
            Backend with Java Certification (Apr - Oct 2023)
          </div>
        </div>
      </section>
      <section id="about" className="min-h-screen px-4 py-16 bg-background text-foreground">
        <h2 className="text-4xl font-bold text-center mb-12">About me</h2>

        <div className="grid gap-6 max-w-6xl mx-auto grid-cols-1 md:grid-cols-2">
          {/* Mapa y stack */}
          <div className="space-y-6">
            <LocationCard />
          </div>

          {/* Info y enlaces */}
          <div className="space-y-6">
            <div className="p-6 border border-border rounded-xl bg-card shadow-md">
              <h3 className="text-lg font-semibold mb-4">🔗 Connect</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="https://github.com/jazziel" target="_blank">GitHub</a></li>
                <li><a href="https://linkedin.com/in/jazziel" target="_blank">LinkedIn</a></li>
                <li><a href="mailto:jazziel@correo.com">Email</a></li>
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 border border-border rounded-xl bg-card shadow-md text-center">
                <p className="text-sm text-muted-foreground mb-1">⏱ Coding hours</p>
                <p className="text-2xl font-bold">1200+</p>
              </div>
              <div className="p-6 border border-border rounded-xl bg-card shadow-md text-center">
                <p className="text-sm text-muted-foreground mb-1">📚 Currently learning</p>
                <img src="/icons/rust.svg" className="w-8 h-8 mx-auto" alt="Rust" />
              </div>
            </div>
          </div>
        </div>
      </section>


      <section
        id="contacto"
        className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground py-20"
      >
        <h2 className="text-3xl font-bold mb-4">Let's Connect</h2>
        <p className="text-muted-foreground mb-6">I'm open to freelance projects, collaborations or full-time roles.</p>
        <a
          href="mailto:jazziel.bello@example.com"
          className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:opacity-90 transition"
        >
          Get in Touch
        </a>
      </section>
    </>
  );
}

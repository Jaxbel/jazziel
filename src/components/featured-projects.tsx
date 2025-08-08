import { projects } from "@/lib/projects";

export function FeatureProjects() {
  return (
    <section id="proyectos" className="min-h-screen px-4 py-16 bg-background text-foreground">
      <h2 className="text-4xl font-bold text-center mb-12">Featured Projects</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {projects.map((project) => (
          <div
            key={project.name}
            className="border border-border rounded-xl p-6 bg-card shadow-md hover:scale-[1.02] transition-transform duration-300"
          >
            <div className="flex gap-2 mb-4">
              {project.tech.map((Icon, idx) => (
                <Icon key={idx} className="w-5 h-5" />
              ))}
            </div>
            <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
            <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
            <a
              href={project.url}
              target="_blank"
              className="inline-block text-sm font-medium text-primary underline"
            >
              {project.actionLabel}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

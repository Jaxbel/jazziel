import { Icons } from "@/components/ui/icons";
import { technologies } from "@/lib/technologies";

export function StacksCard() {
  return (
    <div className="flex flex-col gap-4 overflow-hidden rounded-xl border p-4 lg:p-6 bg-card shadow-md">
      <div className="flex items-center gap-2">
        <Icons.Zap className="size-4" />
        <h2 className="font-light text-sm">Stacks</h2>
      </div>

      <div className="flex flex-wrap gap-4 justify-center">
        {technologies.map((tech) => {
          const Icon = Icons[tech.icon];
          return (
            <a
              key={tech.name}
              href={tech.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center text-xs text-muted-foreground hover:text-primary transition"
            >
              <Icon className="w-8 h-8 mb-1" />
              {tech.name}
            </a>
          );
        })}
      </div>
    </div>
  );
}

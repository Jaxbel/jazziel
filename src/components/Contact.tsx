import type { FC } from 'react'
import { Section } from './Section'

export const Contact: FC = () => (
  <Section
    id="contact"
    size="sm"
    className="bg-background text-foreground flex flex-col items-center justify-center text-center py-16"
  >
    <h2 className="text-4xl font-bold mb-4">Let’s Build Something Great</h2>
    <p className="text-muted-foreground mb-8 max-w-xl">
      Whether you’re looking for a <span className="font-medium text-foreground">freelance developer</span>, 
      a partner for your next <span className="font-medium text-foreground">AI project</span>, 
      or a <span className="font-medium text-foreground">full-time team member</span>, 
      I’m ready to bring your ideas to life.
    </p>
    <a
      href="mailto:jazzieldev@gmail.com"
      className="bg-primary text-primary-foreground px-8 py-3 rounded-xl font-medium hover:opacity-90 shadow-lg hover:shadow-primary/20 transition-all duration-200"
    >
      📩 Let’s Talk
    </a>
  </Section>
)

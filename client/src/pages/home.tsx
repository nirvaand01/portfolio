import { motion } from "framer-motion";
import { ExternalLink, Github, Linkedin, Mail } from "lucide-react";
import avatarImage from "@assets/generated_images/minimalist_abstract_line_art_portrait.png";

const projects = [
  {
    title: "Project Alpha",
    description: "A minimalist dashboard for data visualization using React and D3.",
    link: "#"
  },
  {
    title: "Project Beta",
    description: "E-commerce platform prototype with seamless checkout experience.",
    link: "#"
  },
  {
    title: "Project Gamma",
    description: "Mobile-first task management application built with React Native.",
    link: "#"
  },
  {
    title: "Project Delta",
    description: "AI-powered content generation tool for marketing teams.",
    link: "#"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <main className="container mx-auto px-6 py-24 max-w-4xl">
        
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row gap-12 items-center md:items-start mb-24"
        >
          <div className="shrink-0">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-muted">
              <img 
                src={avatarImage} 
                alt="Profile" 
                className="w-full h-full object-cover"
                data-testid="img-avatar"
              />
            </div>
          </div>
          
          <div className="flex-1 text-center md:text-left space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-primary" data-testid="text-name">
              Hello, I'm Alex.
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg mx-auto md:mx-0" data-testid="text-bio">
              I'm a creative developer passionate about building digital products that look as good as they function. 
              Focusing on minimalist design and clean code.
            </p>
            
            <div className="flex gap-4 justify-center md:justify-start">
              <a href="#" className="p-2 text-muted-foreground hover:text-primary transition-colors" data-testid="link-github">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 text-muted-foreground hover:text-primary transition-colors" data-testid="link-linkedin">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:hello@example.com" className="p-2 text-muted-foreground hover:text-primary transition-colors" data-testid="link-email">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-2xl font-bold" data-testid="heading-projects">Selected Work</h2>
            <div className="h-px bg-border flex-1" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <a 
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block p-6 rounded-lg border border-border bg-card hover:border-primary/50 hover:shadow-sm transition-all duration-300"
                data-testid={`card-project-${index}`}
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors opacity-0 group-hover:opacity-100" />
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </a>
            ))}
          </div>
        </motion.section>

      </main>
    </div>
  );
}

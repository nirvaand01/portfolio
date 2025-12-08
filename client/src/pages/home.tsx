import { motion } from "framer-motion";
import { ExternalLink, Github, Linkedin, Mail } from "lucide-react";
import avatarImage from "@assets/generated_images/minimalist_abstract_line_art_portrait.png";

const projects = [
  {
    title: "IPF Treatment",
    description: "Multi-omics mechanistic target discovery and quantum-guided inhibitor screening for idiopathic pulmonary fibrosis",
    link: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5858602",
    category: "Research"
  },
  {
    title: "PNETs Early Detection",
    description: "Deep learning–based early detection of pancreatic neuroendocrine tumors from imaging data",
    link: "",
    category: "Research"
  },
  {
    title: "CognAlign",
    description: "Cognitive-science–aligned multi-agent frameworks for transparent, bias-aware medical triage",
    link: "https://www.researchsquare.com/article/rs-8272448/v1",
    category: "Research"
  },
  {
    title: "Precision Medicine CRC",
    description: "Convolutional neural networks for colorectal tissue classification in precision oncology",
    link: "https://drive.google.com/file/d/1a3l6iImh6qKuliFYXmV2RaK07-FVkpmB/view?usp=sharing",
    category: "Collaboration"
  },
  {
    title: "Biomedical VLMs",
    description: "Vision–language models for multimodal biomedical image classification and reasoning",
    link: "https://drive.google.com/file/d/1ksuU2lSEysbQXbNYdjX0Ykk2MxvloOfc/view?usp=sharing",
    category: "Collaboration"
  },
  {
    title: "AquaFuse",
    description: "Protein-enabled optimization of water-based lithium-ion battery binder manufacturing",
    link: "https://drive.google.com/file/d/1K5esLNoCI4B51HJsUgQGsYLeUB8E1XZl/view?usp=sharing",
    category: "Collaboration"
  },
  {
    title: "SuperPatch",
    description: "Microneedle biosensor platform for minimally invasive early leukemia mi-RNA biomarker sensing",
    link: "",
    category: "Consulting"
  },
  {
    title: "Dominican Energy",
    description: "Decentralized microgrid strategy for resilient, renewable national energy infrastructure",
    link: "https://drive.google.com/file/d/1k81xtZqPwMNGWr3ksbvDoZ9fNRDlGeX7/view?usp=sharing",
    category: "Consulting"
  },
  {
    title: "Svach",
    description: "AI-powered personalized nutrition and wellness guidance for adolescent populations",
    link: "https://drive.google.com/file/d/1ZL1RpLl1leQwbEQdHvBn-a9tZa0ztYne/view?usp=sharing",
    category: "Product"
  },
  {
    title: "NonTox",
    description: "Browser-based natural language processing system for cyberbullying and toxicity detection",
    link: "https://drive.google.com/file/d/13qpIzsiW0fMypEfnB0BqIn3g-s2_2hlC/view?usp=sharing",
    category: "Product"
  }
];

const getCategoryStyles = (category: string) => {
  switch (category) {
    case "Research":
      return "bg-red-50 text-red-700 border-red-100";
    case "Collaboration":
      return "bg-blue-50 text-blue-700 border-blue-100";
    case "Consulting":
      return "bg-green-50 text-green-700 border-green-100";
    case "Product":
      return "bg-purple-50 text-purple-700 border-purple-100";
    default:
      return "bg-muted text-muted-foreground";
  }
};

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
              Researcher and developer working at the intersection of AI, biotechnology, and sustainable energy.
              Building tools for the future of healthcare and infrastructure.
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
                href={project.link || undefined}
                target={project.link ? "_blank" : undefined}
                rel={project.link ? "noopener noreferrer" : undefined}
                className={`group block p-6 rounded-lg border border-border bg-card transition-all duration-300 ${project.link ? 'hover:border-primary/50 hover:shadow-sm cursor-pointer' : 'opacity-80 cursor-default'}`}
                data-testid={`card-project-${index}`}
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="space-y-3">
                    <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full border ${getCategoryStyles(project.category)}`}>
                      {project.category}
                    </span>
                    <h3 className={`text-xl font-semibold transition-colors ${project.link ? 'group-hover:text-primary' : ''}`}>
                      {project.title}
                    </h3>
                  </div>
                  {project.link && (
                    <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors opacity-0 group-hover:opacity-100" />
                  )}
                </div>
                <p className="text-muted-foreground leading-relaxed text-sm">
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

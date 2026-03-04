import { motion } from "framer-motion";
import { ExternalLink, Github, Linkedin, Mail } from "lucide-react";
import avatarImage from "@assets/generated_images/minimalist_abstract_line_art_portrait.png";

const projects = [
  {
    title: "Mechanistics-Driven IPF Therapeutics",
    description:
      "Multi-omics mechanistic target discovery and quantum-guided inhibitor screening for idiopathic pulmonary fibrosis",
    link: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5858602",
    category: "Research",
  },
  {
    title: "PNETs Early Detection",
    description:
      "Deep learning–based early detection of pancreatic neuroendocrine tumors from imaging data",
    link: "https://www.techrxiv.org/users/909446/articles/1283452",
    category: "Research",
  },
  {
    title: "CognAlign",
    description:
      "Cognitive-science–aligned multi-agent frameworks for transparent, bias-aware medical triage",
    link: "https://www.researchsquare.com/article/rs-8272448/v1",
    category: "Research",
  },
  {
    title: "Precision Medicine CRC",
    description:
      "Convolutional neural networks for colorectal tissue classification in precision oncology",
    link: "https://drive.google.com/file/d/1a3l6iImh6qKuliFYXmV2RaK07-FVkpmB/view?usp=sharing",
    category: "Collaboration",
  },
  {
    title: "Biomedical VLMs",
    description:
      "Vision–language models for multimodal biomedical image classification and reasoning",
    link: "https://drive.google.com/file/d/1ksuU2lSEysbQXbNYdjX0Ykk2MxvloOfc/view?usp=sharing",
    category: "Collaboration",
  },
  {
    title: "AquaFuse",
    description:
      "Protein-enabled optimization of water-based lithium-ion battery binder manufacturing",
    link: "https://drive.google.com/file/d/1K5esLNoCI4B51HJsUgQGsYLeUB8E1XZl/view?usp=sharing",
    category: "Consulting",
  },
  {
    title: "SuperPatch",
    description:
      "Microneedle biosensor platform for minimally invasive early leukemia mi-RNA biomarker sensing",
    link: "https://superpatch.netlify.app/",
    category: "Collaboration",
  },
  {
    title: "Dominican Energy",
    description:
      "Decentralized microgrid strategy for resilient, renewable national energy infrastructure",
    link: "https://drive.google.com/file/d/1k81xtZqPwMNGWr3ksbvDoZ9fNRDlGeX7/view?usp=sharing",
    category: "Consulting",
  },
  {
    title: "Svach",
    description:
      "AI-powered personalized nutrition and wellness guidance for adolescent populations",
    link: "https://drive.google.com/file/d/1ZL1RpLl1leQwbEQdHvBn-a9tZa0ztYne/view?usp=sharing",
    category: "Product",
  },
  {
    title: "NonTox",
    description:
      "Browser-based natural language processing system for cyberbullying and toxicity detection",
    link: "https://drive.google.com/file/d/13qpIzsiW0fMypEfnB0BqIn3g-s2_2hlC/view?usp=sharing",
    category: "Product",
  },
];

const awards = [
  {
    title: "Gold Medalist - IRIS National Fair 2026",
    description: "Awarded a Gold Medal at the IRIS National Fair, India’s premier national science and engineering competition, for research on Idiopathic Pulmonary Fibrosis. The project was selected among 120 finalists from over 6,000 nationwide registrations and ranked among the top 30 projects nationally. Finalists were further shortlisted for national mentorship camps, from which 20 teams will be selected to represent India at the Regeneron International Science and Engineering Fair 2026.",
  },
  {
    title: "Global Champion Team - MIT SHPE Science and Engineering Competition",
    description: "Selected as 1st Place Global Champions out of 300+ participants, from 70+ schools across 20+ countries. Competed in a rigorous advanced entrance exam covering physics, chemistry, biology, and engineering, led a live engineering pitch where our team designed and presented a sustainable decentralised energy solution for the Dominican Republic's overloaded energy system.",
  },
  {
    title: "Topper - SilverZone International Informatics Olympiad (IIO)",
    description: "Achieved top ranks in the IIO, ranking 1st in school, earned the 24th highest score in my state, and placed among the top 80 students in South India.",
  },
  {
    title: "Finalist - IRIS National Fair 2025 & ISEF Semifinalist",
    description: "Conducted research on the implementation of Deep Learning Model Frameworks for detecting Pancreatic Neuroendocrine Tumors (a subset of pancreatic cancer); the project was shortlisted for the All India National Science Fair(2% acceptance rate), leading to recognition as an International Science and Engineering Fair (ISEF) Semifinalist.",
  },
  {
    title: "Thalir Innovation Fair - Science and Tech Exhibition",
    description: "Presented a machine learning - based solution to address cyberbullying at the state science fair; placed 4th among 50+ participating students and teams.",
  },
];

const experiences = [
  {
    role: "Research Intern",
    company: "Visual Learning and Intelligence Lab (VIGIL) - IIT Hyderabad",
    description: "Working on vision-language model pipelines for improving autonomous vehicles, focusing on visual encoders, cross-modal alignment, and evaluation. Implemented Visual Question Answering (VQA), scene description, and object counting tasks, including experiments under transitional weather conditions, achieving strong result metrics relative to peers. I further explored medical adaptation through pathology-based VQA, analyzing multimodal reasoning over histopathology images under limited and noisy annotations.",
  },
  {
    role: "Researcher",
    company: "Augmented Health Systems Lab - Ashoka University",
    description: "Conducted research under Dr. Rintu Kutum and Mr. Gautam Ahuja in Artificial Intelligence, Machine Learning, and Biomedical Imaging. Exploring the integration of deep learning architectures for the early detection of Pancreatic Neuroendocrine Tumors, a rare subtype of Pancreatic Cancer accounting for less than 2% of pancreatic cancer.",
  },
  {
    role: "AI Engineer Intern",
    company: "AI Planet",
    description: "Worked on a fast-paced startup engineering team building AI agents and internal tools, contributing to production workflows for clients in healthcare and finance. Led migration of a multi-component AI agent use case interface under tight deadlines for a demo, gaining hands-on experience deploying real world AI solutions in a high-stakes environment.",
  },
  {
    role: "Participant",
    company: "Stanford AI4ALL",
    description: "Selected as one out of 30 students(4% acceptance) for a summer program at Stanford University. Collaborated with Stanford graduate mentors & peers to explore advanced AI/ML/DL concepts, with a focus on medical AI. Developed a project using Vision Language Models for Biomedical Image Analysis, implementing BiomedCLIP for the Zero-Shot Classification of diseases from datasets such as PneumoniaMNIST.",
  },
  {
    role: "Alumnus",
    company: "The Knowledge Society",
    description: "Selected with a 10% acceptance rate to join a global accelerator program for high school innovators. Studied applications of numerous emerging technologies, participated in ideation and build hackathons, and contributed to consulting projects with executives from IKEA and Maverick BioMetals. Led and contributed to projects on Quantum AI for drug discovery as well as less-invasive diagnostics for leukaemia.",
  },
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
            <h1
              className="text-4xl md:text-5xl font-bold tracking-tight text-primary"
              data-testid="text-name"
            >
              Hello, I'm Nirvaan.
            </h1>
            <p
              className="text-lg text-muted-foreground leading-relaxed max-w-lg mx-auto md:mx-0"
              data-testid="text-bio"
            >
              Researcher and developer working at the intersection of AI,
              biomedical science, and human-centric design for positive and
              tangible societal impacts.
            </p>

            <div className="flex gap-4 justify-center md:justify-start">
              <a
                href="https://www.linkedin.com/in/nirvaanduggirala/"
                className="p-2 text-muted-foreground hover:text-primary transition-colors"
                data-testid="link-linkedin"
                target="_blank"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:duggiralanirvaan@gmail.com"
                className="p-2 text-muted-foreground hover:text-primary transition-colors"
                data-testid="link-email"
                target="_blank"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/nirvaand01"
                className="p-2 text-muted-foreground hover:text-primary transition-colors"
                data-testid="link-github"
                target="_blank"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Experience Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-24"
        >
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-2xl font-bold" data-testid="heading-experience">
              Experience
            </h2>
            <div className="h-px bg-border flex-1" />
          </div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative pl-8 before:absolute before:left-0 before:top-2 before:bottom-0 before:w-px before:bg-border"
                data-testid={`row-experience-${index}`}
              >
                <div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-primary" />
                <div className="flex flex-col gap-1 mb-4">
                  <h3 className="text-xl font-bold text-foreground">
                    {exp.role}
                  </h3>
                  <p className="text-primary font-medium">{exp.company}</p>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Projects Grid */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-24"
        >
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-2xl font-bold" data-testid="heading-projects">
              Selected Work
            </h2>
            <div className="h-px bg-border flex-1" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <a
                key={index}
                href={project.link || undefined}
                target={project.link ? "_blank" : undefined}
                rel={project.link ? "noopener noreferrer" : undefined}
                className={`group block p-6 rounded-lg border border-border bg-card transition-all duration-300 ${project.link ? "hover:border-primary/50 hover:shadow-sm cursor-pointer" : "opacity-80 cursor-default"}`}
                data-testid={`card-project-${index}`}
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="space-y-3">
                    <span
                      className={`inline-block px-3 py-1 text-xs font-medium rounded-full border ${getCategoryStyles(project.category)}`}
                    >
                      {project.category}
                    </span>
                    <h3
                      className={`text-xl font-semibold transition-colors ${project.link ? "group-hover:text-primary" : ""}`}
                    >
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

        {/* Awards Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-2xl font-bold" data-testid="heading-awards">
              Awards & Recognition
            </h2>
            <div className="h-px bg-border flex-1" />
          </div>

          <div className="grid grid-cols-1 gap-8">
            {awards.map((award, index) => (
              <div
                key={index}
                className="group space-y-2"
                data-testid={`card-award-${index}`}
              >
                <h3 className="text-lg font-bold group-hover:text-primary transition-colors">
                  {award.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm italic">
                  {award.description}
                </p>
              </div>
            ))}
          </div>
        </motion.section>
      </main>
    </div>
  );
}

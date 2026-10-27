import { useRef, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import {
  ExternalLink, Github, Linkedin, Mail, MapPin, Calendar, Award,
  FlaskConical, Brain, ScanEye, Microscope, Cpu, Bot, Rocket, GraduationCap,
  type LucideIcon,
} from "lucide-react";
import avatarImage from "@assets/generated_images/avatar.webp";

const awards = [
  {
    title: "Gold Medalist - IRIS National Fair 2026",
    date: "2026",
    description: "Awarded a Gold Medal at the IRIS National Fair, India’s premier national science and engineering competition, for research on Idiopathic Pulmonary Fibrosis. The project was selected among <strong class='text-foreground font-bold'>120 finalists</strong> from over <strong class='text-foreground font-bold'>6,000 nationwide registrations</strong> and ranked among the <strong class='text-foreground font-bold'>top 30 projects</strong> nationally. Finalists were further shortlisted for national mentorship camps, from which <strong class='text-foreground font-bold'>20 teams</strong> will be selected to represent India at the Regeneron International Science and Engineering Fair 2026.",
  },
  {
    title: "Silver Medalist - Eskom Expo International Science Fair",
    date: "2026",
    description: "Following the IRIS gold medal, shortlisted to represent <strong class='text-foreground font-bold'>Team India</strong> at the Eskom Expo International Science Fair in Johannesburg, South Africa, as one of <strong class='text-foreground font-bold'>four projects</strong> selected from <strong class='text-foreground font-bold'>6,000+ national entries</strong>. Competed among <strong class='text-foreground font-bold'>340 finalists</strong> from <strong class='text-foreground font-bold'>11 countries</strong> and won a <strong class='text-foreground font-bold'>Silver Medal</strong> in the Biomedical Sciences category out of 30+ participants.",
  },
  {
    title: "3x Finalist - IRIS National Fair & Honorable Mention + 2x Finalist - INSEF",
    date: "2024 - 2026",
    description: "Selected as a finalist at the IRIS National Fair <strong class='text-foreground font-bold'>three times</strong>, for research on pancreatic neuroendocrine tumor detection, cognitive-science-aligned medical triage (CognAlign), and Idiopathic Pulmonary Fibrosis. Also recognized at the Indian National Science & Engineering Fair (INSEF) as a <strong class='text-foreground font-bold'>two-time finalist</strong> and <strong class='text-foreground font-bold'>Honorable Mention</strong> recipient.",
  },
  {
    title: "Global Champion Team - MIT SHPE Science and Engineering Competition",
    date: "2025",
    description: "Selected as <strong class='text-foreground font-bold'>1st Place Global Champions</strong> out of <strong class='text-foreground font-bold'>300+ participants</strong>, from <strong class='text-foreground font-bold'>70+ schools</strong> across <strong class='text-foreground font-bold'>20+ countries</strong>. Competed in a rigorous advanced entrance exam covering physics, chemistry, biology, and engineering, led a live engineering pitch where our team designed and presented a sustainable decentralised energy solution for the Dominican Republic's overloaded energy system.",
  },
  {
    title: "1st Place - American Mathematics Competition (AMC) 12",
    date: "2025",
    description: "Achieved a <strong class='text-foreground font-bold'>first place rank</strong> for both <strong class='text-foreground font-bold'>AMC 12A</strong> and <strong class='text-foreground font-bold'>AMC 12B</strong> in the 2025-2026 examination cycle.",
  },
  {
    title: "Distinction - CEMC Fermat Contest",
    date: "2026",
    description: "Achieved <strong class='text-foreground font-bold'>distinction</strong> in the 2026 Fermat Contest organised by the Centre for Education in Mathematics and Computing (CEMC), University of Waterloo.",
  },
  {
    title: "Distinction - Avogadro Chemistry Exam",
    date: "2026",
    description: "Achieved <strong class='text-foreground font-bold'>distinction</strong> in the 2026 Avogadro Chemistry Exam organised by the University of Waterloo.",
  },
  {
    title: "Topper - SilverZone International Informatics Olympiad (IIO)",
    date: "2024",
    description: "Achieved top ranks in the IIO, ranking <strong class='text-foreground font-bold'>1st in school</strong>, earned the <strong class='text-foreground font-bold'>24th highest score</strong> in my state, and placed among the <strong class='text-foreground font-bold'>top 80 students</strong> in South India.",
  },
  {
    title: "Thalir Innovation Fair - Science and Tech Exhibition",
    date: "2023",
    description: "Placed <strong class='text-foreground font-bold'>4th</strong> at a state-level science fair and entrepreneurship competition with <strong class='text-foreground font-bold'>50+ participants and teams</strong> by showcasing a machine learning-based solution to detect and combat cyberbullying.",
  },
];

type Experience = {
  role: string;
  company: string;
  type?: string;
  startDate: string;
  endDate: string;
  location?: string;
  icon: LucideIcon;
  description: string;
};

const experiences: Experience[] = [
  {
    role: "Research Assistant",
    company: "National Institute of Pharmaceutical Education and Research (NIPER)",
    startDate: "Oct 2025",
    endDate: "Present",
    location: "Hyderabad, Telangana, India",
    icon: FlaskConical,
    description: "Applying computational, statistical, and biochemical approaches to the diagnosis and treatment of Idiopathic Pulmonary Fibrosis (IPF), a rare lung disease with no known cause or cure. Identified and experimentally validated novel biomarkers and therapeutic targets driving disease onset and persistence, and discovered selective candidate drug molecules using quantum machine learning and computational chemistry, validated through molecular docking and dynamics.",
  },
  {
    role: "Founder and Researcher",
    company: "CognAlign",
    startDate: "Sep 2025",
    endDate: "Present",
    icon: Brain,
    description: "Founded and led research on a modular, multi-agent medical triage system combining computer science and cognitive science to improve transparency, reduce bias, and support emergency decision-making. Integrated machine learning and small language models into low-latency medical report explanation and risk-analysis tools for large-scale medical camps serving rural communities. Authored a research paper recognized as an IRIS National finalist.",
  },
  {
    role: "Research Assistant",
    company: "Indian Institute of Technology Hyderabad",
    startDate: "Apr 2025",
    endDate: "Present",
    location: "Hyderabad, Telangana, India",
    icon: ScanEye,
    description: "Working on vision-language model pipelines for improving autonomous vehicles, focusing on visual encoders, cross-modal alignment, and evaluation. Implemented Visual Question Answering (VQA), scene description, and object counting tasks, including experiments under transitional weather conditions, achieving strong result metrics relative to peers. Also explored medical adaptation through pathology-based VQA, analyzing multimodal reasoning over histopathology images under limited and noisy annotations.",
  },
  {
    role: "Research Assistant",
    company: "Ashoka University",
    startDate: "Jul 2024",
    endDate: "Present",
    location: "Remote",
    icon: Microscope,
    description: "Explored the integration of deep learning architectures for the early detection of Pancreatic Neuroendocrine Tumors, a rare subtype of Pancreatic Cancer accounting for less than 2% of pancreatic cancer. Also working with single cell biology and transcriptomics to investigate cell-specific mechanisms and molecular pathways involved in liver fibrosis.",
  },
  {
    role: "Hardware & Software Intern",
    company: "Avinya NeuroTech",
    type: "Internship",
    startDate: "Jun 2026",
    endDate: "Jul 2026",
    icon: Cpu,
    description: "Worked across machine learning and hardware engineering for medical-grade, indigenous AI-powered neuro and cardio monitoring devices. Designed and soldered EEG and ECG PCBs from scratch, covering schematics, signal amplification, analog-to-digital conversion, and power protection, and integrated communication protocols for signal acquisition. Built ML models for EEG signal classification on raw neural data and researched global medical device regulatory standards.",
  },
  {
    role: "AI Engineer Intern",
    company: "AI Planet",
    type: "Internship",
    startDate: "May 2025",
    endDate: "Oct 2025",
    location: "Hyderabad, Telangana, India",
    icon: Bot,
    description: "Worked on a fast-paced startup engineering team building AI agents and internal tools, contributing to production workflows for clients in healthcare and finance. Built and debugged 25+ Agentic AI use cases, alongside rigorously testing UI/UX components of products. Led migration of a multi-component AI agent use case interface under tight deadlines for a demo, and explored projects involving MNC clients.",
  },
  {
    role: "Innovator",
    company: "The Knowledge Society (TKS)",
    startDate: "Sep 2024",
    endDate: "Jun 2025",
    location: "Global",
    icon: Rocket,
    description: "Selected with a 10% acceptance rate to join a global accelerator program for high school innovators. Studied applications of numerous emerging technologies, participated in ideation and build hackathons, and contributed to consulting projects with executives from IKEA and Maverick BioMetals. Led and contributed to projects on Quantum AI for drug discovery as well as less-invasive diagnostics for leukaemia.",
  },
  {
    role: "Participant at Stanford AI4ALL",
    company: "Stanford Institute for Human-Centered Artificial Intelligence (HAI)",
    type: "Internship",
    startDate: "Jul 2024",
    endDate: "Jul 2024",
    location: "Remote",
    icon: GraduationCap,
    description: "Collaborated with Stanford graduate mentors & peers to explore advanced AI/ML/DL concepts, with a focus on medical AI. Developed a project using Vision Language Models for Biomedical Image Analysis, implementing BiomedCLIP for the Zero-Shot Classification of diseases from datasets such as PneumoniaMNIST.",
  },
];

type Project = {
  title: string;
  description: string;
  link: string;
  category: string;
  note?: string;
};

const projects: Project[] = [
  {
    title: "Mechanistics-Driven IPF Therapeutics",
    description:
      "Multi-omics mechanistic target discovery and quantum-guided inhibitor screening for idiopathic pulmonary fibrosis",
    link: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5858602",
    category: "Research",
    note: "Early preprint · since revised",
  },
  {
    title: "PNETs Early Detection",
    description:
      "Deep learning–based early detection of pancreatic neuroendocrine tumors from imaging data",
    link: "https://www.techrxiv.org/users/909446/articles/1283452",
    category: "Research",
    note: "Early preprint · since revised",
  },
  {
    title: "CognAlign",
    description:
      "Cognitive-science–aligned multi-agent frameworks for transparent, bias-aware medical triage",
    link: "https://www.researchsquare.com/article/rs-8272448/v1",
    category: "Research",
    note: "Early preprint · since revised",
  },
  {
    title: "Precision Medicine CRC",
    description:
      "Convolutional neural networks for colorectal tissue classification in precision oncology",
    link: "/papers/crc.pdf",
    category: "Collaboration",
  },
  {
    title: "Biomedical VLMs",
    description:
      "Vision–language models for multimodal biomedical image classification and reasoning",
    link: "/papers/vlms.pdf",
    category: "Collaboration",
  },
  {
    title: "SuperPatch",
    description:
      "Microneedle biosensor platform for minimally invasive early leukemia mi-RNA biomarker sensing",
    link: "https://superpatch.netlify.app/",
    category: "Collaboration",
  },
  {
    title: "AquaFuse",
    description:
      "Protein-enabled optimization of water-based lithium-ion battery binder manufacturing",
    link: "/papers/aquafuse.pdf",
    category: "Consulting",
  },
  {
    title: "Dominican Energy",
    description:
      "Decentralized microgrid strategy for resilient, renewable national energy infrastructure",
    link: "/papers/dominican-energy.pdf",
    category: "Consulting",
  },
  {
    title: "Svach",
    description:
      "AI-powered personalized nutrition and wellness guidance for adolescent populations",
    link: "/papers/svach.pdf",
    category: "Product",
  },
  {
    title: "NonTox",
    description:
      "Browser-based natural language processing system for cyberbullying and toxicity detection",
    link: "/papers/nontox.pdf",
    category: "Product",
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

const formatExperienceDate = (startDate: string, endDate: string) => {
  const start = new Date(startDate);
  const end = endDate === "Present" ? new Date() : new Date(endDate);
  
  const y1 = start.getFullYear();
  const m1 = start.getMonth();
  const y2 = end.getFullYear();
  const m2 = end.getMonth();
  
  let totalMonths = (y2 - y1) * 12 + (m2 - m1) + 1; // +1 to make inclusive
  if (totalMonths <= 0) totalMonths = 1;
  
  const yrs = Math.floor(totalMonths / 12);
  const mos = totalMonths % 12;
  
  let duration = [];
  if (yrs > 0) duration.push(`${yrs} yr${yrs > 1 ? 's' : ''}`);
  if (mos > 0) duration.push(`${mos} mo${mos > 1 ? 's' : ''}`);
  
  return `${startDate} - ${endDate} • ${duration.join(' ')}`;
};

function ExperienceTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 75%", "end 60%"],
  });
  const lineScale = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });

  return (
    <div ref={containerRef} className="relative">
      {/* Base track + scroll-linked progress line */}
      <div className="absolute left-[19px] top-2 bottom-2 w-px bg-border" />
      <motion.div
        className="absolute left-[19px] top-2 bottom-2 w-px bg-primary origin-top"
        style={{ scaleY: lineScale }}
      />

      <div className="space-y-6">
        {experiences.map((exp, index) => {
          const isCurrent = exp.endDate === "Present";
          const Icon = exp.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -15% 0px" }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="group relative pl-14"
              data-testid={`row-experience-${index}`}
            >
              {/* Timeline marker */}
              <motion.div
                initial={{ scale: 0.6, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, margin: "0px 0px -15% 0px" }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="absolute left-0 top-4 w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center text-primary z-10 transition-all duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground"
              >
                <Icon className="w-[18px] h-[18px]" strokeWidth={1.75} />
              </motion.div>

              <div className="rounded-xl border border-transparent p-4 -m-px transition-all duration-300 group-hover:border-border group-hover:bg-card group-hover:shadow-sm group-hover:-translate-y-0.5">
                <div className="space-y-3">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-1">
                    <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                      {exp.role}
                      {isCurrent && (
                        <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100 text-[10px] font-semibold uppercase tracking-wider">
                          <span className="relative flex w-1.5 h-1.5">
                            <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75 animate-ping" />
                            <span className="relative inline-flex w-1.5 h-1.5 rounded-full bg-emerald-500" />
                          </span>
                          Current
                        </span>
                      )}
                    </h3>
                    <span className="text-sm text-muted-foreground font-medium flex items-center gap-1 shrink-0">
                      <Calendar className="w-3.5 h-3.5" />
                      {formatExperienceDate(exp.startDate, exp.endDate)}
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
                    <span className="font-semibold text-primary">{exp.company}</span>
                    {exp.type && <span className="opacity-60">• {exp.type}</span>}
                    {exp.location && (
                      <span className="flex items-center gap-1 opacity-60">
                        <MapPin className="w-3 h-3" />
                        {exp.location}
                      </span>
                    )}
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {exp.description}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "0px 0px -10% 0px" },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
};

export default function Home() {
  const [avatarLoaded, setAvatarLoaded] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between max-w-4xl">
          <a href="#" className="font-bold text-lg tracking-tight" data-testid="nav-logo">
            Nirvaan.
          </a>
          <div className="hidden sm:flex gap-6 text-sm font-medium text-muted-foreground">
            <a href="#experience" className="hover:text-primary transition-colors" data-testid="nav-experience">Experience</a>
            <a href="#projects" className="hover:text-primary transition-colors" data-testid="nav-projects">Selected Work</a>
            <a href="#awards" className="hover:text-primary transition-colors" data-testid="nav-awards">Awards</a>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-6 pt-32 pb-24 max-w-4xl">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row gap-12 items-center md:items-start mb-24"
        >
          <div className="shrink-0">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-muted bg-muted">
              <img
                src={avatarImage}
                alt="Profile"
                width={160}
                height={160}
                decoding="async"
                fetchPriority="high"
                ref={(el) => {
                  if (el?.complete) setAvatarLoaded(true);
                }}
                onLoad={() => setAvatarLoaded(true)}
                className={`w-full h-full object-cover transition-opacity duration-500 ${avatarLoaded ? "opacity-100" : "opacity-0"}`}
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
          id="experience"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-24 scroll-mt-24"
        >
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-2xl font-bold" data-testid="heading-experience">
              Experience
            </h2>
            <div className="h-px bg-border flex-1" />
          </div>

          <ExperienceTimeline />
        </motion.section>

        {/* Projects Grid */}
        <motion.section
          id="projects"
          {...fadeUp}
          className="mb-24 scroll-mt-24"
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
                    <div className="flex flex-wrap items-center gap-2">
                      <span
                        className={`inline-block px-3 py-1 text-xs font-medium rounded-full border ${getCategoryStyles(project.category)}`}
                      >
                        {project.category}
                      </span>
                      {project.note && (
                        <span className="text-[11px] italic text-muted-foreground">
                          {project.note}
                        </span>
                      )}
                    </div>
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
          id="awards"
          {...fadeUp}
          className="scroll-mt-24"
        >
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-2xl font-bold" data-testid="heading-awards">
              Awards & Recognition
            </h2>
            <div className="h-px bg-border flex-1" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {awards.map((award, index) => (
              <div
                key={index}
                className="group p-6 rounded-xl bg-blue-50/30 border border-blue-100/50 space-y-4 hover:shadow-md transition-all duration-300 hover:border-blue-200/50"
                data-testid={`card-award-${index}`}
              >
                <div className="w-10 h-10 rounded-full bg-blue-100/50 flex items-center justify-center text-blue-600">
                  <Award className="w-5 h-5" strokeWidth={2.5} />
                </div>
                <div className="space-y-1">
                  <h3 className="font-bold text-foreground leading-tight">
                    {award.title}
                  </h3>
                  <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">
                    {award.date}
                  </p>
                </div>
                <div 
                  className="text-muted-foreground leading-relaxed text-xs"
                  dangerouslySetInnerHTML={{ __html: award.description }}
                />
              </div>
            ))}
          </div>
        </motion.section>
      </main>
    </div>
  );
}

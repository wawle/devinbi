"use client";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { ExternalLink, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const router = useRouter();

  const projects = [
    {
      title: "AI-Powered Analytics Platform",
      category: "Web Application",
      description:
        "Advanced analytics dashboard with machine learning insights and predictive modeling for enterprise clients.",
      tech: ["React", "Python", "TensorFlow", "AWS"],
      impact: "40% increase in decision-making speed",
    },
    {
      title: "Healthcare Mobile App",
      category: "Mobile Development",
      description:
        "HIPAA-compliant telemedicine platform connecting patients with healthcare providers seamlessly.",
      tech: ["React Native", "Node.js", "PostgreSQL"],
      impact: "50K+ active users",
    },
    {
      title: "E-commerce Marketplace",
      category: "Full-Stack Solution",
      description:
        "Multi-vendor marketplace with AI-powered recommendations and real-time inventory management.",
      tech: ["Next.js", "Stripe", "Redis", "MongoDB"],
      impact: "$2M+ in transactions",
    },
    {
      title: "Smart Logistics System",
      category: "Enterprise Software",
      description:
        "AI-driven logistics optimization platform reducing delivery times and operational costs.",
      tech: ["Vue.js", "FastAPI", "ML Models"],
      impact: "30% cost reduction",
    },
    {
      title: "Social Learning Platform",
      category: "EdTech",
      description:
        "Interactive learning platform with AI tutoring, progress tracking, and gamification features.",
      tech: ["React", "Node.js", "OpenAI", "WebRTC"],
      impact: "100K+ students enrolled",
    },
    {
      title: "Real Estate CRM",
      category: "SaaS Platform",
      description:
        "Comprehensive CRM for real estate agents with automated lead nurturing and property management.",
      tech: ["TypeScript", "GraphQL", "Prisma"],
      impact: "5x lead conversion rate",
    },
  ];

  return (
    <section
      id="projects"
      className="py-24 bg-[#0a0a0a] relative overflow-hidden"
    >
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        ref={ref}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-1 bg-primary/10 border border-primary/20 rounded-full mb-4">
            <span className="text-sm text-primary">Case Studies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Our Recent Projects
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Explore some of our successful projects that showcase our expertise
            across different industries and technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-b from-white/5 to-transparent border border-white/10 rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 group"
            >
              {/* Project Image Placeholder */}
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 relative overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(0,133,40,0.1)_50%,transparent_75%)] bg-[length:250%_250%] group-hover:animate-[shimmer_2s_ease-in-out_infinite] transition-all" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                    <ExternalLink className="w-8 h-8 text-primary" />
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="text-xs text-primary mb-2">
                  {project.category}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-400 mb-4">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs bg-primary/10 text-primary rounded border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Impact */}
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-300">{project.impact}</span>
                  <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 mb-4">
            Want to see more? We've delivered 50+ projects across various
            industries.
          </p>
          <button
            onClick={() => router.push("/contact")}
            className="inline-flex items-center text-primary hover:text-primary/80 transition-colors group"
          >
            Let's discuss your project
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}

"use client";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import type { LucideIcon } from "lucide-react";
import {
  Bot,
  Music4,
  Receipt,
  ShoppingCart,
  TrendingUp,
  Users,
} from "lucide-react";

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  type Project = {
    title: string;
    category: string;
    description: string;
    tech: string[];
    impact: string;
    icon: LucideIcon;
  };

  const projects: Project[] = [
    {
      title: "E-commerce Marketplace",
      category: "Commerce Platform",
      description:
        "Scalable multi-vendor marketplace with intuitive product discovery and high-converting checkout flows.",
      tech: ["Next.js", "Stripe", "PostgreSQL", "Tailwind CSS"],
      impact: "Enabled 120+ vendors to sell online",
      icon: ShoppingCart,
    },
    {
      title: "Social Platform",
      category: "Community Experience",
      description:
        "Engaging social community with real-time interactions, content feeds, and personalized discovery.",
      tech: ["React", "Node.js", "WebSockets", "Redis"],
      impact: "Grew to 85K monthly active members",
      icon: Users,
    },
    {
      title: "AI Music Generator App",
      category: "Creative AI",
      description:
        "Text-to-track composition engine with collaborative playlists and export-ready stems.",
      tech: ["Next.js", "Python", "PyTorch", "AWS"],
      impact: "Produced 12K+ unique tracks in beta",
      icon: Music4,
    },
    {
      title: "AI Powered Chatbot",
      category: "Customer Support",
      description:
        "Conversational assistant with domain-tuned responses, sentiment detection, and live agent handoff.",
      tech: ["TypeScript", "Next.js", "OpenAI", "Pinecone"],
      impact: "Resolved 78% of inquiries autonomously",
      icon: Bot,
    },
    {
      title: "Investment Tracker App",
      category: "Fintech Dashboard",
      description:
        "Portfolio analytics suite with automated insights, alerts, and multi-brokerage aggregation.",
      tech: ["React", "Node.js", "GraphQL", "Supabase"],
      impact: "Monitored $450M+ in assets",
      icon: TrendingUp,
    },
    {
      title: "Invoicing App",
      category: "SaaS Platform",
      description:
        "Automated billing workspace with smart reminders, payment tracking, and PDF export workflows.",
      tech: ["Next.js", "Prisma", "PostgreSQL", "AWS SES"],
      impact: "Cut payment cycles by 40%",
      icon: Receipt,
    },
  ];

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
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
              <div className="aspect-video bg-black/80 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                    <project.icon className="w-8 h-8 text-primary" />
                  </div>
                </div>
              </div>

              <div className="p-6 bg-black/50">
                <div className="text-xs text-primary mb-2">
                  {project.category}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 transition-colors">
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
                <div className="text-sm text-gray-300">{project.impact}</div>
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
        </motion.div>
      </div>
    </section>
  );
}

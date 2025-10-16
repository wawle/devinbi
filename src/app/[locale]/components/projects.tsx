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
import { useDictionary } from "@/hooks/use-dictionary";

type ProjectItem = {
  icon: string;
  title: string;
  category: string;
  description: string;
  tech: string[];
  impact: string;
};

type ProjectsDictionary = {
  badge: string;
  title: string;
  description: string;
  list: ProjectItem[];
  footerNote: string;
};

const projectIcons: Record<string, LucideIcon> = {
  shoppingCart: ShoppingCart,
  users: Users,
  music4: Music4,
  bot: Bot,
  trendingUp: TrendingUp,
  receipt: Receipt,
};

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { dictionary } = useDictionary<ProjectsDictionary>("projectsSection");

  const projects = dictionary?.list ?? [];

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
            <span className="text-sm text-primary">
              {dictionary?.badge ?? ""}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            {dictionary?.title ?? ""}
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            {dictionary?.description ?? ""}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            const Icon = projectIcons[project.icon] ?? ShoppingCart;

            return (
              <motion.div
                key={`${project.title}-${index}`}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-b from-white/5 to-transparent border border-white/10 rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 group"
              >
                {/* Project Image Placeholder */}
                <div className="aspect-video bg-black/80 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                      <Icon className="w-8 h-8 text-primary" />
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
                    {(project.tech ?? []).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs bg-primary/10 text-primary rounded border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Impact */}
                  <div className="text-sm text-gray-300">
                    {project.impact}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 mb-4">
            {dictionary?.footerNote ?? ""}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

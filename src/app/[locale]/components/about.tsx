"use client";

import { motion } from "motion/react";
import { useInView } from "motion/react";
import { Code2, Lightbulb, Rocket, Shield } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useRef } from "react";
import { useDictionary } from "@/hooks/use-dictionary";

type AboutFeature = {
  icon: string;
  title: string;
  description: string;
};

type AboutDictionary = {
  badge: string;
  title: string;
  description: string;
  features: AboutFeature[];
  why: {
    title: string;
    description: string;
    bullets: string[];
    experience: {
      value: string;
      label: string;
    };
  };
};

const aboutIcons: Record<string, LucideIcon> = {
  code2: Code2,
  lightbulb: Lightbulb,
  rocket: Rocket,
  shield: Shield,
};

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { dictionary } = useDictionary<AboutDictionary>("about");

  const featureList = dictionary?.features ?? [];
  const why = dictionary?.why;

  return (
    <section id="about" className="py-24 bg-black relative overflow-hidden">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {featureList.map((feature, index) => {
            const Icon = aboutIcons[feature.icon] ?? Code2;
            return (
              <motion.div
                key={`${feature.title}-${index}`}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-b from-white/5 to-transparent border border-white/10 rounded-lg p-6 hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-400">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gradient-to-r from-primary/10 to-transparent border border-primary/20 rounded-xl p-8 md:p-12"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                {why?.title ?? ""}
              </h3>
              <p className="text-gray-400 mb-6">{why?.description ?? ""}</p>
              <ul className="space-y-3">
                {(why?.bullets ?? []).map((bullet, bulletIndex) => (
                  <li className="flex items-start" key={`${bullet}-${bulletIndex}`}>
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3" />
                    <span className="text-gray-300">{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="text-center">
                <div className="text-5xl font-bold text-primary mb-2">
                  {why?.experience?.value ?? ""}
                </div>
                <div className="text-gray-300">
                  {why?.experience?.label ?? ""}
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-xl" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

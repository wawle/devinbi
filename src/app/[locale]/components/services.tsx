"use client";

import { motion } from "motion/react";
import { useInView } from "motion/react";
import {
  Globe,
  Smartphone,
  Brain,
  Package,
  Wrench,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useRef } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useDictionary } from "@/hooks/use-dictionary";

type ServiceItem = {
  icon: string;
  title: string;
  description: string;
  features: string[];
};

type ServicesDictionary = {
  badge: string;
  title: string;
  description: string;
  list: ServiceItem[];
  cta: {
    title: string;
    description: string;
    button: string;
  };
};

const serviceIcons: Record<string, LucideIcon> = {
  globe: Globe,
  smartphone: Smartphone,
  brain: Brain,
  package: Package,
  wrench: Wrench,
};

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const router = useRouter();
  const { dictionary } =
    useDictionary<ServicesDictionary>("servicesSection");

  const services = dictionary?.list ?? [];
  const cta = dictionary?.cta;

  return (
    <section
      id="services"
      className="py-24 bg-gradient-to-b from-black to-[#0a0a0a] relative overflow-hidden"
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
          {services.map((service, index) => {
            const Icon = serviceIcons[service.icon] ?? Globe;
            return (
              <motion.div
                key={`${service.title}-${index}`}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-b from-white/5 to-transparent border border-white/10 rounded-xl p-8 hover:border-primary/50 transition-all duration-300 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-transparent transition-all duration-300" />

                <div className="relative z-10">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-gray-400 mb-6">{service.description}</p>

                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={`${feature}-${featureIndex}`}
                        className="flex items-center text-sm text-gray-300"
                      >
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-gradient-to-r from-primary/20 to-transparent border border-primary/30 rounded-xl p-8 md:p-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              {cta?.title ?? ""}
            </h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              {cta?.description ?? ""}
            </p>
            <Button
              onClick={() => router.push("/contact")}
              className="px-8 py-5 bg-primary hover:bg-primary/70 text-white rounded-lg transition-colors"
            >
              {cta?.button ?? ""}
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

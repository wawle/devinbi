"use client";

import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Globe, Smartphone, Brain, Package, Wrench } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const router = useRouter();

  const services = [
    {
      icon: Globe,
      title: "Web Development",
      description:
        "Modern, responsive web applications built with React, Next.js, and cutting-edge technologies.",
      features: [
        "Progressive Web Apps",
        "E-commerce Platforms",
        "Custom Web Solutions",
        "Real-time Applications",
      ],
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description:
        "Native and cross-platform mobile apps for iOS and Android that users love.",
      features: [
        "React Native Apps",
        "Native iOS & Android",
        "Mobile-first Design",
        "App Store Optimization",
      ],
    },
    {
      icon: Brain,
      title: "AI Integration",
      description:
        "Enhance your products with artificial intelligence and machine learning capabilities.",
      features: [
        "ChatGPT Integration",
        "Computer Vision",
        "Natural Language Processing",
        "Predictive Analytics",
      ],
    },
    {
      icon: Package,
      title: "Product Development",
      description:
        "From MVP to full-scale product, we bring your vision to life with expert execution.",
      features: [
        "MVP Development",
        "Product Strategy",
        "UI/UX Design",
        "Market Launch",
      ],
    },
    {
      icon: Wrench,
      title: "Support & Scaling",
      description:
        "Ongoing technical support, maintenance, and infrastructure scaling for growing businesses.",
      features: [
        "24/7 Monitoring",
        "Performance Optimization",
        "Cloud Infrastructure",
        "Bug Fixes & Updates",
      ],
    },
  ];

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
            <span className="text-sm text-primary">Our Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            What We Do
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Comprehensive software development services tailored to your needs,
            from initial concept to ongoing support.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-b from-white/5 to-transparent border border-white/10 rounded-xl p-8 hover:border-primary/50 transition-all duration-300 group relative overflow-hidden"
            >
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-transparent transition-all duration-300" />

              <div className="relative z-10">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>

                <p className="text-gray-400 mb-6">{service.description}</p>

                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center text-sm text-gray-300"
                    >
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-gradient-to-r from-primary/20 to-transparent border border-primary/30 rounded-xl p-8 md:p-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Every project is unique. Let's discuss your specific requirements
              and build something amazing together.
            </p>
            <Button
              onClick={() => router.push("/contact")}
              className="px-8 py-5 bg-primary hover:bg-primary/70 text-white rounded-lg transition-colors"
            >
              Get in Touch
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

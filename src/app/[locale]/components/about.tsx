"use client";

import { motion } from "motion/react";
import { useInView } from "motion/react";
import { Code2, Lightbulb, Rocket, Shield } from "lucide-react";
import { useRef } from "react";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Code2,
      title: "Expert Development",
      description: "Full-stack expertise in modern web and mobile technologies",
    },
    {
      icon: Lightbulb,
      title: "Innovation First",
      description:
        "Leveraging AI and cutting-edge tools to build smarter solutions",
    },
    {
      icon: Rocket,
      title: "Fast Delivery",
      description:
        "From idea to launch with agile methodology and rapid iterations",
    },
    {
      icon: Shield,
      title: "Long-term Support",
      description:
        "Technical support, scaling, and maintenance for your growing needs",
    },
  ];

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
            <span className="text-sm text-primary">About Devinbi</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Your Digital Partner
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Devinbi is a software development company that transforms ideas into
            powerful digital solutions. We build our own products and craft
            custom applications for clients worldwide, combining technical
            excellence with AI-driven innovation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-b from-white/5 to-transparent border border-white/10 rounded-lg p-6 hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
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
                Why Choose Devinbi?
              </h3>
              <p className="text-gray-400 mb-6">
                We don't just write code – we build experiences. Our team
                combines deep technical expertise with a passion for innovation,
                ensuring every project is crafted with precision and purpose.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3" />
                  <span className="text-gray-300">
                    End-to-end development from concept to deployment
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3" />
                  <span className="text-gray-300">
                    AI integration expertise to enhance your product
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3" />
                  <span className="text-gray-300">
                    Scalable architecture for future growth
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3" />
                  <span className="text-gray-300">
                    Ongoing support and maintenance
                  </span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="text-center">
                <div className="text-5xl font-bold text-primary mb-2">5+</div>
                <div className="text-gray-300">Years Experience</div>
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

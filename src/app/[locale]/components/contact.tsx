"use client";

import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { Mail, Send, CheckCircle2 } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

import FormInput from "@/components/form/form-input";
import { SubmitButton } from "@/components/form/submit-button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock submission
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-24 bg-black relative overflow-hidden">
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
            <span className="text-sm text-primary">Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Let's Build Together
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Have a project in mind? We'd love to hear about it. Share your ideas
            and let's create something extraordinary.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Why Work With Us?
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-primary mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">
                      Transparent Communication
                    </h4>
                    <p className="text-gray-400 text-sm">
                      Regular updates and clear project milestones
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-primary mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">
                      Expert Team
                    </h4>
                    <p className="text-gray-400 text-sm">
                      Skilled developers with years of experience
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-primary mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">
                      On-Time Delivery
                    </h4>
                    <p className="text-gray-400 text-sm">
                      We respect deadlines and deliver quality work
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-primary mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">
                      Ongoing Support
                    </h4>
                    <p className="text-gray-400 text-sm">
                      We're here even after launch
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-black/50 to-transparent border border-primary/30 rounded-xl p-8">
              <Mail className="w-10 h-10 text-primary mb-4" />
              <h4 className="text-white font-semibold mb-2">Email Us</h4>
              <p className="text-gray-400 text-sm mb-4">
                Prefer email? Drop us a line anytime.
              </p>
              <a
                href="mailto:info@devinbi.com"
                className="text-primary hover:text-primary/80 transition-colors"
              >
                info@devinbi.com
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gradient-to-b from-black/50 to-transparent border border-white/10 rounded-xl p-8"
          >
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Message Sent!
                </h3>
                <p className="text-gray-400">
                  We'll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <FormInput
                  label="Your Name"
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  className="border-white/10 text-white placeholder:text-gray-500 focus:border-primary"
                  required
                />

                <FormInput
                  label="Email Address"
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  className="border-white/10 text-white placeholder:text-gray-500 focus:border-primary"
                  required
                />

                <div>
                  <Select name="project" required>
                    <SelectTrigger className="w-full text-sm border border-white/10 rounded-lg text-gray-500 focus:border-primary">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="web">Web Development</SelectItem>
                      <SelectItem value="mobile">Mobile Development</SelectItem>
                      <SelectItem value="ai">AI Integration</SelectItem>
                      <SelectItem value="product">
                        Product Development
                      </SelectItem>
                      <SelectItem value="support">Support & Scaling</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <FormInput
                  label="Tell Us About Your Project"
                  id="message"
                  name="message"
                  RenderInput={() => (
                    <Textarea
                      id="message"
                      placeholder="Describe your project, goals, and timeline..."
                      rows={5}
                      className="border-white/10 text-white placeholder:text-gray-500 focus:border-primary resize-none"
                      required
                    />
                  )}
                />

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-white py-6 group font-semibold"
                >
                  Send Message
                  <Send className="size-5 ml-2 group-hover:rotate-45 transition-all" />
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

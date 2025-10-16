"use client";

import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { Mail, Send, CheckCircle2 } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

import FormInput from "@/components/form/form-input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useDictionary } from "@/hooks/use-dictionary";

type ContactReason = {
  title: string;
  description: string;
};

type ContactOption = {
  value: string;
  label: string;
};

type ContactDictionary = {
  badge: string;
  title: string;
  description: string;
  whyTitle: string;
  reasons: ContactReason[];
  emailCard: {
    title: string;
    description: string;
    address: string;
  };
  success: {
    title: string;
    description: string;
  };
  form: {
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    servicePlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    submit: string;
    options: ContactOption[];
  };
};

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [submitted, setSubmitted] = useState(false);
  const { dictionary } = useDictionary<ContactDictionary>("contactPage");

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

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="w-full flex flex-col justify-center items-center lg:flex-row lg:justify-start">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">
                  {dictionary?.whyTitle ?? ""}
                </h3>
                <ul className="space-y-4">
                  {(dictionary?.reasons ?? []).map((reason, index) => (
                    <li className="flex items-start" key={`${reason.title}-${index}`}>
                      <CheckCircle2 className="w-6 h-6 text-primary mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <h4 className="text-white font-semibold mb-1">
                          {reason.title}
                        </h4>
                        <p className="text-gray-400 text-sm">
                          {reason.description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-br from-black/90 to-transparent border border-white/10 rounded-xl p-8">
              <Mail className="w-10 h-10 text-primary mb-4" />
              <h4 className="text-white font-semibold mb-2">
                {dictionary?.emailCard?.title ?? ""}
              </h4>
              <p className="text-gray-400 text-sm mb-4">
                {dictionary?.emailCard?.description ?? ""}
              </p>
              <a
                href={`mailto:${dictionary?.emailCard?.address ?? ""}`}
                className="text-primary hover:text-primary/80 transition-colors"
              >
                {dictionary?.emailCard?.address ?? ""}
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gradient-to-b from-black/90 to-transparent border border-white/10 rounded-xl p-8"
          >
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {dictionary?.success?.title ?? ""}
                </h3>
                <p className="text-gray-400">
                  {dictionary?.success?.description ?? ""}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <FormInput
                  label={dictionary?.form?.nameLabel ?? ""}
                  id="name"
                  name="name"
                  placeholder={dictionary?.form?.namePlaceholder ?? ""}
                  className="border-white/10 text-white placeholder:text-gray-500 focus:border-primary"
                  required
                />

                <FormInput
                  label={dictionary?.form?.emailLabel ?? ""}
                  id="email"
                  name="email"
                  type="email"
                  placeholder={dictionary?.form?.emailPlaceholder ?? ""}
                  className="border-white/10 text-white placeholder:text-gray-500 focus:border-primary"
                  required
                />

                <div>
                  <Select name="project" required>
                    <SelectTrigger className="w-full text-sm border border-white/10 rounded-lg text-gray-500 focus:border-primary">
                      <SelectValue
                        placeholder={dictionary?.form?.servicePlaceholder ?? ""}
                      />
                    </SelectTrigger>
                    <SelectContent>
                      {(dictionary?.form?.options ?? []).map((option) => (
                        <SelectItem value={option.value} key={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <FormInput
                  label={dictionary?.form?.messageLabel ?? ""}
                  id="message"
                  name="message"
                  RenderInput={() => (
                    <Textarea
                      id="message"
                      placeholder={dictionary?.form?.messagePlaceholder ?? ""}
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
                  {dictionary?.form?.submit ?? ""}
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

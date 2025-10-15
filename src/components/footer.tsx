"use client";

import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import AnimatedLogo from "./animated-logo";
import Image from "next/image";
import Logo from "../../public/img/logo.png";
import { Separator } from "./ui/separator";

export function Footer() {
  return (
    <footer className="relative bg-black/50 py-4 z-10">
      <div className="absolute top-0 w-full h-[1px] bg-gradient-to-r from-[#008529]/5 via-[#008529] to-[#008529]/5" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link className="z-50 text-3xl font-bold bg-white" href="/">
              <div className="flex items-center gap-2">
                <Image alt="Devinbi Logo" height={50} width={50} src={Logo} />
                <AnimatedLogo className="text-white" />
                <span className="sr-only">Devinbi Home Page</span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm max-w-lg mb-4">
              Building smarter digital experiences with AI. From concept to
              launch, we're your trusted development partner.
            </p>
            {/* <div className="flex space-x-4">
              <Link
                href="#"
                className="w-10 h-10 bg-white/5 hover:bg-primary/20 border border-white/10 hover:border-primary/50 rounded-lg flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 text-gray-400 hover:text-primary" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-white/5 hover:bg-primary/20 border border-white/10 hover:border-primary/50 rounded-lg flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-gray-400 hover:text-primary" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-white/5 hover:bg-primary/20 border border-white/10 hover:border-primary/50 rounded-lg flex items-center justify-center transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 text-gray-400 hover:text-primary" />
              </Link>
            </div> */}
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-primary text-sm transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-400 hover:text-primary text-sm transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-gray-400 hover:text-primary text-sm transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-primary text-sm transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-400 text-sm">Web Development</li>
              <li className="text-gray-400 text-sm">Mobile Apps</li>
              <li className="text-gray-400 text-sm">AI Integration</li>
              <li className="text-gray-400 text-sm">Product Development</li>
            </ul>
          </div>
        </div>
      </div>
      {/* Bottom Bar */}
      <div className="py-4  border-t border-white/10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-7xl flex flex-col gap-2 md:gap-0 md:flex-row items-center justify-between">
          <p className="text-gray-400 text-sm md:mb-0">
            © 2025 Devinbi. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a
              href="#"
              className="text-gray-400 hover:text-primary text-sm transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-primary text-sm transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

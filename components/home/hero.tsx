"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Mail,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Hero() {
  return (
    <section className="py-16 md:py-32">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <motion.div
            className="flex flex-col justify-center space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Hi, I&apos;m Bonthu Lohitha
              </h1>
              <p className="text-lg text-muted-foreground">
                Full Stack Developer &amp; Machine Learning Enthusiast. I build
                modern web apps and AI solutions.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 mt-4">
              <Button asChild size="lg" className="group">
                <a href="#projects">
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a
                  href="/Bonthu_Lohitha_Resume.pdf"
                  download="Bonthu_Lohitha_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </a>
              </Button>
            </div>
            <div className="flex gap-3 mt-4">
              <a
                href="mailto:lohitha0801@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Mail className="h-6 w-6 text-primary hover:text-primary/80" />
              </a>
              <a
                href="tel:6303197497"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Phone className="h-6 w-6 text-primary hover:text-primary/80" />
              </a>
              <a
                href="https://github.com/Lohitha0011"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-6 w-6 text-primary hover:text-primary/80" />
              </a>
              <a
                href="https://linkedin.com/in/lohithabonthu"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-6 w-6 text-primary hover:text-primary/80" />
              </a>
            </div>
          </motion.div>
          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="relative w-90 h-120 rounded-full overflow-hidden mx-auto">
              <Image
                src="/images/lohii.jpg"
                alt="Bonthu Lohitha"
                fill
                className="object-cover [object-position:50%_25%]"
                priority
                sizes="(max-width: 768px) 100vw, 400px"
              />
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function AboutPage() {
  return (
    <section className="py-12 md:py-24">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
        >
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            About Me
          </h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Get to know more about my background and skills
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h2 className="text-2xl font-bold mb-4">Who I Am</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I&apos;m Bonthu Lohitha, a passionate Full Stack Developer and Computer Science student at Vishnu Institute of Technology, Bhimavaram. I enjoy building innovative web applications and leveraging AI/ML and cloud technologies to solve real-world problems.
              </p>
              <p>
                My expertise spans Python, Java, C, React.js, Node.js, Express.js, MongoDB, and cloud platforms like AWS. I have a strong foundation in data structures, algorithms, system design, and data analytics.
              </p>
              <p>
                I&apos;m particularly interested in the intersection of web development, AI/ML, and cloud computing, and have developed several projects and participated in hackathons to further my skills.
              </p>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">Education</h2>
            <div className="space-y-4">
              <Card>
                <CardHeader className="p-4">
                  <CardTitle>
                    <div>
                      <h3 className="text-lg font-bold">Bachelor of Technology (CS&amp;BS)</h3>
                      <p className="text-sm text-muted-foreground">Vishnu Institute of Technology, Bhimavaram</p>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">2022 – 2026</span>
                    <span className="text-muted-foreground">Bhimavaram</span>
                  </div>
                  <Badge variant="outline" className="mt-2">82%</Badge>
                </CardContent>
              </Card>
             
              
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold mb-4">Skills</h2>
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3">Languages</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Python</Badge>
                <Badge variant="secondary">Java</Badge>
                <Badge variant="secondary">C</Badge>
              </div>
            </div>
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3">UI/UX Designing</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Figma</Badge>
                <Badge variant="secondary">Wireframing</Badge>
                <Badge variant="secondary">Prototyping</Badge>
                <Badge variant="secondary">Design Systems</Badge>
              </div>
            </div>
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3">Data Analytics</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Data Visualization</Badge>
                <Badge variant="secondary">SQL</Badge>
                <Badge variant="secondary">Excel</Badge>
                <Badge variant="secondary">Power BI</Badge>
                <Badge variant="secondary">Tableau</Badge>
              </div>
            </div>
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3">Core Subjects</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">DSA</Badge>
                <Badge variant="secondary">System Design</Badge>
                <Badge variant="secondary">Cryptography</Badge>
                <Badge variant="secondary">Network Security</Badge>
              </div>
            </div>
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3">Web Development</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">HTML</Badge>
                <Badge variant="secondary">CSS</Badge>
                <Badge variant="secondary">JavaScript</Badge>
                <Badge variant="secondary">TailwindCSS</Badge>
                <Badge variant="secondary">Bootstrap</Badge>
                <Badge variant="secondary">React.js</Badge>
                <Badge variant="secondary">Node.js</Badge>
                <Badge variant="secondary">Express.js</Badge>
                <Badge variant="secondary">MongoDB</Badge>
                <Badge variant="secondary">Firebase</Badge>
              </div>
            </div>
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3">AI-ML Technologies</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Pytorch</Badge>
                <Badge variant="secondary">Scikit-learn</Badge>
                <Badge variant="secondary">Deep Learning</Badge>
                <Badge variant="secondary">NLP</Badge>
                <Badge variant="secondary">Gen-AI</Badge>
              </div>
            </div>
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3">Cloud Computing &amp; DevOps</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">AWS Cloud</Badge>
                <Badge variant="secondary">Docker</Badge>
                <Badge variant="secondary">Kubernetes</Badge>
                <Badge variant="secondary">Git</Badge>
                <Badge variant="secondary">GitHub</Badge>
                <Badge variant="secondary">Linux</Badge>
                <Badge variant="secondary">CI/CD Pipelines</Badge>
              </div>
            </div>
            <h2 className="text-2xl font-bold mt-8 mb-4">Achievements</h2>
            <ul className="space-y-3 mb-6">
              <li>Selected Top 35 teams - SIH 2024 Internal Hackathons.</li>
              <li>Student Coordinator for Institution’s Innovation Council (IIC) - CS&amp;BS Branch.</li>
             
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
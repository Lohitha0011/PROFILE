"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, Github, Linkedin } from "lucide-react";
import { ContactForm } from "@/components/contact/contact-form";

const socialLinks = [
  {
    id: "email",
    name: "Email",
    url: "mailto:lohitha0801@gmail.com",
    icon: Mail,
  },
  {
    id: "phone",
    name: "Phone",
    url: "tel:1234567890",
    icon: Phone,
  },
  {
    id: "github",
    name: "GitHub",
    url: "https://github.com/Lohitha0011",
    icon: Github,
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    url: "https://linkedin.com/in/lohithabonthu",
    icon: Linkedin,
  },
];

export default function ContactPage() {
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
            Contact Me
          </h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
            Feel free to reach out for collaborations or just a friendly hello!
          </p>
        </motion.div>
        <div className="grid gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col space-y-6">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center rounded-md border p-4 transition-colors hover:bg-muted"
                  >
                    <div className="mr-4 rounded-full bg-primary/10 p-2">
                      <social.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-medium">{social.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {social.url.replace(/(mailto:|tel:|https:\/\/)/g, "")}
                      </p>
                    </div>
                  </motion.a>
                ))}
                <div className="mt-auto pt-6">
                  <h3 className="font-medium mb-2">Current Location</h3>
                  <p className="text-sm text-muted-foreground">
                    Amalapuram, Andhra Pradesh, India
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
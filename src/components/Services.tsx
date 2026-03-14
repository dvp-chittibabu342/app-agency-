"use client";
import { motion } from "framer-motion";
import ServiceCard from "./ServiceCard";
import {
  Code,
  Smartphone,
  Palette,
  Brain,
  Megaphone,
  Search,
} from "lucide-react";

export default function Services() {
  const services = [
  {
    title: "Web Development",
    description:
      "Modern high-performance websites built with the latest technologies.",
    icon: Code,
  },
  {
    title: "App Development",
    description:
      "Scalable web and mobile applications tailored for your business.",
    icon: Smartphone,
  },
  {
    title: "UI/UX Design",
    description:
      "User-centered design that improves experience and conversions.",
    icon: Palette,
  },
  {
    title: "AI Applications",
    description:
      "Intelligent tools and automation powered by modern AI.",
    icon: Brain,
  },
  {
    title: "Digital Marketing",
    description:
      "Strategies to grow your audience and increase conversions.",
    icon: Megaphone,
  },
  {
    title: "SEO",
    description:
      "Optimize your website to rank higher and attract organic traffic.",
    icon: Search,
  },
];

  return (
    <section id="services" className="py-24">
      <div className="max-w-[1200px] mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto">
            We help businesses build, launch and grow digital products.
          </p>
        </div>

        {/* Animated Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service, index) => (
            <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            icon={service.icon}
            />
          ))}
        </motion.div>

      </div>
    </section>
  );
}
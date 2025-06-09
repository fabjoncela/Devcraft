"use client"

import { useTranslation } from "@/components/translation-provider"
import { Users, Award, Target } from "lucide-react"
import Image from "next/image"

export default function About() {
  const { t } = useTranslation()

  const stats = [
    { number: "10+", label: t("about.experience") },
    { number: "150+", label: t("about.projects") },
    { number: "98%", label: t("about.clients") },
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50/50 dark:bg-gray-900/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t("about.title")}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">{t("about.subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">{t("about.description")}</p>

            <div className="grid grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">{stat.number}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <Image
              src="/placeholder.svg?height=400&width=500"
              alt="Team"
              width={500}
              height={400}
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Users,
              title: "Collaborative Approach",
              description: "We work closely with your team to ensure every solution aligns with your business goals.",
            },
            {
              icon: Award,
              title: "Quality Assurance",
              description:
                "Rigorous testing and quality control processes ensure reliable, bug-free software delivery.",
            },
            {
              icon: Target,
              title: "Results-Driven",
              description:
                "Our focus is on delivering measurable business value through innovative technology solutions.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

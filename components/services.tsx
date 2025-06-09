"use client"

import { useTranslation } from "@/components/translation-provider"
import { ShoppingCart, Users, Settings, Zap } from "lucide-react"

export default function Services() {
  const { t } = useTranslation()

  const services = [
    {
      icon: ShoppingCart,
      title: t("services.ecommerce.title"),
      description: t("services.ecommerce.desc"),
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Users,
      title: t("services.crm.title"),
      description: t("services.crm.desc"),
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Settings,
      title: t("services.tools.title"),
      description: t("services.tools.desc"),
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: Zap,
      title: t("services.automation.title"),
      description: t("services.automation.desc"),
      gradient: "from-orange-500 to-red-500",
    },
  ]

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50/50 dark:bg-gray-900/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t("services.title")}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">{t("services.subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
            >
              <div
                className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <service.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{service.title}</h3>

              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{service.description}</p>

              <div
                className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

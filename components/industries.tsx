"use client"

import { useTranslation } from "@/components/translation-provider"
import { Store, Heart, DollarSign, Factory, GraduationCap, Truck } from "lucide-react"

export default function Industries() {
  const { t } = useTranslation()

  const industries = [
    { icon: Store, name: t("industries.retail"), color: "from-blue-500 to-blue-600" },
    { icon: Heart, name: t("industries.healthcare"), color: "from-red-500 to-red-600" },
    { icon: DollarSign, name: t("industries.finance"), color: "from-green-500 to-green-600" },
    { icon: Factory, name: t("industries.manufacturing"), color: "from-gray-500 to-gray-600" },
    { icon: GraduationCap, name: t("industries.education"), color: "from-purple-500 to-purple-600" },
    { icon: Truck, name: t("industries.logistics"), color: "from-orange-500 to-orange-600" },
  ]

  return (
    <section id="industries" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t("industries.title")}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">{t("industries.subtitle")}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="group flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 dark:border-gray-700"
            >
              <div
                className={`w-16 h-16 bg-gradient-to-r ${industry.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <industry.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white text-center leading-tight">
                {industry.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

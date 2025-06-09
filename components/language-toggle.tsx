"use client"

import { Button } from "@/components/ui/button"
import { useTranslation } from "@/components/translation-provider"
import { Languages } from "lucide-react"

export function LanguageToggle() {
  const { language, setLanguage } = useTranslation()

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setLanguage(language === "en" ? "sq" : "en")}
      className="relative"
    >
      <Languages className="h-4 w-4" />
      <span className="absolute -top-1 -right-1 text-xs font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full w-4 h-4 flex items-center justify-center">
        {language.toUpperCase()}
      </span>
    </Button>
  )
}

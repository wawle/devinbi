"use client";

import { usePathname, useRouter } from "next/navigation";
import { locales, Locale } from "@/lib/locales";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { Globe, LanguagesIcon } from "lucide-react";

interface LocaleSwitcherProps {
  currentLocale: Locale;
}

export const LocaleSwitcher: React.FC<LocaleSwitcherProps> = ({
  currentLocale,
}) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleLocaleChange = (locale: Locale) => {
    const newPath = pathname.replace(`/${currentLocale}`, `/${locale}`);
    router.push(newPath);
  };

  return (
    <div className="flex items-center justify-center space-x-2">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="uppercase" variant="ghost" size="icon">
            <Globe />
            <span className="sr-only">Locale Change</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="end"
          className="bg-black/80 text-white border-emerald-600/20"
        >
          {locales.map((locale, index) => (
            <DropdownMenuItem
              key={index.toString()}
              className={cn(
                "uppercase cursor-pointer",
                locale === currentLocale && "bg-neutral-900"
              )}
              onClick={() => handleLocaleChange(locale)}
            >
              {locale}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

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
    <div className="flex items-center space-x-2">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="uppercase" variant="outline" size="icon">
            {currentLocale}
            <span className="sr-only">Locale Change</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          {locales.map((locale, index) => (
            <DropdownMenuItem
              key={index.toString()}
              className="uppercase"
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

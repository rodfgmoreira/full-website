'use client'

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { Switch } from "@/components/ui/switch"

export default function ThemeSwitcher() {
   const { theme, setTheme } = useTheme();
   const [isDarkMode, setIsDarkMode] = useState(false);

   useEffect(() => {
      setIsDarkMode(theme === 'dark');
   }, [theme]);

   const handleThemeChange = (checked) => {
      setIsDarkMode(checked);
      setTheme(checked ? 'dark' : 'light');
   };

   return (
      <div className='flex items-center'>
         <Switch
            checked={isDarkMode}
            onCheckedChange={handleThemeChange}
         />
      </div>
   )
}

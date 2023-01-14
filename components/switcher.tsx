'use client';

import { useEffect, useState } from 'react'
import { Switch } from '@headlessui/react'
import { useTheme } from 'next-themes';

export default function Switcher() {
  const [enabled, setEnabled] = useState(false)
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    if (resolvedTheme === 'dark') {
      setEnabled(true)
    } else {
      setEnabled(false)
    }
  }, [resolvedTheme])

  const handleChange = () => {
    setEnabled(!enabled)
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  }

  return (
    <div>
      <Switch
        checked={enabled}
        onChange={handleChange}
        className={`${enabled ? 'dark:bg-red-300' : 'bg-blue-300 dark:bg-red-100'}
          relative inline-flex h-[25px] w-[45px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
      >
        <span className="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          className={`${enabled ? 'translate-x-5' : 'translate-x-0'}
            pointer-events-none inline-block h-[20px] w-[20px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
        />
      </Switch>
    </div>
  )
}
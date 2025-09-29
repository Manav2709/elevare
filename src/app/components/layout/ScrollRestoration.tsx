'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollRestoration() {
  const pathname = usePathname();

  useEffect(() => {
    // Scroll to top on route change so Navbar is transparent over hero
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
    // Dispatch a scroll event so listeners (Navbar) update immediately
    window.dispatchEvent(new Event('scroll'));
  }, [pathname]);

  return null;
}

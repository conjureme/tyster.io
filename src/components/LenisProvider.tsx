'use client';

import { useEffect, useLayoutEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Lenis from 'lenis';

declare global {
  interface Window {
    lenis?: Lenis;
  }
}

export default function LenisProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const lenisRef = useRef<Lenis | null>(null);
  const rafRef = useRef<number | null>(null);
  const pathname = usePathname();

  useLayoutEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 2,
      infinite: false,
    });

    lenisRef.current = lenis;

    const handleResize = () => {
      lenis.resize();
    };

    function raf(time: number) {
      lenis.raf(time);
      rafRef.current = requestAnimationFrame(raf);
    }

    rafRef.current = requestAnimationFrame(raf);

    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize);

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }

      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);

      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    }
  }, [pathname]);

  useEffect(() => {
    if (typeof window !== 'undefined' && lenisRef.current) {
      window.lenis = lenisRef.current;
    }
  }, []);

  return <>{children}</>;
}

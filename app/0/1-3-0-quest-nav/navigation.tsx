"use client";

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import './navigation.css';

const Navigation = () => {
  const pathname = usePathname(); 

  return (
    <header className="header">
      <Link href="/"className="logo-link"onClick={(e) => {e.preventDefault();window.location.href = "/";}}>
        <Image src="/elif-logo/effortlessworksdark.svg" alt="Elif Çakmak Logo" width={100} height={100} />
      </Link>
      <Link href="https://www.elifcakmak.blog/" className="logo-link2">
        <Image src="/nav-titles/quest-nav.svg" alt="Elif Çakmak Logo" width={200} height={200}  />
      </Link>
      <nav className="nav">
        <Link href="/" className={`newsletter-button ${pathname === '/' ? 'active' : ''}`}onClick={(e) => { e.preventDefault();window.location.href = "/";}}>Main Home</Link>
        <Link href="/2/quest" className={`nav-link ${pathname === '/2/quest' ? 'active' : ''}`}>Quest ⚔️</Link>
        <Link href="/5/about" className={`nav-link ${pathname === '/5/about' ? 'active' : ''}`}>About</Link>
        <Link href="/5/howtoplay" className={`nav-link ${pathname === '/5/howtoplay' ? 'active' : ''}`}>How To Play</Link>
        <Link href="/5/roadmap" className={`nav-link ${pathname === '/5/roadmap' ? 'active' : ''}`}>Road Map</Link>
      </nav>
    </header>
  );
};

export default Navigation;

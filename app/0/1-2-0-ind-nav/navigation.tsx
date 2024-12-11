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
      <Link href="https://www.elifcakmak.blog/" className="logo-link">
        <Image src="/nav-titles/indv-nav.svg" alt="Elif Çakmak Logo" width={300} height={300}  />
      </Link>
      <nav className="nav">
        <Link href="/" className={`newsletter-button ${pathname === '/' ? 'active' : ''}`}onClick={(e) => { e.preventDefault();window.location.href = "/";}}>Main Home</Link>
        <Link href="/2/individual" className={`nav-link ${pathname === '/2/individual' ? 'active' : ''}`}>Individuals 🏠</Link>
        <Link href="/4/lifetracker" className={`nav-link ${pathname === '/4/lifetracker' ? 'active' : ''}`}>Life Tracker</Link>
        <Link href="/4/personaltracker" className={`nav-link ${pathname === '/4/personaltracker' ? 'active' : ''}`}>Personal Tracker</Link>
        <Link href="/4/personalprojects" className={`nav-link ${pathname === '/4/personalprojects' ? 'active' : ''}`}>Personal Projects</Link>
        <Link href="/4/howtos" className={`nav-link ${pathname === '/4/howtos' ? 'active' : ''}`}>How Tos</Link>
      </nav>
    </header>
  );
};

export default Navigation;

"use client";

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import './navigation.css';

const Navigation = () => {
  const pathname = usePathname(); 

  return (
    <header className="header">
      <Link href="https://www.elifcakmak.blog/" className="logo-link">
        <Image src="/elif-logo/elifcakmaklogo.svg" alt="Elif Çakmak Logo" width={100} height={100} className="logo" />
      </Link>
      <Link href="/"className="logo-link"onClick={(e) => {e.preventDefault();window.location.href = "/";}}>
        <Image src="/elif-logo/effortlessworks.svg" alt="Elif Çakmak Logo" width={100} height={100} className="logo2"/>
      </Link>
      <nav className="nav">
      <Link href="/" className={`Home-button ${pathname === '/' ? 'active' : ''}`}onClick={(e) => { e.preventDefault();window.location.href = "/";}}>Main Home</Link>
        <Link href="/2/business" className={`nav-link ${pathname === '/2/business' ? 'active' : ''}`}>Business 🏢</Link>
        <Link href="/2/individual" className={`nav-link ${pathname === '/2/individual' ? 'active' : ''}`}>Individuals 🏠</Link>
        <Link href="/2/quest" className={`nav-link ${pathname === '/2/quest' ? 'active' : ''}`}>Quest ⚔️</Link>
        <Link href="/2/courses" className={`nav-link ${pathname === '/2/courses' ? 'active' : ''}`}>Courses 📚</Link>
        <Link href="/2/info" className={`nav-link ${pathname === '/2/info' ? 'active' : ''}`}>Info ℹ️</Link>
        <Link href="/2/contact" className={`newsletter-button ${pathname === '/2/contact' ? 'active' : ''}`}>Contact</Link>
      </nav>
    </header>
  );
};

export default Navigation;

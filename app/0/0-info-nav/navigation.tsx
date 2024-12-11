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
      <Link href="/" className="logo-link">
        <Image src="/elif-logo/effortlessworks.svg" alt="Elif Çakmak Logo" width={100} height={100} className="logo2" />
      </Link>
      <nav className="nav">
        <Link href="/" className={`nav-link ${pathname === '/' ? 'active' : ''}`}>Home</Link>
        <Link href="/2/business" className={`nav-link ${pathname === '/2/business' ? 'active' : ''}`}>Business</Link>
        <Link href="/2/personal" className={`nav-link ${pathname === '/2/personal' ? 'active' : ''}`}>Personal</Link>
        <Link href="/2/quest" className={`nav-link ${pathname === '/2/quest' ? 'active' : ''}`}>Quest</Link>
        <Link href="/2/courses" className={`nav-link ${pathname === '/2/courses' ? 'active' : ''}`}>Courses</Link>
        <Link href="/2/info" className={`nav-link ${pathname === '/2/info' ? 'active' : ''}`}>Info</Link>
        <Link href="/2/contact" className={`newsletter-button ${pathname === '/2/contact' ? 'active' : ''}`}>Contact</Link>
      </nav>
    </header>
  );
};

export default Navigation;

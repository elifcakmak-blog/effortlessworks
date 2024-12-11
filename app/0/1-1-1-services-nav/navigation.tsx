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
        <Image src="/nav-titles/biz-nav.svg" alt="Elif Çakmak Logo" width={300} height={300}  />
      </Link>
      <nav className="nav">
        <Link href="/" className={`Home-button ${pathname === '/' ? 'active' : ''}`}onClick={(e) => { e.preventDefault();window.location.href = "/";}}>Main Home</Link>
        <Link href="/2/business" className={`nav-link ${pathname === '/2/business' ? 'active' : ''}`}>Business 🏢</Link>
        <Link href="/3/services" className={`nav-link ${pathname === '/3/services' ? 'active' : ''}`}>Services 🔧</Link>
        <Link href="/8/website" className={`newsletter-button ${pathname === '/8/website' ? 'active' : ''}`}>Website</Link>
        <Link href="/8/app" className={`newsletter-button ${pathname === '/8/app' ? 'active' : ''}`}>App</Link>
        <Link href="/8/onboarding" className={`newsletter-button ${pathname === '/8/onboarding' ? 'active' : ''}`}>Onboarding</Link>
      </nav>
    </header>
  );
};

export default Navigation;

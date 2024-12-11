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
        <Image src="/nav-titles/info-nav.svg" alt="Elif Çakmak Logo" width={300} height={300}  />
      </Link>
      <nav className="nav">
        <Link href="/" className={`newsletter-button ${pathname === '/' ? 'active' : ''}`}onClick={(e) => { e.preventDefault();window.location.href = "/";}}>Main Home</Link>
        <Link href="/2/info" className={`nav-link ${pathname === '/2/info' ? 'active' : ''}`}>Info ℹ️</Link>
        <Link href="/7/about" className={`nav-link ${pathname === '/7/about' ? 'active' : ''}`}>About</Link>
        <Link href="/7/certifications" className={`nav-link ${pathname === '/7/certifications' ? 'active' : ''}`}>Certifications</Link>
        <Link href="/7/faq" className={`nav-link ${pathname === '/7/faq' ? 'active' : ''}`}>FAQ</Link>
        <Link href="/7/pricing" className={`nav-link ${pathname === '/7/pricing' ? 'active' : ''}`}>Pricing</Link>
      </nav>
    </header>
  );
};

export default Navigation;

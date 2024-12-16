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
        <Link href="/000002/services" className={`nav-link ${pathname === '/000003/services' ? 'active' : ''}`}>Build Your Own ➡️</Link>
        <Link href="/000008/website" className={`newsletter-button ${pathname === '/000008/website' ? 'active' : ''}`}>Website</Link>
        <Link href="/000008/app" className={`newsletter-button ${pathname === '/000008/app' ? 'active' : ''}`}>App</Link>
        <Link href="/000008/onboarding" className={`newsletter-button ${pathname === '/000008/onboarding' ? 'active' : ''}`}>Onboarding Course</Link>
        <Link href="/000008/sheets" className={`newsletter-button ${pathname === '/000008/sheets' ? 'active' : ''}`}>Sheets System</Link>
        <Link href="/000008/notion" className={`newsletter-button ${pathname === '/000008/notion' ? 'active' : ''}`}>Notion System</Link>
      </nav>
    </header>
  );
};

export default Navigation;

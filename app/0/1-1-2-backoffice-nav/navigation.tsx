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
        <Link href="/3/backoffice" className={`nav-link ${pathname === '/3/backoffice' ? 'active' : ''}`}>Back office 📂</Link>
        <Link href="/9/bo-sheets" className={`newsletter-button ${pathname === '/9/bo-sheets' ? 'active' : ''}`}>Sheets</Link>
        <Link href="/9/bo-notion" className={`newsletter-button ${pathname === '/9/bo-notion' ? 'active' : ''}`}>Notion</Link>
      </nav>
    </header>
  );
};

export default Navigation;
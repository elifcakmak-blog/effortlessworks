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
      <Link href="/000002/business" className="logo-link">
        <Image src="/nav-titles/biz-nav.svg" alt="Elif Çakmak Logo" width={300} height={300}  />
      </Link>
      <nav className="nav">
        <Link href="/" className={`Home-button ${pathname === '/' ? 'active' : ''}`}onClick={(e) => { e.preventDefault();window.location.href = "/";}}>Main Home</Link>
        <Link href="/000002/business" className={`nav-link ${pathname === '/000002/business' ? 'active' : ''}`}>Business 🏢</Link>
        <Link href="/000003/backoffice" className={`nav-link ${pathname === '/000003/backoffice' ? 'active' : ''}`}>Back office 📂</Link>
        <Link href="/000009/bo-sheets" className={`newsletter-button ${pathname === '/000009/bo-sheets' ? 'active' : ''}`}>Sheets</Link>
        <Link href="/000009/bo-notion" className={`newsletter-button ${pathname === '/000009/bo-notion' ? 'active' : ''}`}>Notion</Link>
      </nav>
    </header>
  );
};

export default Navigation;
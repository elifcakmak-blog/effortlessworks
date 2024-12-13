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
        <Link href="/" className={`Home-button ${pathname === '/' ? 'active' : ''}`}onClick={(e) => { e.preventDefault();window.location.href = "/";}}>Main Home</Link>
        <Link href="/000002/individual" className={`nav-link ${pathname === '/000002/individual' ? 'active' : ''}`}>Individuals 🏠</Link>
        <Link href="/000004/personaltracker" className={`nav-link ${pathname === '/000004/personaltracker' ? 'active' : ''}`}>Personal Trackers 👤</Link>
        <Link href="/000013/pt-sheets" className={`newsletter-button ${pathname === '/000013/pt-sheets' ? 'active' : ''}`}>Sheets</Link>
        <Link href="/000013/pt-notion" className={`newsletter-button ${pathname === '/000013/pt-notion' ? 'active' : ''}`}>Notion</Link>
      </nav>
    </header>
  );
};

export default Navigation;

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
        <Link href="/000004/p-howtos" className={`nav-link ${pathname === '/000004/p-howtos' ? 'active' : ''}`}>How Tos 🎥</Link>
        <Link href="/000015/p-productvideos" className={`newsletter-button ${pathname === '/000015/p-productvideos' ? 'active' : ''}`}>Product Videos</Link>
        <Link href="/000015/p-selfpaced" className={`newsletter-button ${pathname === '/000015/p-selfpaced' ? 'active' : ''}`}>Self Paced Courses</Link>
        <Link href="/000015/p-instructorlead" className={`newsletter-button ${pathname === '/000015/p-instructorlead' ? 'active' : ''}`}>Instructor Lead Courses</Link>
      </nav>
    </header>
  );
};

export default Navigation;

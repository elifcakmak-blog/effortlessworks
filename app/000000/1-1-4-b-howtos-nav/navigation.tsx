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
        <Link href="/000003/b-howtos" className={`nav-link ${pathname === '/000003/b-howtos' ? 'active' : ''}`}>How Tos 🎥</Link>
        <Link href="/000011/b-productvideos" className={`newsletter-button ${pathname === '/000011/b-productvideos' ? 'active' : ''}`}>Product Videos</Link>
        <Link href="/000011/b-selfpaced" className={`newsletter-button ${pathname === '/000011/b-selfpaced' ? 'active' : ''}`}>Self Paced Courses</Link>
        <Link href="/000011/b-instructorled" className={`newsletter-button ${pathname === '/000011/b-instructorled' ? 'active' : ''}`}>Instructor Led Courses</Link>
      </nav>
    </header>
  );
};

export default Navigation;

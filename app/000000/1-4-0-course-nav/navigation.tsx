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
        <Image src="/nav-titles/courses-nav.svg" alt="Elif Çakmak Logo" width={300} height={300}  />
      </Link>
      <nav className="nav">
        <Link href="/" className={`newsletter-button ${pathname === '/' ? 'active' : ''}`}onClick={(e) => { e.preventDefault();window.location.href = "/";}}>Main Home</Link>
        <Link href="/000002/courses" className={`nav-link ${pathname === '/000002/courses' ? 'active' : ''}`}>Courses 📚</Link>
        <Link href="/000006/productvideos" className={`nav-link ${pathname === '/000006/productvideos' ? 'active' : ''}`}>Product Videos</Link>
        <Link href="/000006/selfpaced" className={`nav-link ${pathname === '/000006/selfpaced' ? 'active' : ''}`}>Self Paced</Link>
        <Link href="/000006/instructorlead" className={`nav-link ${pathname === '/000006/instructorlead' ? 'active' : ''}`}>Instructor Lead</Link>
      </nav>
    </header>
  );
};

export default Navigation;

"use client";

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import './navigation.css';

const Navigation = () => {
  const pathname = usePathname(); 

  return (
    <header className="mainheader">
      <Link href="https://www.elifcakmak.blog/" className="logo-link">
        <Image src="/elif-logo/elifcakmaklogo.svg" alt="Elif Çakmak Logo" width={100} height={100} className="logo" />
      </Link>
      <Link href="/"className="logo-link"onClick={(e) => {e.preventDefault();window.location.href = "/";}}>
        <Image src="/elif-logo/effortlessworks.svg" alt="Elif Çakmak Logo" width={100} height={100} className="logo2"/>
      </Link>
      <nav className="mainnav">
      <Link href="/" className={`newsletter-button ${pathname === '/' ? 'active' : ''}`}onClick={(e) => { e.preventDefault();window.location.href = "/";}}>Main Home</Link>
        <Link href="/000002/business" className={`mainnav-link ${pathname === '/000002/business' ? 'active' : ''}`}>Business 🏢</Link>
        <Link href="/000002/individual" className={`mainnav-link ${pathname === '/000002/individual' ? 'active' : ''}`}>Individuals 🏠</Link>
        <Link href="/000002/buildyourown" className={`mainnav-link ${pathname === '/000002/buildyourown' ? 'active' : ''}`}>Build Your Own ➡️</Link>
        <Link href="/000002/quest" className={`mainnav-link ${pathname === '/000002/quest' ? 'active' : ''}`}>Quest ⚔️</Link>
        <Link href="/000002/courses" className={`mainnav-link ${pathname === '/000002/courses' ? 'active' : ''}`}>Courses 📚</Link>
        <Link href="/000002/info" className={`mainnav-link ${pathname === '/000002/info' ? 'active' : ''}`}>Info ℹ️</Link>
        <Link href="/000002/contact" className={`newsletter-button ${pathname === '/000002/contact' ? 'active' : ''}`}>Contact</Link>
      </nav>
    </header>
  );
};

export default Navigation;

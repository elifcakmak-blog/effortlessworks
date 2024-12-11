"use client";

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import './navigation.css';

const Navigation = () => {
  const pathname = usePathname(); 

  return (
    <header className="header">
      <Link href="https://www.elifcakmak.blog/" className="logo-link">
        <Image src="/elif-logo/elifcakmaklogo.svg" alt="Elif Çakmak Logo" width={100} height={100} className="logo" />
      </Link>
      <Link href="/" className="logo-link">
        <Image src="/elif-logo/effortlessworksdark.svg" alt="Elif Çakmak Logo" width={100} height={100} className="logo2" />
      </Link>
      <nav className="nav">
        <Link href="/2/business" className={`nav-link ${pathname === '/2/business' ? 'active' : ''}`}>Home</Link>
        <Link href="/3/services" className={`nav-link ${pathname === '/3/services' ? 'active' : ''}`}>Services</Link>
        <Link href="/3/backoffice" className={`nav-link ${pathname === '/3/backoffice' ? 'active' : ''}`}>Back Office</Link>
        <Link href="/3/projectmanagement" className={`nav-link ${pathname === '/3/projectmanagement' ? 'active' : ''}`}>Project Management</Link>
        <Link href="/3/howtos" className={`nav-link ${pathname === '/3/howtos' ? 'active' : ''}`}>How Tos</Link>
      </nav>
    </header>
  );
};

export default Navigation;

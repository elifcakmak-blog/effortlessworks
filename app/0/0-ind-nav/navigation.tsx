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
        <Link href="/2/personal" className={`nav-link ${pathname === '/2/personal' ? 'active' : ''}`}>Home</Link>
        <Link href="/4/lifetracker" className={`nav-link ${pathname === '/4/lifetracker' ? 'active' : ''}`}>Life Tracker</Link>
        <Link href="/4/personaltracker" className={`nav-link ${pathname === '/4/personaltracker' ? 'active' : ''}`}>Personal Tracker</Link>
        <Link href="/4/personalprojects" className={`nav-link ${pathname === '/4/personalprojects' ? 'active' : ''}`}>Personal Projects</Link>
        <Link href="/4/howtos" className={`nav-link ${pathname === '/4/howtos' ? 'active' : ''}`}>How Tos</Link>
      </nav>
    </header>
  );
};

export default Navigation;

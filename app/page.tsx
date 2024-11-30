"use client"; // Add this directive to make this a client component

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation'; // Import to get the current path
import UnderConstruction from './components/UnderConstruction/UnderConstruction'; // Import the new component

export default function Home() {
  const pathname = usePathname(); // Get current path

  return (
    <div className="home-container">
      <header className="header">
        <Link href="/" className="logo-link">
          <Image src="/elifcakmaklogo.svg" alt="Elif Cakmak Logo" width={100} height={100} className="logo"/>
        </Link>
        <Link href="/" className="logo2-link">
          <Image src="/effortlessworks.svg" alt="Effortless Works Logo" width={100} height={100} className="logo2"/>
        </Link>
        <nav className="nav">
          <Link href="/" className={`nav-link ${pathname === '/' ? 'active' : ''}`}>Home</Link>
          <Link href="/products" className={`nav-link ${pathname === '/products' ? 'active' : ''}`}>Products</Link>
          <Link href="/services" className={`nav-link ${pathname === '/services' ? 'active' : ''}`}>Services</Link>
          <Link href="/courses" className={`nav-link ${pathname === '/courses' ? 'active' : ''}`}>Courses</Link>
          <Link href="/info" className={`nav-link ${pathname === '/info' ? 'active' : ''}`}>Info</Link>
          <Link href="/contact" className={`newsletter-button ${pathname === '/contact' ? 'active' : ''}`}>Contact</Link>
        </nav>
      </header>

      {/* Use the UnderConstruction component */}
      <UnderConstruction />

      {/* Footer */}
      <footer className="footer bg-gray-800 text-white py-8 text-center">
        <p>&copy; 2024 Elif Cakmak. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
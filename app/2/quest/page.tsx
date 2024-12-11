"use client"; // Add this directive to make this a client component

import CustomCursor from '../../0/0-cursor/page';
import Navigation from '../../0/0-navigation/navigation';
import Footer from '../../0/0-footer/footer'
import { usePathname } from 'next/navigation'; // Import to get the current path
import UnderConstruction from '../../0/0-UnderConstruction/UnderConstruction'; // Import the new component

export default function Home() {
  const pathname = usePathname(); // Get current path

  return (
    <div className="home-container">
      {/* Import Cursor */}
      <CustomCursor />

      {/* Navigation */}
      <Navigation />

      {/* UnderConstruction */}
      <UnderConstruction />

      {/* Footer */}
      <Footer />
    </div>
  );
}
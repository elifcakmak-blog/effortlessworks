//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
"use client"; //makes this a client component

import Navigation from './000000/0-1-navigation/navigation';
import Footer from './000000/0-2-footer/footer'; // Import Footer
import CustomCursor from './000000/0-0-cursor/page'; // Cursor Import
import Head from 'next/head'; // Import for adding elements to the <head>
import UnderConstruction from './000000/0-4-UnderConstruction/UnderConstruction';


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export default function Home() {


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  return (
    <div className="home-container">
      
      {/* Add the font link */}
      <Head>
      <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600&display=swap" rel="stylesheet" />
      </Head>

      {/* Import Cursor */}
      <CustomCursor />
      
      {/* Import Navigation */}

      <Navigation />

      {/* UnderConstruction */}
      <UnderConstruction />

      {/* Footer */}

      <Footer />


    </div>
  );
}

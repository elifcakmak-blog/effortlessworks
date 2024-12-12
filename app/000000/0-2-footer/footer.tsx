"use client";

import React from "react";
import "./footer.css";

const Footer: React.FC = () => {
  return (
    <section className="footer-card-container">
      <div className="footer h-70 py-8 rounded-lg shadow-lg">
        <div className="container mx-auto px-8">
          {/* Define a grid with 4 columns */}
          <div className="grid grid-cols-4 gap-8 mt-[-10px]">
            
            {/* Column 1 - Effortless Business Management Cards */}
            <div className="footer-column-wrapper">
              <div className="footer-column-wrapper-card p-6 shadow-md rounded-md">
                <div className="footer-column">
                  <img 
                    src="/nav-titles/biz-nav.svg" 
                    alt="Effortless Business Management" 
                    className="w-[300px] h-auto mb-5 mx-auto"
                  />
                  <div className="footer-card p-6 shadow-md rounded-md text-center">
                    <h1 className="text-2xl font-bold">Services</h1>
                    <a href="/2/services" className="footer-link">Services</a>
                    <a href="/2/services" className="footer-link">Services</a>
                    <a href="/2/services" className="footer-link">Services</a>
                  </div>
                  <div className="footer-card p-6 shadow-md rounded-md text-center">
                    <h1 className="text-2xl font-bold">Back Office</h1>
                    <a href="/2/back-office" className="footer-link">Google Sheets</a>
                    <a href="/2/back-office" className="footer-link">Notion</a>
                  </div>
                  <div className="footer-card p-6 shadow-md rounded-md text-center">
                    <h1 className="text-2xl font-bold">Projects</h1>
                    <a href="/2/back-office" className="footer-link">Google Sheets</a>
                    <a href="/2/back-office" className="footer-link">Notion</a>
                  </div>
                  <div className="footer-card p-6 shadow-md rounded-md text-center">
                    <h1 className="text-2xl font-bold">How Tos</h1>
                    <a href="/2/how-tos" className="footer-link">How Tos</a>
                    <a href="/2/how-tos" className="footer-link">How Tos</a>
                    <a href="/2/how-tos" className="footer-link">How Tos</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 2 - Effortless Personal Life Cards */}
            <div className="footer-column-wrapper">
              <div className="footer-column-wrapper-card p-6 shadow-md rounded-md">
                <div className="footer-column">
                  <img 
                    src="/nav-titles/indv-nav.svg" 
                    alt="Effortless Personal Life" 
                    className="w-[300px] h-auto mb-5 mx-auto"
                  />
                  <div className="footer-card p-6 shadow-md rounded-md text-center">
                    <h1 className="text-2xl font-bold">Life Tracker</h1>
                    <a href="/2/back-office" className="footer-link">Google Sheets</a>
                    <a href="/2/back-office" className="footer-link">Notion</a>
                  </div>
                  <div className="footer-card p-6 shadow-md rounded-md text-center">
                    <h1 className="text-2xl font-bold">Personal Tracker</h1>
                    <a href="/2/back-office" className="footer-link">Google Sheets</a>
                    <a href="/2/back-office" className="footer-link">Notion</a>
                  </div>
                  <div className="footer-card p-6 shadow-md rounded-md text-center">
                    <h1 className="text-2xl font-bold">Personal Projects</h1>
                    <a href="/2/back-office" className="footer-link">Google Sheets</a>
                    <a href="/2/back-office" className="footer-link">Notion</a>
                  </div>
                  <div className="footer-card p-6 shadow-md rounded-md text-center">
                    <h1 className="text-2xl font-bold">How Tos</h1>
                    <a href="/2/how-tos" className="footer-link">How Tos</a>
                    <a href="/2/how-tos" className="footer-link">How Tos</a>
                    <a href="/2/how-tos" className="footer-link">How Tos</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 3 - Effortless Quest */}
            <div className="footer-column-wrapper">
              <div className="footer-column-wrapper-card p-6 shadow-md rounded-md">
                <div className="footer-column">
                  <img 
                    src="/nav-titles/quest-nav.svg" 
                    alt="Effortless Quest" 
                    className="w-[300px] h-auto mb-5 mx-auto"
                  />
                  <div className="footer-card effortless-quest-card p-6 shadow-md rounded-md text-center">
                    <h1 className="text-2xl font-bold">Effortless Quest</h1>
                    <a href="/3/about" className="footer-link">Learn More</a>
                    <a href="/3/about" className="footer-link">Learn More</a>
                    <a href="/3/about" className="footer-link">Learn More</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 4 - Effortless Works Cards */}
            <div className="footer-column-wrapper">
              <div className="footer-column-wrapper-card p-6 shadow-md rounded-md">
                <div className="footer-column">
                  <img 
                    src="/elif-logo/footerelif.svg" 
                    alt="All 3 Logos" 
                    className="w-[400px] h-auto mb-5 mx-auto"
                  />
                  
                  <div className="footer-card title-card p-6 shadow-md rounded-md text-center">
                    <h1 className="text-2xl font-bold">Elif Çakmak</h1>
                    <a href="/2/elif" className="footer-link">About Me</a>
                    <a href="/2/elif" className="footer-link">About Me</a>
                    <a href="/2/elif" className="footer-link">About Me</a>
                    <a href="/2/elif" className="footer-link">About Me</a>
                    <a href="/2/elif" className="footer-link">About Me</a>
                    <a href="/2/elif" className="footer-link">About Me</a>
                    <a href="/2/elif" className="footer-link">About Me</a>
                  </div>
                  <div className="footer-card title-card p-6 shadow-md rounded-md text-center">
                    <h1 className="text-2xl font-bold">Easy Flow Media</h1>
                    <a href="/2/easy-flow" className="footer-link">Explore</a>
                    <a href="/2/easy-flow" className="footer-link">Explore</a>
                    <a href="/2/easy-flow" className="footer-link">Explore</a>
                    <a href="/2/easy-flow" className="footer-link">Explore</a>
                    <a href="/2/easy-flow" className="footer-link">Explore</a>
                    <a href="/2/easy-flow" className="footer-link">Explore</a>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom of Footer */}
          <div className="footer-links mt-8">
            <a href="/4/privacy" className="footer-link">Privacy Policy</a>
            <a href="/4/terms" className="footer-link">Terms of Service</a>
            <a href="/4/return" className="footer-link">Return Policy</a>
            <a href="/4/cookies" className="footer-link">Cookie Policy</a>
            <a href="/4/disclaimer" className="footer-link">Disclaimer</a>
          </div>

          <div className="text-center mt-4 footer-copyright">
            <p>&copy; 2024 Elif Çakmak, EasyFlow Media, Effortless Works. All rights reserved.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;


import React from 'react';

const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#f0f2f5]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-10 py-3 flex items-center justify-between whitespace-nowrap">
        <div className="flex items-center gap-4 text-primary">
          <div className="w-8 h-8">
            <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path clipRule="evenodd" d="M24 18.4228L42 11.475V34.3663C42 34.7796 41.7457 35.1504 41.3601 35.2992L24 42V18.4228Z" fill="currentColor" fillRule="evenodd"></path>
              <path clipRule="evenodd" d="M24 8.18819L33.4123 11.574L24 15.2071L14.5877 11.574L24 8.18819ZM9 15.8487L21 20.4805V37.6263L9 32.9945V15.8487ZM27 37.6263V20.4805L39 15.8487V32.9945L27 37.6263ZM25.354 2.29885C24.4788 1.98402 23.5212 1.98402 22.646 2.29885L4.98454 8.65208C3.7939 9.08038 3 11.475V34.3663C3 36.0196 4.01719 37.5026 5.55962 38.098L22.9197 44.7987C23.6149 45.0671 24.3851 45.0671 25.0803 44.7987L42.4404 38.098C43.9828 37.5026 45 36.0196 45 34.3663V11.475C45 10.2097 44.2061 9.08038 43.0155 8.65208L25.354 2.29885Z" fill="currentColor" fillRule="evenodd"></path>
            </svg>
          </div>
          <h2 className="text-[#111518] text-lg font-bold leading-tight tracking-tight">Feel Welcome Barcelona</h2>
        </div>
        <div className="hidden md:flex flex-1 justify-end gap-8">
          <nav className="flex items-center gap-9">
            <a className="text-[#111518] text-sm font-medium hover:text-primary transition-colors" href="#">Apartments</a>
            <a className="text-[#111518] text-sm font-medium hover:text-primary transition-colors" href="#">Services</a>
            <a className="text-[#111518] text-sm font-medium hover:text-primary transition-colors" href="#">About Us</a>
            <a className="text-primary text-sm font-bold" href="#">Contact</a>
          </nav>
          <button className="bg-primary text-white text-sm font-bold px-5 py-2 rounded-lg hover:bg-primary/90 transition-all">
            Book Now
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

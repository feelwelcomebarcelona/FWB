
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-[#f0f2f5] py-16">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-10 text-center">
        <div className="flex items-center justify-center gap-2 mb-6 text-primary">
          <div className="w-6 h-6">
            <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path clipRule="evenodd" d="M24 18.4228L42 11.475V34.3663C42 34.7796 41.7457 35.1504 41.3601 35.2992L24 42V18.4228Z" fill="currentColor" fillRule="evenodd"></path>
              <path clipRule="evenodd" d="M24 8.18819L33.4123 11.574L24 15.2071L14.5877 11.574L24 8.18819ZM9 15.8487L21 20.4805V37.6263L9 32.9945V15.8487ZM27 37.6263V20.4805L39 15.8487V32.9945L27 37.6263ZM25.354 2.29885C24.4788 1.98402 23.5212 1.98402 22.646 2.29885L4.98454 8.65208C3.7939 9.08038 3 11.475V34.3663C3 36.0196 4.01719 37.5026 5.55962 38.098L22.9197 44.7987C23.6149 45.0671 24.3851 45.0671 25.0803 44.7987L42.4404 38.098C43.9828 37.5026 45 36.0196 45 34.3663V11.475C45 10.2097 44.2061 9.08038 43.0155 8.65208L25.354 2.29885Z" fill="currentColor" fillRule="evenodd"></path>
            </svg>
          </div>
          <h3 className="font-bold text-[#111518]">Feel Welcome Barcelona</h3>
        </div>
        <p className="text-sm text-[#60778a] mb-8">© 2024 Feel Welcome Barcelona. All rights reserved.</p>
        <div className="flex flex-wrap justify-center gap-x-10 gap-y-4">
          <a className="text-sm text-[#60778a] hover:text-primary transition-colors font-medium" href="#">Privacy Policy</a>
          <a className="text-sm text-[#60778a] hover:text-primary transition-colors font-medium" href="#">Terms of Service</a>
          <a className="text-sm text-[#60778a] hover:text-primary transition-colors font-medium" href="#">Cleaning Protocols</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

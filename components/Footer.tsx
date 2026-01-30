import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-12 border-t border-gray-100 mt-auto">
      <div className="max-w-[1200px] mx-auto px-4 text-center">
        <p className="text-sm text-gray-400 font-medium">© 2024 Feel Welcome Barcelona. Luxury Vacation Rentals.</p>
        <div className="flex justify-center gap-8 mt-6">
          <a href="#" className="text-xs font-bold text-gray-400 hover:text-primary transition-colors">Privacidad</a>
          <a href="#" className="text-xs font-bold text-gray-400 hover:text-primary transition-colors">Términos</a>
          <a href="#" className="text-xs font-bold text-gray-400 hover:text-primary transition-colors">Limpieza</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';
import Navbar from './components/Navbar';
import ContactSection from './components/ContactSection';
import FeaturesSection from './components/FeaturesSection';
import TestimonialsSection from './components/TestimonialsSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col selection:bg-primary selection:text-white">
      <Navbar />
      
      <main className="flex-1">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-10 py-12 md:py-20">
          {/* Page Heading */}
          <div className="mb-14">
            <h1 className="text-[#111518] text-4xl md:text-5xl font-black leading-tight tracking-tight">
              Contact & Booking Inquiry
            </h1>
            <p className="text-[#60778a] text-lg md:text-xl mt-4 font-medium max-w-2xl">
              Plan your perfect stay in the heart of Catalonia. Our team is here to help you find the best apartment for your visit.
            </p>
          </div>

          <ContactSection />
          
          <FeaturesSection />
          
          <TestimonialsSection />
        </div>
      </main>

      <Footer />
      
      {/* Floating Action Button for Mobile Quick Help (Optional enhancement) */}
      <div className="fixed bottom-6 right-6 lg:hidden z-40">
        <button className="bg-primary text-white p-4 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all">
          <span className="material-symbols-outlined !text-3xl">chat_bubble</span>
        </button>
      </div>
    </div>
  );
};

export default App;

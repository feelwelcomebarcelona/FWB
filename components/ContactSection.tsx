
import React, { useState } from 'react';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    travelDates: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    alert('Thank you for your inquiry! We will get back to you soon.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
      {/* Left Column: Info & Map */}
      <div className="lg:col-span-5 space-y-6">
        <div className="bg-white rounded-2xl border border-[#dbe1e6] p-6 space-y-8 shadow-sm">
          <div className="flex gap-4 items-start">
            <div className="bg-primary/10 p-3 rounded-lg text-primary">
              <span className="material-symbols-outlined">location_on</span>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-1">Our Address</h3>
              <p className="text-[#60778a]">Sant Lluís 51, Cornellà de Llobregat, Barcelona</p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="bg-primary/10 p-3 rounded-lg text-primary">
              <span className="material-symbols-outlined">mail</span>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-1">Email Us</h3>
              <p className="text-[#60778a]">info@feelwelcomebarcelona.com</p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="bg-primary/10 p-3 rounded-lg text-primary">
              <span className="material-symbols-outlined">call</span>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-1">Call Us</h3>
              <p className="text-[#60778a]">+34 600 000 000</p>
            </div>
          </div>
          <div className="pt-4">
            <button className="w-full flex items-center justify-center gap-3 bg-[#25D366] text-white font-bold py-4 px-6 rounded-xl hover:opacity-90 transition-all shadow-lg shadow-green-500/20">
              <span className="material-symbols-outlined">chat</span>
              Chat on WhatsApp
            </button>
          </div>
        </div>

        {/* Mock Map */}
        <div className="rounded-2xl overflow-hidden h-[300px] border border-[#dbe1e6] bg-slate-100 relative shadow-sm">
          <img 
            alt="Map of Barcelona" 
            className="w-full h-full object-cover opacity-60 grayscale-[0.5]" 
            src="https://picsum.photos/seed/barcelona-map/800/600"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white px-4 py-2 rounded-xl shadow-2xl border border-primary/20 flex items-center gap-2 animate-bounce">
              <span className="material-symbols-outlined text-primary">location_on</span>
              <span className="text-xs font-bold whitespace-nowrap">Feel Welcome Barcelona</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column: Form */}
      <div className="lg:col-span-7">
        <div className="bg-white rounded-2xl border border-[#dbe1e6] p-8 shadow-sm">
          <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-[#111518]">Full Name</label>
                <input 
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded-xl border border-[#dbe1e6] focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" 
                  placeholder="John Doe" 
                  type="text"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-[#111518]">Email Address</label>
                <input 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded-xl border border-[#dbe1e6] focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" 
                  placeholder="john@example.com" 
                  type="email"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-[#111518]">Phone Number</label>
                <input 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-3 rounded-xl border border-[#dbe1e6] focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" 
                  placeholder="+34" 
                  type="tel"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-[#111518]">Travel Dates</label>
                <div className="relative">
                  <input 
                    name="travelDates"
                    value={formData.travelDates}
                    onChange={handleChange}
                    className="w-full p-3 pr-10 rounded-xl border border-[#dbe1e6] focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" 
                    placeholder="Check-in - Check-out" 
                    type="text"
                  />
                  <span className="material-symbols-outlined absolute right-3 top-3 text-gray-400">calendar_month</span>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-[#111518]">Your Message</label>
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-xl border border-[#dbe1e6] focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" 
                placeholder="Tell us about your trip and any special requirements..." 
                rows={5}
              ></textarea>
            </div>
            <button className="w-full bg-primary text-white font-bold py-4 px-6 rounded-xl hover:bg-primary/90 transition-all text-lg shadow-lg shadow-primary/20" type="submit">
              Send Booking Inquiry
            </button>
            <p className="text-center text-xs text-[#60778a]">
              By clicking send, you agree to our <a className="underline hover:text-primary" href="#">Privacy Policy</a> regarding your data.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;

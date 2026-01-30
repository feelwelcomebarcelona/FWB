import React, { useState } from 'react';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    dates: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('¡Gracias! Hemos recibido tu consulta y nos pondremos en contacto pronto.');
    setFormData({ name: '', email: '', dates: '', message: '' });
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
      {/* Columna Izquierda: Info de contacto */}
      <div className="lg:col-span-5 space-y-6">
        <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm space-y-8">
          <div className="flex gap-5">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
              <span className="material-symbols-outlined">location_on</span>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">Dirección</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Sant Lluís 51, Cornellà de Llobregat,<br/>08940 Barcelona, España</p>
            </div>
          </div>

          <div className="flex gap-5">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
              <span className="material-symbols-outlined">mail</span>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">Email</h3>
              <p className="text-gray-500 text-sm">info@feelwelcomebarcelona.com</p>
            </div>
          </div>

          <div className="flex gap-5">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
              <span className="material-symbols-outlined">call</span>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">Teléfono</h3>
              <p className="text-gray-500 text-sm">+34 930 000 000</p>
            </div>
          </div>

          <div className="pt-4">
            <button 
              onClick={() => window.open('https://wa.me/34600000000', '_blank')}
              className="w-full flex items-center justify-center gap-3 bg-[#25D366] text-white font-bold py-4 rounded-xl hover:opacity-90 transition-all shadow-lg shadow-green-500/10"
            >
              <span className="material-symbols-outlined">chat</span>
              Hablar por WhatsApp
            </button>
          </div>
        </div>

        {/* Mapa visual ficticio */}
        <div className="h-[280px] rounded-2xl overflow-hidden border border-gray-100 shadow-sm relative group">
          <img 
            src="https://images.unsplash.com/photo-1583941709766-98867bd4660e?auto=format&fit=crop&q=80&w=800" 
            className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-500" 
            alt="Map Area"
          />
          <div className="absolute inset-0 bg-blue-900/10"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="bg-white px-4 py-2 rounded-lg shadow-2xl flex items-center gap-2 border border-primary/20 animate-bounce">
              <span className="material-symbols-outlined text-primary">location_on</span>
              <span className="text-xs font-bold text-gray-900">Feel Welcome Barcelona</span>
            </div>
          </div>
        </div>
      </div>

      {/* Columna Derecha: Formulario */}
      <div className="lg:col-span-7">
        <div className="bg-white p-10 rounded-2xl border border-gray-100 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Envíanos un mensaje</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 ml-1">Nombre Completo</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Ej. Juan Pérez"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 ml-1">Email</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="juan@email.com"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 ml-1">Fechas deseadas</label>
              <div className="relative">
                <input 
                  type="text" 
                  name="dates"
                  value={formData.dates}
                  onChange={handleChange}
                  placeholder="Check-in — Check-out"
                  className="w-full pl-4 pr-10 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                />
                <span className="material-symbols-outlined absolute right-3 top-3 text-gray-400">calendar_month</span>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 ml-1">¿Cómo podemos ayudarte?</label>
              <textarea 
                rows={4}
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Cuéntanos sobre tu viaje..."
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none resize-none"
              ></textarea>
            </div>

            <button 
              type="submit"
              className="w-full bg-primary text-white font-bold py-4 rounded-xl hover:bg-primary/90 transition-all shadow-xl shadow-primary/20 text-lg"
            >
              Enviar Solicitud
            </button>
            <p className="text-center text-xs text-gray-400">
              Al enviar el formulario, aceptas nuestra política de privacidad.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
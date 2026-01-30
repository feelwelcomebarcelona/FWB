import React from 'react';

const FeaturesSection: React.FC = () => {
  const items = [
    { icon: 'sanitizer', title: 'Limpieza Profesional', desc: 'Protocolos de desinfección rigurosos antes de cada llegada.' },
    { icon: 'key', title: 'Entrada Inteligente', desc: 'Acceso sin llaves físicas para tu máxima comodidad y seguridad.' },
    { icon: 'support_agent', title: 'Atención 24/7', desc: 'Equipo local disponible a cualquier hora para asistirte.' }
  ];

  return (
    <section className="mt-24 py-12 border-t border-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {items.map((item, idx) => (
          <div key={idx} className="flex flex-col items-center text-center p-8 bg-white rounded-3xl border border-gray-50 shadow-sm hover:shadow-md transition-shadow group">
            <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all">
              <span className="material-symbols-outlined !text-4xl">{item.icon}</span>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
            <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
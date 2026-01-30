import React from 'react';

const TestimonialsSection: React.FC = () => {
  const reviews = [
    { name: 'Maria G.', text: 'El apartamento estaba impecable y la comunicación con el equipo fue excelente. Repetiremos seguro.', rating: 5 },
    { name: 'David W.', text: 'Ubicación perfecta en Cornellà, muy bien conectado con el centro. El check-in digital es genial.', rating: 5 }
  ];

  return (
    <section className="mt-20 mb-20">
      <h2 className="text-2xl font-black text-gray-900 mb-10 text-center">Lo que dicen nuestros huéspedes</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {reviews.map((r, i) => (
          <div key={i} className="bg-primary/5 p-8 rounded-3xl relative overflow-hidden">
            <span className="material-symbols-outlined absolute -right-2 -top-2 !text-8xl text-primary/5 select-none">format_quote</span>
            <div className="flex gap-1 mb-4">
              {[...Array(r.rating)].map((_, j) => (
                <span key={j} className="material-symbols-outlined text-yellow-500 !text-sm">star</span>
              ))}
            </div>
            <p className="text-gray-800 font-medium italic mb-6 leading-relaxed relative z-10">"{r.text}"</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">
                {r.name[0]}
              </div>
              <span className="font-bold text-gray-900">{r.name}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
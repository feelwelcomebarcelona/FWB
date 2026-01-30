
import React from 'react';
import { TESTIMONIALS } from '../constants';

const TestimonialsSection: React.FC = () => {
  return (
    <section className="mt-16 mb-20">
      <h2 className="text-2xl font-bold mb-10 text-center">What Our Guests Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {TESTIMONIALS.map((testimonial) => (
          <div key={testimonial.id} className="p-8 bg-primary/5 rounded-3xl relative overflow-hidden">
            <span className="material-symbols-outlined absolute top-4 right-8 text-primary/10 !text-7xl select-none">format_quote</span>
            <div className="flex text-yellow-500 mb-4">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="material-symbols-outlined !text-sm">star</span>
              ))}
            </div>
            <p className="text-lg italic text-[#111518] mb-6 relative z-10 font-medium leading-relaxed">
              {testimonial.text}
            </p>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden ring-2 ring-white shadow-sm">
                <img alt={testimonial.name} className="w-full h-full object-cover" src={testimonial.avatar} />
              </div>
              <div>
                <p className="font-bold text-sm text-[#111518]">{testimonial.name}</p>
                <p className="text-xs text-[#60778a]">{testimonial.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;

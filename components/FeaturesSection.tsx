
import React from 'react';
import { FEATURES } from '../constants';

const FeaturesSection: React.FC = () => {
  return (
    <section className="mt-20 py-10 border-t border-[#dbe1e6]">
      <h2 className="text-2xl font-bold mb-8 text-center">Safety & Cleaning Policies</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {FEATURES.map((feature, idx) => (
          <div key={idx} className="flex flex-col items-center text-center p-8 bg-white rounded-2xl border border-[#dbe1e6] shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-primary/10 p-4 rounded-full text-primary mb-5">
              <span className="material-symbols-outlined !text-3xl">{feature.icon}</span>
            </div>
            <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
            <p className="text-sm text-[#60778a] leading-relaxed">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;

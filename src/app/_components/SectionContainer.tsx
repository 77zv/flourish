import React from 'react';

interface SectionContainerProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

export function SectionContainer({ title, description, children }: SectionContainerProps) {
  return (
    <section className="py-20 bg-[#f9fafb] text-[#004838]">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-5xl font-bold mb-8">{title}</h2>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-12">
          {description}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {children}
        </div>
      </div>
    </section>
  );
} 
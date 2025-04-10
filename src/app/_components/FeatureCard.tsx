import React from 'react';

interface FeatureCardProps {
  icon: React.ReactNode;
  label: string;
  title: string;
  description: string;
}

export function FeatureCard({ icon, label, title, description }: FeatureCardProps) {
  return (
    <div className="relative bg-white p-6 rounded-xl border border-gray-200 shadow-lg">
      <div className="mb-4 flex justify-center">{icon}</div>
      <h3 className="text-xl font-bold mb-1">{label}</h3>
      <h4 className="text-[#004838] font-semibold mb-3">
        {title}
      </h4>
      <p className="text-base text-[#46536D]">{description}</p>
    </div>
  );
} 
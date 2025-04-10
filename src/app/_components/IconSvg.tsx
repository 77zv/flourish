import React from 'react';
import { 
  FaChild, 
  FaBookReader, 
  FaGraduationCap, 
  FaUniversity, 
  FaAward, 
  FaTrophy, 
  FaBrain,
  FaBuilding,
  FaGlobe
} from 'react-icons/fa';

export interface IconSvgProps {
  type: 'child' | 'reader' | 'gradCap' | 'university' | 'award' | 'trophy' | 'brain' | 'building' | 'globe';
  className?: string;
}

export function IconSvg({ type, className = "w-12 h-12 mx-auto" }: IconSvgProps) {
  const icons = {
    child: <FaChild className={className} />,
    reader: <FaBookReader className={className} />,
    gradCap: <FaGraduationCap className={className} />,
    university: <FaUniversity className={className} />,
    award: <FaAward className={className} />,
    trophy: <FaTrophy className={className} />,
    brain: <FaBrain className={className} />,
    building: <FaBuilding className={className} />,
    globe: <FaGlobe className={className} />
  };

  return icons[type] || null;
} 
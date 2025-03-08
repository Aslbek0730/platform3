import React from 'react';
import { Link } from 'react-router-dom';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface CategoryCardProps {
  icon: LucideIcon;
  title: string;
  courseCount: number;
  to: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ icon: Icon, title, courseCount, to }) => {
  return (
    <Link to={to}>
      <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
        <Icon className="w-12 h-12 text-orange-500 mb-4" />
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-500 mt-1">{courseCount} Courses</p>
      </div>
    </Link>
  );
};

export default CategoryCard;
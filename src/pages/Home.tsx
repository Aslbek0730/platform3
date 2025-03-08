import React from 'react';
import CategoryCard from '../components/CategoryCard';
import { Palette, Code, MessageSquare, Camera, LineChart, PenTool, FlaskRound as Flask, Network } from 'lucide-react';

const Home = () => {
  const categories = [
    { icon: Palette, title: 'Art & Design', count: 65, path: '/art-design' },
    { icon: Code, title: 'IT Courses', count: 58, path: '/it-courses' },
    { icon: MessageSquare, title: 'Communication', count: 45, path: '/communication' },
    { icon: Camera, title: 'Photography', count: 32, path: '/photography' },
    { icon: LineChart, title: 'Finance', count: 38, path: '/finance' },
    { icon: PenTool, title: 'Content Writing', count: 28, path: '/content-writing' },
    { icon: Flask, title: 'Science', count: 42, path: '/science' },
    { icon: Network, title: 'Network', count: 35, path: '/network' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Build Skills With Online Courses
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Start, switch, or advance your career with more than 300+ courses from expert instructors
        </p>
        <button className="bg-orange-500 text-white px-8 py-3 rounded-full hover:bg-orange-600 transition-colors">
          Get Started
        </button>
      </div>

      {/* Categories Section */}
      <div className="mb-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Top Categories</h2>
          <button className="text-orange-500 hover:text-orange-600">All Categories</button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <CategoryCard
              key={category.title}
              icon={category.icon}
              title={category.title}
              courseCount={category.count}
              to={category.path}
            />
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
        <div className="text-center">
          <h3 className="text-3xl font-bold text-orange-500">250+</h3>
          <p className="text-gray-600">Active Students</p>
        </div>
        <div className="text-center">
          <h3 className="text-3xl font-bold text-orange-500">899</h3>
          <p className="text-gray-600">Total Courses</p>
        </div>
        <div className="text-center">
          <h3 className="text-3xl font-bold text-orange-500">119</h3>
          <p className="text-gray-600">Instructors</p>
        </div>
        <div className="text-center">
          <h3 className="text-3xl font-bold text-orange-500">100%</h3>
          <p className="text-gray-600">Satisfaction Rate</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
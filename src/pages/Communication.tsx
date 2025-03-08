import React from 'react';

const Communication = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Communication Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Public Speaking Mastery</h2>
          <p className="text-gray-600 mb-4">Develop confidence and speaking skills</p>
          <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Communication;
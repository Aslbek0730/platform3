import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap } from 'lucide-react';
import { useAuth } from './AuthProvider';
import { supabase } from '../lib/supabase';
import toast from 'react-hot-toast';

const Navbar = () => {
  const { user } = useAuth();

  const handleLogout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      toast.success('Logged out successfully');
    } catch (error: any) {
      toast.error(error.message || 'Error logging out');
    }
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <GraduationCap className="h-8 w-8 text-orange-500" />
              <span className="ml-2 text-xl font-bold text-gray-800">Shams Academy</span>
            </Link>
          </div>
          <div className="flex items-center">
            {user ? (
              <button
                onClick={handleLogout}
                className="text-gray-600 hover:text-gray-900 px-3 py-2"
              >
                Logout
              </button>
            ) : (
              <>
                <Link to="/login" className="text-gray-600 hover:text-gray-900 px-3 py-2">
                  Login
                </Link>
                <Link
                  to="/register"
                  className="ml-4 px-4 py-2 rounded-md text-white bg-orange-500 hover:bg-orange-600"
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
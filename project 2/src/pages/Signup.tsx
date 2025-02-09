import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { signUp } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      return setError('Passwords do not match');
    }

    try {
      setError('');
      setLoading(true);
      await signUp(email, password);
      navigate('/dashboard');
    } catch (err) {
      setError('Failed to create an account');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-md mx-auto">
        <h1 className="text-4xl font-bold text-[#8B7355] mb-8 text-center">Create Account</h1>
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}
        <form onSubmit={handleSubmit} className="bg-[#F5F5DC] p-8 rounded-lg">
          <div className="mb-6">
            <label htmlFor="email" className="block text-[#8B7355] mb-2">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-[#D4C4A8] focus:outline-none focus:border-[#8B7355]"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-[#8B7355] mb-2">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-[#D4C4A8] focus:outline-none focus:border-[#8B7355]"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="confirm-password" className="block text-[#8B7355] mb-2">Confirm Password</label>
            <input
              type="password"
              id="confirm-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-[#D4C4A8] focus:outline-none focus:border-[#8B7355]"
              required
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#D4C4A8] text-white py-3 rounded-lg hover:bg-[#8B7355] transition-colors disabled:opacity-50"
          >
            {loading ? 'Creating Account...' : 'Create Account'}
          </button>
        </form>
        <p className="mt-4 text-center text-[#8B7355]">
          Already have an account?{' '}
          <Link to="/login" className="text-[#8B7355] hover:text-[#6B5B45] underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
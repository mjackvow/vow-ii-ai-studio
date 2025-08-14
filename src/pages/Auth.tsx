import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';

const Auth: React.FC = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { signIn, signUp } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      if (isSignUp) await signUp(email, password);
      else await signIn(email, password);
    } catch (error: any) {
      console.error(error);
      setError(error.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-background">
      <div className="bg-card p-8 rounded-lg shadow-lg border border-border w-full max-w-md">
        <h2 className="text-2xl mb-6 text-center text-foreground">{isSignUp ? 'Sign Up' : 'Sign In'}</h2>
        {error && (
          <div className="mb-4 p-3 bg-destructive/10 border border-destructive text-destructive rounded">
            {error}
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="block w-full mb-4 p-3 border border-input rounded focus:outline-none focus:ring-2 focus:ring-ring bg-background text-foreground"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="block w-full mb-6 p-3 border border-input rounded focus:outline-none focus:ring-2 focus:ring-ring bg-background text-foreground"
            required
            minLength={6}
          />
          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-primary text-primary-foreground px-4 py-3 rounded hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {loading ? 'Processing...' : (isSignUp ? 'Sign Up' : 'Sign In')}
          </button>
        </form>
        <button 
          onClick={() => setIsSignUp(!isSignUp)} 
          className="mt-4 text-primary hover:text-primary/80 w-full text-center transition-colors"
        >
          {isSignUp ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"}
        </button>
      </div>
    </div>
  );
};

export default Auth;
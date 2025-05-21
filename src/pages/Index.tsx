import React from 'react';
import { Link } from 'react-router-dom';

const Index: React.FC = () => {
    return (
        <div className= "p-8" >
        <h1 className="text-4xl mb-4" > Welcome to VOW II AI Studio < /h1>
            < p > Your AI - powered content creation platform.< /p>
                < Link to = "/auth" className = "mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded" >
                    Get Started
                        < /Link>
                        < /div>
  );
};

export default Index;
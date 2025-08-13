import React from 'react';
import { Link } from 'react-router-dom';

const AITools: React.FC = () => {
    return (
        <div className="p-8">
            <h1 className="text-3xl mb-4">AI Tools</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link to="/ai-tools/content-generator" className="p-4 border rounded hover:bg-gray-50">
                    <h2 className="text-xl">Content Generator</h2>
                    <p>Generate text content using AI.</p>
                </Link>
                <div className="p-4 border rounded opacity-50">
                    <h2 className="text-xl">Image Generator</h2>
                    <p>Coming Soon</p>
                </div>
            </div>
        </div>
    );
};

export default AITools;
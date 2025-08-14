import React from 'react';
import { Link } from 'react-router-dom';

const AITools: React.FC = () => {
    return (
        <div className="p-8 bg-background min-h-screen">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl mb-6 text-foreground">AI Tools</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Link to="/ai-tools/content-generator" className="p-6 bg-card border border-border rounded-lg hover:bg-accent/50 transition-colors">
                        <h2 className="text-xl font-semibold mb-2 text-foreground">Content Generator</h2>
                        <p className="text-muted-foreground">Generate text content using AI.</p>
                    </Link>
                    <div className="p-6 bg-card border border-border rounded-lg opacity-50">
                        <h2 className="text-xl font-semibold mb-2 text-foreground">Image Generator</h2>
                        <p className="text-muted-foreground">Coming Soon</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AITools;
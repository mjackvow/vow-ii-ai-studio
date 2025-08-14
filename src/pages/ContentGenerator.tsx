import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { checkAndUseTokens } from '../services/tokenService';

const ContentGenerator: React.FC = () => {
    const [prompt, setPrompt] = useState('');
    const [result, setResult] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const { user } = useAuth();

    const handleGenerate = async () => {
        if (!user) {
            setError('Please sign in to use this feature');
            return;
        }

        setLoading(true);
        setError('');
        try {
            const hasEnoughTokens = await checkAndUseTokens(user.id, 500);
            if (!hasEnoughTokens) {
                setError('Not enough tokens');
                return;
            }
            const generatedText = `Mock generated content for prompt: ${prompt}`;
            setResult(generatedText);
        } catch (error) {
            console.error(error);
            setError('Failed to generate content');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="p-8 bg-background min-h-screen">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl mb-6 text-foreground">Content Generator</h1>
                <div className="space-y-6">
                    <div className="bg-card p-6 rounded-lg border border-border">
                        <label className="block text-sm font-medium mb-2 text-foreground">Prompt</label>
                        <textarea
                            value={prompt}
                            onChange={(e) => setPrompt(e.target.value)}
                            placeholder="Enter your prompt"
                            className="w-full p-3 border border-input rounded focus:outline-none focus:ring-2 focus:ring-ring bg-background text-foreground"
                            rows={4}
                        />
                    </div>
                    <button
                        onClick={handleGenerate}
                        disabled={loading || !prompt.trim()}
                        className="bg-primary text-primary-foreground px-6 py-3 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary/90 transition-colors"
                    >
                        {loading ? 'Generating...' : 'Generate'}
                    </button>
                    {error && (
                        <div className="p-4 border border-destructive bg-destructive/10 text-destructive rounded-lg">
                            {error}
                        </div>
                    )}
                    {result && (
                        <div className="bg-card p-6 rounded-lg border border-border">
                            <h2 className="text-xl mb-4 text-foreground">Generated Content:</h2>
                            <p className="text-muted-foreground whitespace-pre-wrap">{result}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ContentGenerator;
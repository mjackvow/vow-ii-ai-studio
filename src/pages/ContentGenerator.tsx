import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { checkAndUseTokens } from '../services/tokenService';

const ContentGenerator: React.FC = () => {
    const [prompt, setPrompt] = useState('');
    const [result, setResult] = useState('');
    const [loading, setLoading] = useState(false);
    const { user } = useAuth();

    const handleGenerate = async () => {
        setLoading(true);
        try {
            const hasEnoughTokens = await checkAndUseTokens(user!.id, 500);
            if (!hasEnoughTokens) {
                alert('Not enough tokens');
                return;
            }
            const generatedText = `Mock generated content for prompt: ${prompt}`;
            setResult(generatedText);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className= "p-8" >
        <h1 className="text-3xl mb-4" > Content Generator < /h1>
            < textarea
    value = { prompt }
    onChange = {(e) => setPrompt(e.target.value)}
placeholder = "Enter your prompt"
className = "w-full p-2 border mb-4"
    />
    <button
        onClick={ handleGenerate }
disabled = { loading }
className = "bg-blue-500 text-white px-4 py-2 rounded"
    >
    { loading? 'Generating...' : 'Generate'}
    < /button>
{
    result && (
        <div className="mt-4 p-4 border" >
            <h2 className="text-xl mb-2" > Generated Content: </h2>
                < p > { result } < /p>
                < /div>
      )
}
</div>
  );
};

export default ContentGenerator;
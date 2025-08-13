import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import Navigation from './components/Navigation';
import Index from './pages/Index';
import Auth from './pages/Auth';
import Dashboard from './pages/Dashboard';
import AITools from './pages/AITools';
import ContentGenerator from './pages/ContentGenerator';

const App: React.FC = () => {
    const { user } = useAuth();

    return (
        <Router>
            <div className="min-h-screen bg-gray-50">
                {user && <Navigation />}
                <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/auth" element={<Auth />} />
                    {user ? (
                        <>
                            <Route path="/dashboard" element={<Dashboard />} />
                            <Route path="/ai-tools" element={<AITools />} />
                            <Route path="/ai-tools/content-generator" element={<ContentGenerator />} />
                        </>
                    ) : (
                        <Route path="*" element={<Auth />} />
                    )}
                </Routes>
            </div>
        </Router>
    );
};

export default App;

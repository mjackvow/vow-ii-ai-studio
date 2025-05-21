import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import Index from './pages/Index';
import Auth from './pages/Auth';
import Dashboard from './pages/Dashboard';
import AITools from './pages/AITools';
import ContentGenerator from './pages/ContentGenerator';

const App: React.FC = () => {
    const { user } = useAuth();

    return (
        <Router>
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
        </Router>
    );
};

export default App;

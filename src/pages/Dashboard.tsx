import React from 'react';
import { useUserProfile } from '../hooks/useUserProfile';
import Loading from '../components/Loading';

const Dashboard: React.FC = () => {
    const { data: profile, isLoading, error } = useUserProfile();

    if (isLoading) return <Loading size="large" text="Loading dashboard..." />;
    if (error) return <div className="p-8 text-red-500">Error loading profile</div>;

    return (
        <div className="p-8">
            <h1 className="text-3xl mb-4">Dashboard</h1>
            <p>Welcome, {profile?.full_name || 'User'}</p>
            <p>Plan: {profile?.plan || 'Free'}</p>
            <p>Tokens used: {profile?.tokens_used || 0} / {profile?.total_tokens || 1000}</p>
        </div>
    );
};

export default Dashboard;
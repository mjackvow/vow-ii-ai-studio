import React from 'react';
import { useUserProfile } from '../hooks/useUserProfile';
import Loading from '../components/Loading';

const Dashboard: React.FC = () => {
    const { data: profile, isLoading, error } = useUserProfile();

    if (isLoading) return <Loading size="large" text="Loading dashboard..." />;
    if (error) return <div className="p-8 text-red-500">Error loading profile</div>;

    return (
        <div className="p-8 bg-background min-h-screen">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl mb-6 text-foreground">Dashboard</h1>
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-card p-6 rounded-lg border border-border">
                        <h2 className="text-lg font-semibold mb-2 text-foreground">Welcome</h2>
                        <p className="text-muted-foreground">{profile?.full_name || 'User'}</p>
                    </div>
                    <div className="bg-card p-6 rounded-lg border border-border">
                        <h2 className="text-lg font-semibold mb-2 text-foreground">Plan</h2>
                        <p className="text-muted-foreground">{profile?.plan || 'Free'}</p>
                    </div>
                    <div className="bg-card p-6 rounded-lg border border-border">
                        <h2 className="text-lg font-semibold mb-2 text-foreground">Token Usage</h2>
                        <p className="text-muted-foreground">{profile?.tokens_used || 0} / {profile?.total_tokens || 1000}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
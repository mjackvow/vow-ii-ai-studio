import React from 'react';
import { useUserProfile } from '../hooks/useUserProfile';

const Dashboard: React.FC = () => {
    const { data: profile, isLoading } = useUserProfile();

    if (isLoading) return <div>Loading...</div>;

    return (
        <div className= "p-8" >
        <h1 className="text-3xl mb-4" > Dashboard < /h1>
            < p > Welcome, { profile.full_name } < /p>
            < p > Plan: { profile.plan } </p>
                < p > Tokens used: { profile.tokens_used } / {profile.total_tokens}</p >
                    </div>
  );
};

export default Dashboard;
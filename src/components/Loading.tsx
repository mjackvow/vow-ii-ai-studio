import React from 'react';

interface LoadingProps {
    size?: 'small' | 'medium' | 'large';
    text?: string;
}

const Loading: React.FC<LoadingProps> = ({ size = 'medium', text = 'Loading...' }) => {
    const sizeClasses = {
        small: 'w-4 h-4',
        medium: 'w-8 h-8',
        large: 'w-12 h-12'
    };

    return (
        <div className="flex flex-col items-center justify-center p-4">
            <div className={`${sizeClasses[size]} animate-spin rounded-full border-4 border-muted border-t-primary`}></div>
            {text && <p className="mt-2 text-muted-foreground">{text}</p>}
        </div>
    );
};

export default Loading; 
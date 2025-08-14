import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
    children: ReactNode;
}

interface State {
    hasError: boolean;
    error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false
    };

    public static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error('Uncaught error:', error, errorInfo);
    }

    public render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen flex items-center justify-center bg-background">
                    <div className="max-w-md w-full bg-card shadow-lg rounded-lg p-6 border border-border">
                        <div className="text-center">
                            <h1 className="text-2xl font-bold text-foreground mb-4">
                                Something went wrong
                            </h1>
                            <p className="text-muted-foreground mb-4">
                                We're sorry, but something unexpected happened. Please try refreshing the page.
                            </p>
                            <button
                                onClick={() => window.location.reload()}
                                className="bg-primary text-primary-foreground px-4 py-2 rounded hover:bg-primary/90 transition-colors"
                            >
                                Refresh Page
                            </button>
                        </div>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary; 
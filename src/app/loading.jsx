import { Spinner } from '@heroui/react';
import React from 'react';

const LoadingPage = () => {
    return (
        <div className="flex flex-col items-center gap-2 my-30 h-60">
            <Spinner size="xl" />
            <span className="text-xs text-muted">Extra Large</span>
        </div>
    );
};

export default LoadingPage;
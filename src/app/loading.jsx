import { Spinner } from '@heroui/react';
import React from 'react';

const LoadingPage = () => {
    return (
        <div className="flex flex-col items-center gap-2 mt-20">
            <Spinner size="xl" />
            <span className="text-xs text-muted">Extra Large</span>
        </div>
    );
};

export default LoadingPage;
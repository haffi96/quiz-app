'use client';

import { useEffect } from 'react';

export default function Error({
    error,
    reset,
}: {
    error: Error;
    reset: () => void;
}) {
    useEffect(() => {
        // TODO: Log the error to an error reporting service - probably pino
        console.error(error);
    }, [error]);

    return (
        <div className='container m-auto text-center'>
            <p>Something went wrong!</p>
            <p>Error: {error.message}</p>
            <button
                onClick={
                    // Attempt to recover by trying to re-render the segment
                    () => reset()
                }
            >
                Try again
            </button>
        </div>
    );
}

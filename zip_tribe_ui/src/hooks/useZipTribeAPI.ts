import { useState, useEffect } from 'react';

interface UseZipTribeHook {
    data: any; // Replace 'any' with a more specific type based on what data you expect
    loading: boolean;
    error: string | null;
}

const useZipTribeAPI = (endpoint: string): UseZipTribeHook => {
    const [data, setData] = useState<any>(null); // Replace 'any' with a specific type
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch(`[Your FastAPI Server URL]/${endpoint}`);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const json = await response.json();
                setData(json);
            } catch (e) {
                if (e instanceof Error) {
                    setError(e.message);
                } else {
                    setError('An unexpected error occurred');
                }
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [endpoint]);


    return { data, loading, error };
};

export default useZipTribeAPI;

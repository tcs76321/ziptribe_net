import { useState, useEffect } from 'react';

interface UseZipTribeHook<T> {
    data: T | null;
    loading: boolean;
    error: string | null;
}

interface RequestConfig {
    method?: string;
    headers?: HeadersInit;
    body?: BodyInit | null;
}

const useZipTribeAPI = <T>(endpoint: string, config?: RequestConfig): UseZipTribeHook<T> => {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const abortController = new AbortController();
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch(`[Your FastAPI Server URL]/${endpoint}`, {
                    signal: abortController.signal,
                    method: config?.method || 'GET',
                    headers: config?.headers || {},
                    body: config?.body || null
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const json = await response.json();
                setData(json);
            } catch (e) {
                if (!abortController.signal.aborted) {
                    if (e instanceof Error) {
                        setError(e.message);
                    } else {
                        setError('An unexpected error occurred');
                    }
                }
            } finally {
                setLoading(false);
            }
        };

        fetchData();
        return () => {
            abortController.abort();
        };
    }, [endpoint, config]);

    return { data, loading, error };
};

export default useZipTribeAPI;

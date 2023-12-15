// Import necessary libraries
import { useState, useEffect } from 'react';

// Define the hook interface with data, loading, error, and setError
interface UseZipTribeHook<T> {
    data: T | null; // This allows us to show data when it's available
    loading: boolean; // This allows us to show a loading spinner
    error: string | null; // This allows us to show an error message
    setError: (error: string) => void; // This allows us to set the error message if needed
}

// Define the config interface for optional method, headers, and body
interface RequestConfig {
    method?: string;
    headers?: HeadersInit;
    body?: BodyInit | null;
}


/**
 * Custom hook for fetching data from the ZipTribe API with secure practices.
 * @param endpoint - The API endpoint to fetch data from.
 * @param config - Optional configuration object for method, headers, and body.
 * @returns An object containing data, loading state, error message, and error setter.
 */
const useZipTribeAPI = <T>(endpoint: string, config?: RequestConfig): UseZipTribeHook<T> => {
    // State variables for data, loading state, and error message
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    // Abort controller for canceling requests
    const abortController = new AbortController();

    // Function to fetch data from the API
    const fetchData = async () => {
        // Set loading state to true
        setLoading(true);

        try {
            // Build the API request URL with base URL and endpoint
            const url = `[FastAPI Server URL]/${endpoint}`;

            // Send the request with AbortSignal to prevent hanging requests
            const response = await fetch(url, {
                signal: abortController.signal,
                method: config?.method || 'GET',
                headers: config?.headers || {},
                body: config?.body === undefined ? null : config?.body,
            });

            // Check for response status code
            if (!response.ok) {
                // Handle different error types based on status code
                if (response.status === 400) { // Bad Request
                    const text = await response.text();
                    throw new Error(`Bad request: ${text}`);
                } else if (response.status === 401) { // Unauthorized
                    throw new Error('Unauthorized access. Please check your credentials.');
                } else { // Other errors
                    const text = await response.text();
                    throw new Error(`API error! status: ${response.status} - ${text}`);
                }
            }

            // Parse JSON response data
            const json = await response.json();

            // Update data state with successful response
            setData(json);
        } catch (e) {
            // Handle errors and abort if not already aborted
            if (!abortController.signal.aborted) {
                if (e instanceof Error) {
                    setError(e.message); // Log specific error message
                    console.error('API Error:', e); // Securely log error details
                } else {
                    setError('An unexpected error occurred.');
                    console.error('Uncaught Error:', e); // Securely log error details
                }
            }
        } finally {
            // Set loading state back to false
            setLoading(false);
        }
    };

    // Execute the data fetch on mount and re-render with new endpoint or config
    useEffect(() => {
        fetchData();
    }, [endpoint, config]);

    // Abort any pending requests on unmount
    useEffect(() => () => abortController.abort(), []);

    // Return the hook with data, loading, error, and error setter
    return { data, loading, error, setError };
};

export default useZipTribeAPI;

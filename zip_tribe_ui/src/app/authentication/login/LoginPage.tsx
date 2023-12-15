// Import necessary libraries
import React, { useState } from 'react';
import useZipTribeAPI from '../../../hooks/useZipTribeAPI';

function LoginPage() {
    // State variables for username, password, and error
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null); // Explicitly define type for error

    // Use the `useZipTribeAPI` hook
    const { data, loading } = useZipTribeAPI('/login', { // Only use data and loading from the hook
        method: 'POST',
        body: JSON.stringify({ username, password }),
    });

    // Address "e implicitly has an any type" error
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!username || !password) {
            setError('Please fill in all fields.'); // Use setError from state
            return;
        }
        try {
            // Handle successful login: navigate to home page, store token etc.
            // This logic depends on your API response format and desired actions
            if (data) {
                // TODO: Implement logic to navigate to home page and store token based on data
                console.log('Successful login!', data);
            } else {
                // TODO: Handle potential successful login scenarios without data
                console.log('Successful login without data!');
            }
        } catch (error) {
            // Use the actual error message from the catch block
            if (error instanceof Error) {
                // Now TypeScript knows that error is an Error object and has a message property
                setError(error.message);
            } else {
                // Fallback error message for cases where error is not an Error object
                setError('An unexpected error occurred.');
            }
        }
    };

    // Render the login form
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" disabled={loading}>
                {loading ? 'Logging in...' : 'Log In'}
            </button>
            {error && <p className="error">{error}</p>}
        </form>
    );
}

export default LoginPage;

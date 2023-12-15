import React, { useState } from 'react';
import useZipTribeAPI from '../../../hooks/useZipTribeAPI';

function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { data, loading, setError } = useZipTribeAPI('/login', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!username || !password) {
            setError('Please fill in all fields.'); // Use setError from the hook
            return;
        }
        try {
            await useZipTribeAPI('/login', {
                method: 'POST',
                body: JSON.stringify({ username, password }),
            });
            // Handle successful login: navigate to home page, store token etc.
        } catch (error) {
            setError(error.message); // Use the actual error message
        }
    };

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

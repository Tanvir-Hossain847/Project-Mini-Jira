import React, { useState, use } from 'react';
import { Link, useNavigate } from 'react-router';
import { Card, Label, TextInput, Alert } from 'flowbite-react';
import { AuthContext } from '../../Context/AuthContext';
import { Chrome, AlertCircle } from 'lucide-react';
import Logo from '../../components/Logo/Logo';

const Login = () => {
    const { signInUser, signInGoogle, setLoading } = use(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        try {
            await signInUser(email, password);
            navigate('/');
        } catch (error) {
            setError(error.message);
        } finally {
            setIsLoading(false);
            setLoading(false);
        }
    };

    const handleGoogleLogin = async () => {
        setError('');
        setIsLoading(true);

        try {
            await signInGoogle();
            navigate('/');
        } catch (error) {
            setError(error.message);
        } finally {
            setIsLoading(false);
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-base-300 flex items-center justify-center px-4">
            <div className="w-full max-w-md">
                {/* Logo Section */}
                <div className="text-center mb-8">
                    <Link to="/" className="inline-block">
                        <Logo />
                    </Link>
                    <h1 className="text-3xl font-bold text-white mt-4">Welcome Back</h1>
                    <p className="text-gray-400 mt-2">Sign in to your CYRO account</p>
                </div>

                {/* Login Card */}
                <Card className="bg-neutral-800 border-neutral-700">
                    <form onSubmit={handleLogin} className="space-y-6">
                        {error && (
                            <Alert color="failure" icon={AlertCircle}>
                                <span className="font-medium">Error:</span> {error}
                            </Alert>
                        )}

                        <div>
                            <Label htmlFor="email" value="Email" className="text-white mb-2 block" />
                            <TextInput
                                id="email"
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="bg-neutral-700 border-neutral-600 text-white"
                            />
                        </div>

                        <div>
                            <Label htmlFor="password" value="Password" className="text-white mb-2 block" />
                            <TextInput
                                id="password"
                                type="password"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="bg-neutral-700 border-neutral-600 text-white"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-emerald-600 hover:bg-emerald-700 disabled:bg-emerald-400 text-white font-medium py-2.5 px-5 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-4 focus:ring-emerald-300"
                        >
                            {isLoading ? 'Signing In...' : 'Sign In'}
                        </button>
                    </form>

                    {/* Divider */}
                    <div className="flex items-center my-2">
                        <div className="flex-1 border-t border-neutral-600"></div>
                        <span className="px-4 text-gray-400 text-sm">or</span>
                        <div className="flex-1 border-t border-neutral-600"></div>
                    </div>

                    {/* Google Login */}
                    <button
                        onClick={handleGoogleLogin}
                        disabled={isLoading}
                        className="w-full bg-base-200 hover:bg-gray-50 hover:text-black disabled:bg-gray-100 text-white font-medium py-2.5 px-5 rounded-lg transition-colors duration-200  flex items-center justify-center"
                    >
                        <Chrome className="mr-2 h-5 w-5" />
                        Continue with Google
                    </button>

                    {/* Footer Links */}
                    <div className="text-center mt-6 space-y-2">
                        <p className="text-gray-400 text-sm">
                            Don't have an account?{' '}
                            <Link to="/auth/registration" className="text-emerald-500 hover:text-emerald-400 font-medium">
                                Sign up
                            </Link>
                        </p>
                        <Link to="/auth/forgot-password" className="text-emerald-500 hover:text-emerald-400 text-sm">
                            Forgot your password?
                        </Link>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default Login;
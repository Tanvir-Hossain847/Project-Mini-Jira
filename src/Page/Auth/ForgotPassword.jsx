import React, { useState, use } from 'react';
import { Link } from 'react-router';
import { Card, Label, TextInput, Alert } from 'flowbite-react';
import { AuthContext } from '../../Context/AuthContext';
import { AlertCircle, CheckCircle } from 'lucide-react';
import Logo from '../../components/Logo/Logo';

const ForgotPassword = () => {
    const { passwordReset, setLoading } = use(AuthContext);
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handlePasswordReset = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');
        setIsLoading(true);

        try {
            await passwordReset(email);
            setSuccess('Password reset email sent! Check your inbox for further instructions.');
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
                    <h1 className="text-3xl font-bold text-white mt-4">Reset Password</h1>
                    <p className="text-gray-400 mt-2">Enter your email to receive reset instructions</p>
                </div>

                {/* Reset Password Card */}
                <Card className="bg-neutral-800 border-neutral-700">
                    <form onSubmit={handlePasswordReset} className="space-y-6">
                        {error && (
                            <Alert color="failure" icon={AlertCircle}>
                                <span className="font-medium">Error:</span> {error}
                            </Alert>
                        )}

                        {success && (
                            <Alert color="success" icon={CheckCircle}>
                                <span className="font-medium">Success:</span> {success}
                            </Alert>
                        )}

                        <div>
                            <Label htmlFor="email" value="Email Address" className="text-white mb-2 block" />
                            <TextInput
                                id="email"
                                type="email"
                                placeholder="Enter your email address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="bg-neutral-700 border-neutral-600 text-white"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading || success}
                            className="w-full bg-emerald-600 hover:bg-emerald-700 disabled:bg-emerald-400 text-white font-medium py-2.5 px-5 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-4 focus:ring-emerald-300"
                        >
                            {isLoading ? 'Sending...' : 'Send Reset Email'}
                        </button>
                    </form>

                    {/* Footer Links */}
                    <div className="text-center mt-6 space-y-2">
                        <Link to="/auth/login" className="text-emerald-500 hover:text-emerald-400 text-sm">
                            ← Back to Sign In
                        </Link>
                        <p className="text-gray-400 text-sm">
                            Don't have an account?{' '}
                            <Link to="/auth/registration" className="text-emerald-500 hover:text-emerald-400 font-medium">
                                Sign up
                            </Link>
                        </p>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default ForgotPassword;
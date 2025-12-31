import React, { useState, use } from 'react';
import { Link, useNavigate } from 'react-router';
import { Card, Label, TextInput, Alert } from 'flowbite-react';
import { AuthContext } from '../../Context/AuthContext';
import { Chrome, AlertCircle } from 'lucide-react';
import Logo from '../../components/Logo/Logo';

const Registration = () => {
    const { createUser, signInGoogle, updateUserProfile, setLoading } = use(AuthContext);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleRegistration = async (e) => {
        e.preventDefault();
        setError('');

        // Validation
        if (formData.password !== formData.confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        if (formData.password.length < 6) {
            setError('Password must be at least 6 characters long');
            return;
        }

        setIsLoading(true);

        try {
            // Create user account
            const result = await createUser(formData.email, formData.password);
            
            // Update user profile with name
            await updateUserProfile(formData.name, null);
            
            navigate('/');
        } catch (error) {
            setError(error.message);
        } finally {
            setIsLoading(false);
            setLoading(false);
        }
    };

    const handleGoogleSignup = async () => {
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
                <div className="text-center my-8">
                    <Link to="/" className="inline-block">
                        <Logo />
                    </Link>
                    <h1 className="text-3xl font-bold text-white mt-4">Join CYRO</h1>
                    <p className="text-gray-400 mt-2">Create your account and start managing projects</p>
                </div>

                {/* Registration Card */}
                <Card className="bg-neutral-800 my-15 border-neutral-700">
                    <form onSubmit={handleRegistration} className="space-y-6">
                        {error && (
                            <Alert color="failure" icon={AlertCircle}>
                                <span className="font-medium">Error:</span> {error}
                            </Alert>
                        )}

                        <div>
                            <Label htmlFor="name" value="Full Name" className="text-white mb-2 block" />
                            <TextInput
                                id="name"
                                name="name"
                                type="text"
                                placeholder="Enter your full name"
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                                className="bg-neutral-700 border-neutral-600 text-white"
                            />
                        </div>

                        <div>
                            <Label htmlFor="email" value="Email" className="text-white mb-2 block" />
                            <TextInput
                                id="email"
                                name="email"
                                type="email"
                                placeholder="Enter your email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                                className="bg-neutral-700 border-neutral-600 text-white"
                            />
                        </div>

                        <div>
                            <Label htmlFor="password" value="Password" className="text-white mb-2 block" />
                            <TextInput
                                id="password"
                                name="password"
                                type="password"
                                placeholder="Create a password (min. 6 characters)"
                                value={formData.password}
                                onChange={handleInputChange}
                                required
                                className="bg-neutral-700 border-neutral-600 text-white"
                            />
                        </div>

                        <div>
                            <Label htmlFor="confirmPassword" value="Confirm Password" className="text-white mb-2 block" />
                            <TextInput
                                id="confirmPassword"
                                name="confirmPassword"
                                type="password"
                                placeholder="Confirm your password"
                                value={formData.confirmPassword}
                                onChange={handleInputChange}
                                required
                                className="bg-neutral-700 border-neutral-600 text-white"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-emerald-600 hover:bg-emerald-700 disabled:bg-emerald-400 text-white font-medium py-2.5 px-5 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-4 focus:ring-emerald-300"
                        >
                            {isLoading ? 'Creating Account...' : 'Create Account'}
                        </button>
                    </form>

                    {/* Divider */}
                    <div className="flex items-center my-6">
                        <div className="flex-1 border-t border-neutral-600"></div>
                        <span className="px-4 text-gray-400 text-sm">or</span>
                        <div className="flex-1 border-t border-neutral-600"></div>
                    </div>

                    {/* Google Signup */}
                    <button
                        onClick={handleGoogleSignup}
                        disabled={isLoading}
                        className="w-full bg-white hover:bg-gray-50 disabled:bg-gray-100 text-gray-900 font-medium py-2.5 px-5 rounded-lg border border-gray-300 transition-colors duration-200 focus:outline-none focus:ring-4 focus:ring-gray-200 flex items-center justify-center"
                    >
                        <Chrome className="mr-2 h-5 w-5" />
                        Continue with Google
                    </button>

                    {/* Footer Links */}
                    <div className="text-center mt-6">
                        <p className="text-gray-400 text-sm">
                            Already have an account?{' '}
                            <Link to="/auth/login" className="text-emerald-500 hover:text-emerald-400 font-medium">
                                Sign in
                            </Link>
                        </p>
                    </div>

                    {/* Terms */}
                    <div className="text-center mt-4">
                        <p className="text-gray-500 text-xs">
                            By creating an account, you agree to our{' '}
                            <Link to="/terms" className="text-emerald-500 hover:text-emerald-400">
                                Terms of Service
                            </Link>{' '}
                            and{' '}
                            <Link to="/privacy" className="text-emerald-500 hover:text-emerald-400">
                                Privacy Policy
                            </Link>
                        </p>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default Registration;
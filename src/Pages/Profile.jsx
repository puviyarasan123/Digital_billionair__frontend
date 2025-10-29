import React, { useState, useEffect } from "react";
import { UserCircle, Loader, AlertCircle, X } from "lucide-react";

// --- Configuration ---
// IMPORTANT: Ensure your Flask server is running at this address.
const SERVER_URL = "http://localhost:5000"; 

// --- Profile Component: Fetches and displays user data ---
/**
 * Displays the user's detailed profile information fetched from the backend.
 * @param {object} props - Contains the navigate function for routing back to the dashboard.
 */
function Profile({ navigate }) {
    const [profileData, setProfileData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const userEmail = localStorage.getItem("user");

        if (!userEmail) {
            setError("Authentication error: Please log in again.");
            setIsLoading(false);
            return;
        }

        const fetchProfile = async () => {
            try {
                // Fetch user data using the stored email as a query parameter
                const res = await fetch(`${SERVER_URL}/profile?email=${encodeURIComponent(userEmail)}`, {
                    method: 'GET',
                    headers: { 'Content-Type': 'application/json' },
                });

                if (res.ok) {
                    const data = await res.json();
                    setProfileData(data);
                } else {
                    const errorData = await res.json();
                    setError(errorData.error || "Failed to fetch profile data.");
                }
            } catch (err) {
                // Catches network errors (e.g., server not running)
                setError("Network error: Could not connect to the server. Ensure Flask server is running on " + SERVER_URL);
            } finally {
                setIsLoading(false);
            }
        };

        fetchProfile();
    }, [navigate]);

    // --- Loading State ---
    if (isLoading) {
        return (
            <div className="flex justify-center items-center min-h-screen bg-gray-50">
                <Loader size={48} className="animate-spin text-blue-700" />
                <p className="ml-4 text-gray-700">Loading Profile...</p>
            </div>
        );
    }

    // --- Error State ---
    if (error) {
        return (
            <div className="flex justify-center items-center min-h-screen bg-gray-100">
                <div className="bg-white p-10 rounded-2xl shadow-xl max-w-lg text-center">
                    <AlertCircle size={48} className="text-red-500 mx-auto mb-4" />
                    <h2 className="text-2xl font-bold text-red-700 mb-2">Error</h2>
                    <p className="text-gray-600 mb-6">{error}</p>
                    <button 
                        onClick={() => navigate('dashboard')}
                        className="bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors shadow-md"
                    >
                        Go to Dashboard
                    </button>
                </div>
            </div>
        );
    }

    // --- Helper Component for Field Display ---
    const ProfileField = ({ label, value }) => (
        <div className="mb-4">
            <p className="text-sm font-medium text-gray-500">{label}</p>
            <p className="text-lg font-semibold text-gray-800 break-words">{value}</p>
            <hr className="mt-1 border-gray-200" />
        </div>
    );

    // --- Main Render ---
    return (
        <div className="min-h-screen flex flex-col bg-gray-50  top-10 px-10 py-30 w-screen h-[60%]">
            <div className="max-w-4xl mx-auto">
                <header className="flex justify-between items-center bg-blue-700 text-white p-6 rounded-t-2xl shadow-md">
                    <h1 className="text-3xl font-bold">👤 User Profile</h1>
                </header>

                <div className="bg-white shadow-xl rounded-b-2xl p-6 md:p-10">
                    <div className="flex flex-col md:flex-row items-center justify-between mb-8 pb-4 border-b">
                        <div className="flex items-center gap-4">
                            <UserCircle size={60} className="text-blue-700" />
                            <div>
                                <p className="text-2xl font-extrabold text-gray-900 capitalize">
                                    {profileData?.owner_name || 'N/A'}
                                </p>
                                <p className="text-md text-gray-500">
                                    {profileData?.business_name || 'Business Name Missing'}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                        <ProfileField label="Email Address" value={profileData?.email || 'N/A'} />
                        <ProfileField label="Phone Number" value={profileData?.phone || 'N/A'} />
                        <ProfileField label="Business Sector" value={profileData?.sector || 'N/A'} />
                        <ProfileField label="Location" value={profileData?.location || 'N/A'} />
                    </div>

                    <div className="mt-10 text-center pt-4 border-t border-gray-100">
                         <p className="text-gray-500 text-sm italic">
                             These details are registered with your account.
                         </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

// --- Mock Export for Standalone Runnability ---
// This is required to render the component for preview.
export default function App() {
    // Mocking the navigate function for testing purposes
    const mockNavigate = (page) => console.log(`Navigating to: ${page}`); 
    
    // NOTE: To test data fetching, you must manually set a user email 
    // in the browser's console before running the preview:
    // localStorage.setItem('user', 'your_registered_email@example.com');
    // And ensure your Flask backend is running.

    return <Profile navigate={mockNavigate} />;
}

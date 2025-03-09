'use client'

import { useState, useEffect } from 'react';
import { LoginButton } from '../wallet/app/consts/LoginButton';

const Profile = () => {
    const useAuth = () => {
        const [user, setUser] = useState<any>(null);
    
        useEffect(() => {
            const fetchUser = async () => {
                const userData = await new Promise((resolve) =>
                    setTimeout(() => resolve({ name: 'John Doe', email: 'john.doe@example.com' }), 1000)
                );
                setUser(userData);
            };
    
            fetchUser();
        }, []);
    
        return { user };
    }
    const { user } = useAuth();

    return (
        <div>
            <h1>Profile</h1>
            <p>Name: {user?.name}</p>
            <p>Email: {user?.email}</p>
            <LoginButton />
        </div>
    );
}

export default Profile;
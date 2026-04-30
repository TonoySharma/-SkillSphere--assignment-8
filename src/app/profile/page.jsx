"use client"
import React from 'react';
import { authClient } from '../../lib/auth-client';
import { Avatar, Card } from '@heroui/react';

const ProfilePage = () => {
    const userData = authClient.useSession();
    // console.log(usrData,  'usrData')
    const user = userData.data?.user
    //   console.log(user, 'user')
    return (
        <div>
            <Card className="max-w-md mx-auto rounded-xl border my-5 p-6 flex justify-center items-center">

                <Avatar className="h-32 w-32 ring-4 ring-purple-200">
                    <Avatar.Image
                        alt={user?.name || "User"}
                        src={user?.image}
                        referrerPolicy="no-referrer" />

                    <Avatar.Fallback>
                        {user?.name?.charAt(0) || "U"}
                    </Avatar.Fallback>
                </Avatar>

                <h2 className='text-xl font-semibold'>Name:{user?.name}</h2>
                <p className='font-medium'>Email:{user?.email}</p>
                <p className="text-gray-600 text-sm text-center">
                    {user?.bio || "No bio added yet."}
                </p>

            </Card>
        </div>
    );
};

export default ProfilePage;
"use client"
import React from 'react';
import { authClient } from '../../lib/auth-client';
import { Avatar, Card } from '@heroui/react';
import { UpdateModal } from '@/components/updateprofile/UpdateProfile';

const ProfilePage = () => {
    const userData = authClient.useSession();
    // console.log(usrData,  'usrData')
    const user = userData.data?.user
    //   console.log(user, 'user')
    return (
        <div className='px-3 sm:px-4 md:px-0'>
            
            <Card className="max-w-md mx-auto rounded-xl border my-5  p-6 flex justify-center items-center mb-50 ">
                 <div className='absolute top-3 right-4'>
                    <UpdateModal></UpdateModal>
                 </div>
                <Avatar className="h-30 w-30 ring-4 ring-purple-200">
                    <Avatar.Image
                        alt={user?.name || "User"}
                        src={user?.image}
                        referrerPolicy="no-referrer" />

                    <Avatar.Fallback>
                        {user?.name?.charAt(0) || "U"}
                    </Avatar.Fallback>
                </Avatar>

                <h2 className='text-xl font-semibold'>Name:{user?.name}</h2>
                <p className='font-medium '>Email: <span className='text-gray-600'>{user?.email}</span></p>
                <p className="text-gray-500 text-sm text-center font-medium">
                    {user?.bio || "No bio added yet."}
                </p>
                
            </Card>
        </div>
    );
};

export default ProfilePage;
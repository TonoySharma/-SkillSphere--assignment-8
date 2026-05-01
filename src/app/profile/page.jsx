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
            
            <Card className="max-w-md mx-auto rounded-xl border my-20 p-20 flex justify-center items-center  mb-30">
                    <div className='absolute top-4 right-4'>
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

                <h2 className='text-xl font-semibold'>Name: <span className='text-gray-600'>{user?.name}</span></h2>
                <p className='font-medium '>Email: <span className='text-gray-600'>{user?.email}</span></p>
            </Card>
        </div>
    );
};

export default ProfilePage;